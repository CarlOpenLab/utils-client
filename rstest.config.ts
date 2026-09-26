import { defineConfig } from '@rstest/core'

export default defineConfig({
  include: ['__test__/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  globals: true,
  testEnvironment: 'jsdom',
  setupFiles: ['./__test__/setupJestDom.ts'],
  resolve: {
    alias: {
      '@': './src',
    },
  },
})
