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

  <table>
    <thead>
      <tr>
        <th>Trigger</th>
        <th>Content</th>
        <th>Languages</th>
      </tr>
    </thead>
    <tbody><tr><td colspan="3"><h3>JSX</h3></td></tr>
      <tr>
        <td><code>sinput→</code></td>
        <td>Input two-way binding</td>
        <td><b>js, ts, jsx, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
<input type="${1:text}" value={${2:value}()} onInput={e => ${3:setValue}(e.currentTarget.value)}/>
```
</details></td></tr><tr><td colspan="3"><h3>Component</h3></td></tr>
      <tr>
        <td><code>scomp→</code></td>
        <td>Base for an empty solid.js component</td>
        <td><b>js, jsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
export default function ${1:${TM_FILENAME_BASE}}() {

  return (
    <div>${1:${TM_FILENAME_BASE}}</div>
  );
}
```
</details></td></tr>
      <tr>
        <td><code>scontext→</code></td>
        <td>Base for a createContext() component</td>
        <td><b>js, jsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
import { createContext, createSignal, useContext } from "solid-js";

const ${TM_FILENAME_BASE/(.*?)\Context.*/${1:/capitalize}/i}Context = createContext();

export function ${TM_FILENAME_BASE/(.*?)\Context.*/${1:/capitalize}/i}Provider(props) {
  const [${TM_FILENAME_BASE/(.*?)\Context.*/${1:/downcase}/i}, set${TM_FILENAME_BASE/(.*?)\Context.*/${1:/capitalize}/i}] = createSignal(props.${TM_FILENAME_BASE/(.*?)\Context.*/${1:/downcase}/i} || ""),
    store = [${TM_FILENAME_BASE/(.*?)\Context.*/${1:/downcase}/i}, set${TM_FILENAME_BASE/(.*?)\Context.*/${1:/capitalize}/i}];

  return (
    <${TM_FILENAME_BASE/(.*?)\Context.*/${1:/capitalize}/i}Context.Provider value={store}>{props.children}</${TM_FILENAME_BASE/(.*?)\Context.*/${1:/capitalize}/i}Context.Provider>
  );
}

export function use${TM_FILENAME_BASE/(.*?)\Context.*/${1:/capitalize}/i}() {
  return useContext(${TM_FILENAME_BASE/(.*?)\Context.*/${1:/capitalize}/i}Context);
}
```
</details></td></tr>
      <tr>
        <td><code>scomp→</code></td>
        <td>Solid empty function component</td>
        <td><b>ts, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
const ${1:${TM_FILENAME_BASE}}: Component<{$2}> = (props) => {
  $0
  return <div></div>;
};
```
</details></td></tr>
      <tr>
        <td><code>spcomp→</code></td>
        <td>Solid empty Parent Component</td>
        <td><b>ts, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
const ${1:${TM_FILENAME_BASE}}: ParentComponent<{$2}> = (props) => {
  $0
  return <div>{props.children}</div>;
};
```
</details></td></tr>
      <tr>
        <td><code>sfcomp→</code></td>
        <td>Solid empty Flow Component</td>
        <td><b>ts, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
const ${1:${TM_FILENAME_BASE}}: FlowComponent<{$2}, ${3:JSX.Element}> = (props) => {
  $0
  return <div>{props.children}</div>;
};
```
</details></td></tr>
      <tr>
        <td><code>svcomp→</code></td>
        <td>Solid empty Void Component</td>
        <td><b>ts, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
const ${1:${TM_FILENAME_BASE}}: VoidComponent<{$2}> = (props) => {
  $0
  return <div></div>;
};
```
</details></td></tr>
      <tr>
        <td><code>scompi→</code></td>
        <td>Solid empty function componen. With Importst</td>
        <td><b>ts, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
import { Component } from "solid-js";

const ${1:${TM_FILENAME_BASE}}: Component<{$2}> = (props) => {
  $0
  return <div></div>;
};
```
</details></td></tr>
      <tr>
        <td><code>spcompi→</code></td>
        <td>Solid empty Parent Component. With Imports</td>
        <td><b>ts, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
import { ParentComponent } from "solid-js";

const ${1:${TM_FILENAME_BASE}}: ParentComponent<{$2}> = (props) => {
  $0
  return <div>{props.children}</div>;
};
```
</details></td></tr>
      <tr>
        <td><code>sfcompi→</code></td>
        <td>Solid empty Flow Component. With Imports</td>
        <td><b>ts, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
import { FlowComponent, JSX } from "solid-js";

const ${1:${TM_FILENAME_BASE}}: FlowComponent<{$2}, ${3:JSX.Element}> = (props) => {
  $0
  return <div>{props.children}</div>;
};
```
</details></td></tr>
      <tr>
        <td><code>svcompi→</code></td>
        <td>Solid empty Void Component. With Imports</td>
        <td><b>ts, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
import { VoidComponent } from "solid-js";

const ${1:${TM_FILENAME_BASE}}: VoidComponent<{$2}> = (props) => {
  $0
  return <div></div>;
};
```
</details></td></tr>
      <tr>
        <td><code>shtmlcomp→</code></td>
        <td>Component extending an HTML Element</td>
        <td><b>ts, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
const ${1:${TM_FILENAME_BASE}}: ParentComponent<
  JSX.IntrinsicElements["${2:div}"] & {
    $0
  }
> = (props) => {
  const [local, attrs] = splitProps(props, []);

  return <${2:div} {...attrs}>{props.children}</${2:div}>;
};
```
</details></td></tr>
      <tr>
        <td><code>shtmlcompi→</code></td>
        <td>Component extending an HTML Element. With Imports</td>
        <td><b>ts, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
import { ParentComponent, splitProps, JSX } from "solid-js";

const ${1:${TM_FILENAME_BASE}}: ParentComponent<
  JSX.IntrinsicElements["${2:div}"] & {
    $0
  }
> = (props) => {
  const [local, attrs] = splitProps(props, []);

  return <${2:div} {...attrs}>{props.children}</${2:div}>;
};
```
</details></td></tr><tr><td colspan="3"><h3>Effect</h3></td></tr>
      <tr>
        <td><code>seff→</code></td>
        <td>Simple createEffect</td>
        <td><b>js, ts, jsx, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
createEffect(() => {
  const value = ${1:source}();
  $0
});
```
</details></td></tr>
      <tr>
        <td><code>seffon→</code></td>
        <td>createEffect with explicit sources</td>
        <td><b>js, ts, jsx, tsx</b></td>
      </tr>
      <tr><td colspan="3"><details>
      <summary><sub>Toggle Code Snippet</sub></summary>

```tsx
createEffect(on(${1: source}, (value, prev) => {
  $0
}));
```
</details></td></tr></tbody></table>
<!-- ⛔️ GENERATE-SNIPPETS-TABLE:END — Do not remove or modify this section. -->

## Contributing

This is an open source project open to everyone. Contributions are welcome. ([github](https://github.com/solidjs-community/solid-snippets))

If you are contributing a snippet, please read about the [naming convention](#naming-convention) below and update only the snippet files. _(readme and package.json are updated automatically)_ You can use a [Snippet Generator](https://snippet-generator.app) and [Solid Playground](https://playground.solidjs.com) to get desired code.

Downloading and installing the repository isn't required to work on snippets. But if you want to test your changes before commiting, we use a [pnpm](https://pnpm.io) package manager. Once node modules are installed, you can use [CLI Scripts](#cli-scripts) to build and install locally built extension. _(You might have to reload your vscode window to apply extension update)_

### Naming Convention

When creating new snippets, please name the files with according suffix representing the target language:

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
