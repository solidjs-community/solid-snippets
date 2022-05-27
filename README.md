<p>
  <a href="https://github.com/solidjs-community/solid-snippets">
    <img width="100%" src="https://assets.solidjs.com/banner?type=Snippets&background=tiles&project=%20" alt="Solid Snippets">
  </a>
</p>

# solid-snippets

VSCode extension with helpful code snippets for SolidJS.

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
```

## Snippets

| Snippet         | Purpose                       |
| --------------- | ----------------------------- |
| `sbase`         | Single file component base    |
| `more snippets` | List additional snippets here |
