const { readdirSync, readFileSync, writeFileSync } = require("fs")
const { join } = require("path")

const pathTo = (...path) => join(__dirname, ...path)

// if (lang === "ts") languages.push("typescript", "typescriptreact")
// else if (lang === "js") languages.push("javascript", "javascriptreact")
// else languages.push("typescript", "typescriptreact", "javascript", "javascriptreact")

const getCategoryName = prefix => prefix[0].toUpperCase() + prefix.substring(1)

const getLanguageName = id => {
	if (id === "ts") return "TS"
	if (id === "js") return "JS"
	return "TS & JS"
}

const categories = {}

// PARSE SNIPPET FILES
readdirSync(pathTo(`../snippets/`)).forEach(fileName => {
	if (!fileName.endsWith(".json")) return console.log("Skipping unrecognized file:", fileName)
	const json = JSON.parse(readFileSync(pathTo("../snippets/", fileName)))

	const [prefix, _lang] = fileName.split(".")

	const lang = _lang === "ts" ? "ts" : _lang === "js" ? "js" : "*"
	let snippets = categories[prefix]
	if (!snippets) categories[prefix] = snippets = []

	for (const snippetName in json) {
		const { body, prefix, description } = json[snippetName]
		if (typeof prefix !== "string" && !Array.isArray(prefix))
			return console.log(`"${snippetName}" snippet in ${fileName} has incorrect prefix.`)
		if (typeof body !== "string" && !Array.isArray(body))
			return console.log(`"${snippetName}" snippet in ${fileName} has incorrect body.`)
		if (typeof description !== "string")
			return console.log(`"${snippetName}" snippet in ${fileName} has incorrect description.`)

		snippets.push({ snippetName, prefix, description, lang })
	}
})

// GENERATE SNIPPETS TABLE
;(() => {
	const table = Object.entries(categories).reduce((md, [prefix, snippets]) => {
		md += `|<h4>*${getCategoryName(prefix)}*</h4>|\n`
		snippets.forEach(({ snippetName, prefix, description, lang }) => {
			md += `|\`${prefix}\`|${snippetName}|${description}|${getLanguageName(lang)}|\n`
		})
		return md
	}, "|Prefix|Name|Description|Languages|\n|----|----|----|----|\n")

	const readme = readFileSync(pathTo("../README.md")).toString()
	let start = readme.indexOf("-->", readme.indexOf("GENERATE-SNIPPETS-TABLE:START"))
	if (start === -1)
		return console.log("Couldn't find GENERATE-SNIPPETS-TABLE:START tag in README.md")
	start += 3

	const end = readme.indexOf("<!--", start)
	if (end === -1) return console.log("Couldn't find GENERATE-SNIPPETS-TABLE:END tag in README.md")

	let newReadme = readme.substring(0, start)
	newReadme += `\n\n${table}\n`
	newReadme += readme.substring(end)

	writeFileSync(pathTo("../README.md"), newReadme)
})()
