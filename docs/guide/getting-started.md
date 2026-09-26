# Getting Started

`@cc-heart/utils-client` is a collection of tools for the browser.

## Install

```shell
npm install @cc-heart/utils-client
# or
pnpm add @cc-heart/utils-client
```

## DOM helpers

```ts
import { addClassName, removeClassName, classNames, addStyles, isHidden } from '@cc-heart/utils-client'

addClassName(el, 'active', 'visible')
removeClassName(el, 'hidden')
addStyles(el, { color: 'red', fontSize: '14px' })

const cls = classNames('btn', { 'btn--active': isActive }, ['extra'])
```

## Clipboard

```ts
import { copyTextToClipboard } from '@cc-heart/utils-client'

copyTextToClipboard('hello world') // falls back when Clipboard API is unavailable
```

## rAF scheduler

```ts
import { raf } from '@cc-heart/utils-client'

const stop = raf(() => {
  // runs at most every `rate` frames
}, 2)

stop() // cancel
```

## Request

```ts
import { createFetchRequest } from '@cc-heart/utils-client'

const request = createFetchRequest()
// ...
```

## CSS namespace

```ts
import { generateCssNamespaceFn } from '@cc-heart/utils-client'

const ns = generateCssNamespaceFn('cc')
ns.b('button') // 'cc-button'
```

## SCSS Usage

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

## API Reference

See the auto-generated [API documentation](/api/).
