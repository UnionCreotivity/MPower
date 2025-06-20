import type { Plugin } from 'vite'
import fg from 'fast-glob'
import fs from 'fs'
import path from 'path'

export function generatePrecache(): Plugin {
  return {
    name: 'generate-precache-manifest',
    apply: 'build',
    closeBundle() {
      const files = fg.sync('dist/assets/**/*.{png,jpg,jpeg,webp,svg,avif,gif,bmp,mp4}', {
        dot: false,
      })

      const cleanPaths = files.map((f) => f.replace(/^dist\//, ''))
   
     const manifestPath = path.resolve(process.cwd(), 'dist/precache-manifest.json')
      fs.writeFileSync(manifestPath, JSON.stringify(cleanPaths, null, 2), 'utf-8')
      console.log(`✅ [precache] 已產生 ${cleanPaths.length} 筆資源`)
    },
  }
}
