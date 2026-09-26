import { defineConfig } from '@rspress/core'
import { pluginTypeDoc } from '@rspress/plugin-typedoc'

export default defineConfig({
  root: 'docs',
  base: '/utils-client/',
  title: 'utils-client',
  description:
    'A collection of tools for the browser — DOM, clipboard, rAF, request & SCSS utilities',
  icon: '/logo.png',
  logo: '/logo.png',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/CarlOpenLab/utils-client',
      },
    ],
  },
  plugins: [
    pluginTypeDoc({
      entryPoints: ['index.ts'],
    }),
  ],
})
