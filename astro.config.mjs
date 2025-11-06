// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      __CHARSET__: '"utf-8"',
    },
    server: {
      fs: {
        strict: false,
      },
    },
  },
});
