import type { Plugin } from 'vite'
import fg from 'fast-glob'

type PreloadImagesOptions = {
  dir: string
  attrs: {
    rel: 'preload' | 'prefetch'
  }
}

export const preloadImg = (options: PreloadImagesOptions): Plugin => {
  const { dir, attrs = {} } = options
  const assetsImages: string[] = []
  return {
    name: 'vite-plugin-image-prefetch',
    generateBundle(_, bundle) {
      const values = Object.values(bundle)
      const files = fg.sync(dir)
      console.log(bundle)
      values.forEach((item) => {
        //取得getter數值
        if (files.includes(Reflect.get(item, 'originalFileName'))) {
          assetsImages.push(item.fileName)
        }
      })
    },
    transformIndexHtml(html, ctx) {
      let images: string[] = []
      //判斷開發還是生產環境
      if (ctx.server) {
        const files = fg.sync(dir)
        const base = ctx.server?.config.base || ''

        images = files.map((file) => base + file)
      } else {
        images = assetsImages
      }
      return images.map((href) => {
        return {
          tag: 'link',
          attrs: {
            rel: 'prefetch',
            href: href,
            as: 'image',
            ...attrs,
          },
        }
      })
    },
  }
}
