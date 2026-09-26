import { defineConfig, js, ts } from '@rslint/core';

export default defineConfig([
  js.configs.recommended,
  ts.configs.recommended,
  {
    rules: {
      // `T = any` is an intentional generic default in the public API (e.g. getPackage)
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]);
