const { readdirSync, readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const pathTo = (...path) => join(__dirname, ...path);

const getCategoryName = name => name[0].toUpperCase() + name.substring(1).replace(/-/, " ");

const getLanguageName = id => {
  if (id === "ts") return "ts, tsx";
  if (id === "js") return "js, jsx";
  return "js, ts, jsx, tsx";
};

const getConfigLanguage = id => {
  if (id === "ts") return ["typescript", "typescriptreact"];
  if (id === "js") return ["javascript", "javascriptreact"];
  return ["typescript", "typescriptreact", "javascript", "javascriptreact"];
};

const categories = {};
const configList = [];

// PARSE SNIPPET FILES
readdirSync(pathTo(`../snippets/`)).forEach(fileName => {
  if (!fileName.endsWith(".json")) return console.log("Skipping unrecognized file:", fileName);
  const json = JSON.parse(readFileSync(pathTo("../snippets/", fileName)));

  const [prefix, _lang] = fileName.split(".");

  const lang = _lang === "ts" ? "ts" : _lang === "js" ? "js" : "*";
  let snippets = categories[prefix];
  if (!snippets) categories[prefix] = snippets = [];

  for (const snippetName in json) {
    const { body, prefix, description } = json[snippetName];
    if (typeof prefix !== "string")
      return console.log(`"${snippetName}" snippet in ${fileName} has incorrect prefix.`);
    if (typeof body !== "string" && !Array.isArray(body))
      return console.log(`"${snippetName}" snippet in ${fileName} has incorrect body.`);
    if (typeof description !== "string")
      return console.log(`"${snippetName}" snippet in ${fileName} has incorrect description.`);

    snippets.push({ prefix, description, lang });
  }

  getConfigLanguage(lang).forEach(language => {
    configList.push({
      language,
      path: `./snippets/${fileName}`,
    });
  });
});

// GENERATE SNIPPETS TABLE
(() => {
  const table = Object.entries(categories).reduce((md, [prefix, snippets]) => {
    md += `|<h4>*${getCategoryName(prefix)}*</h4>|\n`;
    snippets.forEach(({ prefix, description, lang }) => {
      md += `|\`${prefix}\`|${description}|**${getLanguageName(lang)}**|\n`;
    });
    return md;
  }, "|Trigger|Content|Languages|\n|----|----|----|\n");

  const readme = readFileSync(pathTo("../README.md")).toString();
  let start = readme.indexOf("-->", readme.indexOf("GENERATE-SNIPPETS-TABLE:START"));
  if (start === -1)
    return console.log("Couldn't find GENERATE-SNIPPETS-TABLE:START tag in README.md");
  start += 3;

  const end = readme.indexOf("<!--", start);
  if (end === -1) return console.log("Couldn't find GENERATE-SNIPPETS-TABLE:END tag in README.md");

  let newReadme = readme.substring(0, start);
  newReadme += `\n\n${table}\n`;
  newReadme += readme.substring(end);

  writeFileSync(pathTo("../README.md"), newReadme);
})();

// UPDATE PACKAGE.JSON CONFIG
(() => {
  const pkg = JSON.parse(readFileSync(pathTo("../package.json")));
  pkg.contributes.snippets = configList;
  writeFileSync(pathTo("../package.json"), JSON.stringify(pkg, null, 2));
})();
