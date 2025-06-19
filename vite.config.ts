import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import legacy from '@vitejs/plugin-legacy'
import { preloadImg } from './src/plugins/preloadimages'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    vue(),
    vueDevTools(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    preloadImg({
      dir: [
        'src/assets/img/**/*.{jpg,jpeg,png,svg,webp,avif}',
        'public/video/**/*.{mp4,webm,ogg}',
      ],
      attrs: {
        rel: 'preload',
      },
    }),
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
