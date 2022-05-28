<p>
  <a href="https://github.com/solidjs-community/solid-snippets">
    <img width="100%" src="https://assets.solidjs.com/banner?type=Snippets&background=tiles&project=%20" alt="Solid Snippets">
  </a>
</p>

# Solid Snippets

VSCode extension with helpful code snippets for SolidJS.

[**GET THE EXTENSION**](https://marketplace.visualstudio.com/items?itemName=solidjs-community.solid-snippets)

## Snippets

<!-- ⛔️ GENERATE-SNIPPETS-TABLE:START — Do not remove or modify this section. -->

|Trigger|Content|Languages|
|----|----|----|
|<h4>*JSX*</h4>|
|`sinput`|Input two-way binding|**js, ts, jsx, tsx**|
|<h4>*Component*</h4>|
|`scomp`|Base for an empty solid.js component|**js, jsx**|
|`scontext`|Base for a createContext() component|**js, jsx**|
|`scomp`|Solid empty function component|**ts, tsx**|
|`spcomp`|Solid empty Parent Component|**ts, tsx**|
|`sfcomp`|Solid empty Flow Component|**ts, tsx**|
|`svcomp`|Solid empty Void Component|**ts, tsx**|
|`scompi`|Solid empty function componen. With Importst|**ts, tsx**|
|`spcompi`|Solid empty Parent Component. With Imports|**ts, tsx**|
|`sfcompi`|Solid empty Flow Component. With Imports|**ts, tsx**|
|`svcompi`|Solid empty Void Component. With Imports|**ts, tsx**|
|`shtmlcomp`|Component extending an HTML Element|**ts, tsx**|
|`shtmlcompi`|Component extending an HTML Element. With Imports|**ts, tsx**|
|<h4>*Effect*</h4>|
|`seff`|Simple createEffect|**js, ts, jsx, tsx**|
|`seffon`|createEffect with explicit sources|**js, ts, jsx, tsx**|

<!-- ⛔️ GENERATE-SNIPPETS-TABLE:END — Do not remove or modify this section. -->

## Contributing

This is an open source project open to everyone of SolidJS community. Contributions are welcome. ([github](https://github.com/solidjs-community/solid-snippets))

If you are contributing a snippet, please read about the [naming convention](#naming-convention) below and update only the snippet files. _(readme and package.json are updated automatically)_ You can use a [Snipper Generator](https://snippet-generator.app) and [Solid Playground](https://playground.solidjs.com) to get the code right.

Downloading and installing the repository isn't required to work on snippets. But if you want to test your changes before commiting, we use a [pnpm](https://pnpm.io) package manager. Once node modules are installed, you can use [CLI Scripts](#cli-scripts) to build and install locally built extension. _(You might have to reload your vscode window to apply extension update)_

### Naming Convention

When creating new snippets, please name the files with according suffix representing target language:

```sh
snippets/
  # snippet only for typescript
  component.ts.json
  # snippet only for javascript
  component.js.json
  # universal snippet for both languages
  effect.json
```

### CLI Scripts

```sh
# update snippets table & package.json config
pnpm run update-snippets

# update snippets & build extension package
pnpm run build

# install built extension package
pnpm run install-extension

```
