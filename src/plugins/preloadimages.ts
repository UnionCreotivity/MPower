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
      //取得bundle物件的value
      const values = Object.values(bundle)
      //透過fast-glob抓取dir對應的路徑檔案
      const files = fg.sync(dir)
      values.forEach((item) => {
        //取得getter數值
        if (files.includes(Reflect.get(item, 'originalFileName'))) {
          //files的路徑如果能對應bundle value的路徑，那就放入assetsImages
          assetsImages.push(item.fileName)
        }
      })
    },
    transformIndexHtml(html, ctx) {
      let images: string[] = []
      //判斷開發還是生產環境
      if (ctx.server) {
        const files = fg.sync(dir)
        //vite config可能有自己設定的初始路徑(base)
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
