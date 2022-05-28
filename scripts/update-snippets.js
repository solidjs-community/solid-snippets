const { readdirSync, readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const pathTo = (...path) => join(__dirname, ...path);

const getCategoryName = name => name[0].toUpperCase() + name.substring(1).replace(/-/, " ");

const getLanguageName = languages =>
  languages
    .join(", ")
    .replace(/javascriptreact/, "jsx")
    .replace(/typescriptreact/, "tsx")
    .replace(/javascript/, "js")
    .replace(/typescript/, "ts");

const getLanguages = fileName => {
  const languages = [];
  if (fileName.includes(".jsx.")) languages.push("javascriptreact");
  else if (fileName.includes(".js.")) languages.push("javascript", "javascriptreact");
  if (fileName.includes(".tsx.")) languages.push("typescriptreact");
  else if (fileName.includes(".ts.")) languages.push("typescript");
  if (!languages.length) return ["typescript", "typescriptreact", "javascript", "javascriptreact"];
  return languages;
};

const stringifyBody = body =>
  (typeof body === "string" ? body : body.join("\n")).replace(/\t/g, "  ");

const categories = {};
const configList = [];

// PARSE SNIPPET FILES
readdirSync(pathTo(`../snippets/`)).forEach(fileName => {
  if (!fileName.endsWith(".json")) return console.log("Skipping unrecognized file:", fileName);
  const json = JSON.parse(readFileSync(pathTo("../snippets/", fileName)));

  const key = fileName.split(".")[0];
  const languages = getLanguages(fileName);
  const langName = getLanguageName(languages);

  let snippets = categories[key];
  if (!snippets) categories[key] = snippets = [];

  for (const snippetName in json) {
    const { body, prefix, description } = json[snippetName];
    if (typeof prefix !== "string")
      return console.log(`"${snippetName}" snippet in ${fileName} has incorrect prefix.`);
    if (typeof body !== "string" && !Array.isArray(body))
      return console.log(`"${snippetName}" snippet in ${fileName} has incorrect body.`);
    if (typeof description !== "string")
      return console.log(`"${snippetName}" snippet in ${fileName} has incorrect description.`);

    snippets.push({ prefix, description, langName, body });
  }

  languages.forEach(language => {
    configList.push({
      language,
      path: `./snippets/${fileName}`,
    });
  });
});

// GENERATE SNIPPETS TABLE
(() => {
  let table = `
  <table>
    <thead>
      <tr>
        <th>Trigger</th>
        <th>Content</th>
        <th>Languages</th>
      </tr>
    </thead>
    <tbody>`;
  Object.entries(categories).forEach(([prefix, snippets]) => {
    table += `<tr><td colspan="3"><h3>${getCategoryName(prefix)}</h3></td></tr>`;
    snippets.forEach(({ prefix, description, langName, body }) => {
      table += `
      <tr>
        <td><code>${prefix}→</code></td>
        <td>${description}</td>
        <td><b>${langName}</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sup>Toggle Code Snippet</sup></summary>

\`\`\`tsx
${stringifyBody(body)}
\`\`\`

</details></td></tr>`;
    });
  });
  table += `</tbody></table>`;

  const readme = readFileSync(pathTo("../README.md")).toString();
  let start = readme.indexOf("-->", readme.indexOf("GENERATE-SNIPPETS-TABLE:START"));
  if (start === -1)
    return console.log("Couldn't find GENERATE-SNIPPETS-TABLE:START tag in README.md");
  start += 3;

  const end = readme.indexOf("<!--", start);
  if (end === -1) return console.log("Couldn't find GENERATE-SNIPPETS-TABLE:END tag in README.md");

  let newReadme = readme.substring(0, start);
  newReadme += `\n${table}\n\n`;
  newReadme += readme.substring(end);

  writeFileSync(pathTo("../README.md"), newReadme);
})();

// UPDATE PACKAGE.JSON CONFIG
(() => {
  const pkg = JSON.parse(readFileSync(pathTo("../package.json")));
  pkg.contributes.snippets = configList;
  writeFileSync(pathTo("../package.json"), JSON.stringify(pkg, null, 2));
})();
