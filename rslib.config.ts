import { defineConfig } from '@rslib/core'

const externals = [/^@cc-heart\/utils/]

export default defineConfig({
  source: {
    entry: {
      index: ['./index.ts', './src/**'],
    },
  },
  lib: [
    {
      format: 'esm',
      bundle: false,
      output: {
        distPath: { root: './dist/esm' },
        filename: { js: '[name].js' },
        externals,
      },
    },
    {
      format: 'cjs',
      bundle: false,
      output: {
        distPath: { root: './dist/cjs' },
        filename: { js: '[name].cjs' },
        externals,
      },
    },
  ],
})
