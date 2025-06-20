import type { Plugin } from 'vite'
import fg from 'fast-glob'
import fs from 'fs'
import path from 'path'

interface PrecachePluginOptions {
  assetsDir?: string // 目標資料夾，預設 dist/assets
  exts?: string[]    // 支援的副檔名，預設常用圖片及 mp4
}

export function generatePrecache(options?: PrecachePluginOptions): Plugin {
  const assetsDir = options?.assetsDir || 'dist/assets'
  const exts = options?.exts || ['png','jpg','jpeg','webp','svg','avif','gif','bmp','mp4']

  return {
    name: 'generate-precache-manifest',
    apply: 'build',
    closeBundle() {
      try {
        const pattern = `${assetsDir}/**/*.{${exts.join(',')}}`
        const files = fg.sync(pattern, { dot: false })

        // 把路徑轉成以 / 開頭的絕對路徑，方便 service worker 快取
        const cleanPaths = files.map(f => '/' + f.replace(/^dist\//, '').replace(/\\/g, '/'))

        const manifestPath = path.resolve(process.cwd(), 'dist/precache-manifest.json')
        fs.writeFileSync(manifestPath, JSON.stringify(cleanPaths, null, 2), 'utf-8')

        console.log(`✅ [precache] 已產生快取清單，檔案數量: ${cleanPaths.length}`)
      } catch (err) {
        console.error('❌ [precache] 快取清單產生失敗:', err)
      }
    },
  }
}
