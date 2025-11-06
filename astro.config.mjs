// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://atlantec.es',
  output: 'static',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
    assets: '_astro'
  },
  compressHTML: true,
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
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js'
        }
      }
    }
  }
});
