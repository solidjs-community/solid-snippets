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

|Prefix|Name|Description|Languages|
|----|----|----|----|
|<h4>*Component*</h4>|
|`scomp`|Solid Functional Component|Base for an empty solid.js component|JS|
|`scontext`|Solid Context Component|Base for a createContext() component|JS|
|`shtmlcomp`|Component extending an HTML Element|Component extending an HTML Element|TS|
|<h4>*Effect*</h4>|
|`seff`|Simple createEffect|Simple createEffect|TS & JS|
|`seffon`|createEffect with explicit sources|createEffect with explicit sources|TS & JS|
|<h4>*Jsx*</h4>|
|`sinput`|Input two-way binding|Input two-way binding|TS & JS|

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
