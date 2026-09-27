<p align="center">
  <img src="https://raw.githubusercontent.com/CarlOpenLab/utils-client/master/assets/logo.png?v=2" width="160" alt="@cc-heart/utils-client logo" />
</p>

<h1 align="center">@cc-heart/utils-client</h1>

<p align="center">🖥️ A collection of tools for the browser — DOM, clipboard, rAF, request & SCSS utilities</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@cc-heart/utils-client"><img src="https://img.shields.io/npm/v/@cc-heart/utils-client.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@cc-heart/utils-client"><img src="https://img.shields.io/npm/dm/@cc-heart/utils-client.svg" alt="npm downloads" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/npm/l/@cc-heart/utils-client.svg" alt="license" /></a>
</p>

<p align="center">
  <a href="https://carlopenlab.github.io/utils-client/">📖 Docs</a>
</p>

> **The utils family** · core: [`@cc-heart/utils`](https://github.com/CarlOpenLab/utils) · Node.js runtime: [`@cc-heart/utils-service`](https://github.com/CarlOpenLab/utils-service) · browser: [`@cc-heart/utils-client`](https://github.com/CarlOpenLab/utils-client)

## Features

- 🧩 **DOM** — `addClassName`, `removeClassName`, `classNames`, `addStyles`, `removeStyles`, `getStyles`, `getPadding`, `isHidden`
- 📋 **Clipboard** — `copyTextToClipboard` with graceful fallback
- 🎞️ **rAF** — throttled `requestAnimationFrame` scheduler
- 🌐 **Request** — fetch-based `Request` class & `createFetchRequest`
- 🎨 **CSS** — `generateCssNamespaceFn` BEM-style namespace helper
- 💅 **SCSS kit** — variables, functions & mixins with customizable namespace
- 🌳 ESM + CJS dual builds with full TypeScript types

## Install

```shell
npm install @cc-heart/utils-client
# or
pnpm add @cc-heart/utils-client
```

## Usage

### DOM helpers

```ts
import { addClassName, removeClassName, classNames, addStyles, isHidden } from '@cc-heart/utils-client'

addClassName(el, 'active', 'visible')
removeClassName(el, 'hidden')
addStyles(el, { color: 'red', fontSize: '14px' })

const cls = classNames('btn', { 'btn--active': isActive }, ['extra'])
```

### Clipboard

```ts
import { copyTextToClipboard } from '@cc-heart/utils-client'

copyTextToClipboard('hello world') // falls back when Clipboard API is unavailable
```

### rAF scheduler

```ts
import { raf } from '@cc-heart/utils-client'

const stop = raf(() => {
  // runs at most every `rate` frames
}, 2)

stop() // cancel
```

### Request

```ts
import { createFetchRequest } from '@cc-heart/utils-client'

const request = createFetchRequest()
// ...
```

### CSS namespace

```ts
import { generateCssNamespaceFn } from '@cc-heart/utils-client'

const ns = generateCssNamespaceFn('cc')('button')
ns.b() // 'cc-button'
ns.e('icon') // 'cc-button__icon'
```

### SCSS Usage

Create an overwrite file (e.g. `overwrite.scss`), and write the following content:

```scss
@forward '@cc-heart/utils-client/scss/variable.scss' with (
  $namespace: 'cc'
);
```

Create a new scss file (e.g. `lib.scss`), and write the following content:

```scss
@use './overwrite.scss' as *;

@forward '@cc-heart/utils-client/scss/function.scss';
@forward '@cc-heart/utils-client/scss/mixins.scss';
```

## LICENSE

`@cc-heart/utils-client` is licensed under the [MIT License](./LICENSE).
