<p>
  <a href="https://github.com/solidjs-community/solid-snippets">
    <img width="100%" src="https://assets.solidjs.com/banner?type=Snippets&background=tiles&project=%20" alt="Solid Snippets">
  </a>
</p>

# solid-snippets

VSCode extension with helpful code snippets for SolidJS.

## Snippets

<!-- ⛔️ GENERATE-SNIPPETS-TABLE:START — Do not remove or modify this section. -->

|Prefix|Name|Description|Languages|
|----|----|----|----|
|<h4>*Component*</h4>|
|`scomp`|Solid Functional Component|Base for an empty solid.js component|JS|
|<h4>*Test*</h4>|
|`stest`|Test Snippet|Test Snippet|TS & JS|

<!-- ⛔️ GENERATE-SNIPPETS-TABLE:END — Do not remove or modify this section. -->

## Contributing

This is an open source project open to everyone of SolidJS community. Contributions are welcome [github](https://github.com/solidjs-community/solid-snippets)

If you are contributing a snippet, please read about the [naming convention](#naming-convention) below.

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
# build extension package
pnpm run build

# install built extension package
pnpm run install-extension

# update snippets table & package.json config
pnpm run update-snippets
```
