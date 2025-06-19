import type { Plugin } from 'vite'
import fg from 'fast-glob'
import path from 'path'

type PreloadImagesOptions = {
  dir: string | string[]
  attrs?: {
    rel?: 'preload' | 'prefetch'
  }
}

export const preloadImg = (options: PreloadImagesOptions): Plugin => {
  const { dir, attrs = {} } = options
  const assetFiles: string[] = []

  return {
    name: 'vite-plugin-asset-preload',
    generateBundle(_, bundle) {
      const files = fg.sync(dir)
      const values = Object.values(bundle)

      values.forEach((item) => {
        const originalName = Reflect.get(item, 'originalFileName')
        if (files.includes(originalName)) {
          assetFiles.push(item.fileName)
        }
      })
    },
    transformIndexHtml(html, ctx) {
      let files: string[] = []

      if (ctx.server) {
        const base = ctx.server.config.base || ''
        files = fg.sync(dir).map((file) => base + file)
      } else {
        files = assetFiles
      }

      return files.map((href) => {
        const ext = path.extname(href).toLowerCase()
        let asType = ''
        let type = ''

        if (/\.(png|jpe?g|webp|svg|gif|avif)$/.test(ext)) {
          asType = 'image'
        } else if (/\.(mp4|webm|ogg)$/.test(ext)) {
          asType = 'video'
          if (ext === '.mp4') type = 'video/mp4'
          else if (ext === '.webm') type = 'video/webm'
       
        }

        return {
          tag: 'link',
          attrs: {
            rel: attrs.rel || 'preload',
            href,
            as: asType,
            ...(type ? { type } : {}),
          },
        }
      })
    },
  }
}
