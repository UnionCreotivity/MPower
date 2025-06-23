import { fileURLToPath, URL } from 'node:url'
import { generatePrecache } from './src/plugins/vite-plugin-generate-precache'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import legacy from '@vitejs/plugin-legacy'
// import { preloadImg } from './src/plugins/preloadimages'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    vue(),
    vueDevTools(),
    generatePrecache({ assetsDir: 'dist/assets' }),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),

    // preloadImg({
    //   dir: 'src/assets/img/**/*.{jpg,png,svg,webp}',
    //   attrs: {
    //     rel: 'prefetch',
    //   },
    // }),
  ],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
