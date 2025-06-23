import type { Plugin } from 'vite'
import fg from 'fast-glob'
import fs from 'fs'
import path from 'path'

interface PrecachePluginOptions {
  assetsDir?: string // 目標資料夾，預設 dist/assets
  exts?: string[]    // 支援的副檔名，預設圖片和影片常用副檔名
}

export function generatePrecache(options?: PrecachePluginOptions): Plugin {
  const assetsDir = options?.assetsDir || 'dist/assets'
  const exts = options?.exts || ['png','jpg','jpeg','webp','svg','mp4']

  return {
    name: 'generate-precache-manifest',
    apply: 'build',
    closeBundle() {
      try {
        // 搜尋指定目錄下所有符合副檔名的檔案
        const pattern = `${assetsDir}/**/*.{${exts.join(',')}}`
        const files = fg.sync(pattern, { dot: false })

        // 路徑轉換成 /assets/img/menu/1.webp 這種格式，方便 service worker 快取
        const cleanPaths = files.map(f => '/' + f.replace(/^dist\//, '').replace(/\\/g, '/'))

        // 輸出 precache 清單檔案
        const manifestPath = path.resolve(process.cwd(), 'dist/precache-manifest.json')
        fs.writeFileSync(manifestPath, JSON.stringify(cleanPaths, null, 2), 'utf-8')

        console.log(`✅ [precache] 自動產生快取清單，共 ${cleanPaths.length} 個檔案`)
      } catch (err) {
        console.error('❌ [precache] 產生快取清單失敗:', err)
      }
    },
  }
}
