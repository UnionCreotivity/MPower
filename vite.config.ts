import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import legacy from '@vitejs/plugin-legacy'
import { preloadImg } from './src/plugins/preloadimages'

// import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'vendor_gsap'
            if (id.includes('swiper')) return 'vendor_swiper'
            if (id.includes('axios')) return 'vendor_axios'
            if (id.includes('pinia')) return 'vendor_pinia'
          }
        }
      }
    },
  },

  plugins: [
    vue(),
    vueDevTools(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    preloadImg({
      dir: 'src/assets/img/**/*.{jpg,png,svg,webp}',
      attrs: {
        rel: 'preload',
      },
    }),
    // visualizer({
    //   filename: 'stats.html', // 預設會在根目錄產生
    //   open: true,             // 自動開啟報告頁
    //   gzipSize: true,
    //   brotliSize: true,
    // })
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
