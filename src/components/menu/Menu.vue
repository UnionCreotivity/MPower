<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="menu-icon-container"
    ref="containerRef"
    @click.stop="showMenu(true)"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="menu-right">
      <img :src="isWhiteMenu ? menuWhite : menuDefault" alt="" />
    </div>
  </div>

  <div class="menu-main" ref="menuRef" v-show="is_Show">
    <div class="menu-main-bg"><img src="../../assets/img/menu/menu_bg.webp" alt="menu_bg" /></div>
    <div class="left-img-box">
      <div class="images">
        <div
          class="img-box"
          v-for="(src, idx) in imgList"
          :key="idx"
          :ref="(el) => setImgRef(el, idx)"
        >
          <img :src="src" />
        </div>
      </div>
    </div>

    <div class="right-menu-box">
      <div class="logo-box">
        <router-link :to="{ name: 'home' }">
          <img src="../../assets/img/home/logo.svg" alt="logo" />
        </router-link>
      </div>

      <div class="link-box">
        <div class="item" v-for="(item, idx) in menuData" :key="item.id" @mouseenter="showImg(idx)">
          <div class="en" @click="handleMainClick(item)">{{ item.enName }}</div>
          <div class="zh" @click="handleMainClick(item)">{{ item.zhName }}</div>
          <!-- <div class="links">
            <router-link :to="{ name: link.link }" v-for="link in item.list" :key="link.id">
              <div>{{ link.name }}</div>
            </router-link>
          </div> -->
          <div class="links">
            <div
              v-for="link in item.list"
              :key="link.id"
              @click="handleSubLinkClick(link.link, link.tab)"
            >
              {{ link.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="menu-icon-close" @click.stop="showMenu(false)">
      <img src="../../assets/img/menu/close.svg" alt="close" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick, type ComponentPublicInstance, computed } from 'vue'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import { menuData } from './menuData'
import '@/assets/scss/menu/_menu.scss'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 控制開關
const is_Show = ref(false)
const menuRef = ref<HTMLElement | null>(null)

const whiteMenuRoutes = [
  'aerialPhoto',
  'mansionIndex',
  'tlkIndex',
  'lifegearIndex',
  'duravitIndex',
  'ehomeIndex',
]
const isWhiteMenu = computed(() => {
  const name = route.name as string
  const isSmallScreen = window.innerWidth < 1400
  const forceDefaultInSmallScreen = ['tlkIndex', 'lifegearIndex', 'duravitIndex']

  if (forceDefaultInSmallScreen.includes(name) && isSmallScreen) {
    return false
  }

  return whiteMenuRoutes.includes(name)
})

const menuDefault = new URL('@/assets/img/menu/menu_icon.svg', import.meta.url).href
const menuWhite = new URL('@/assets/img/menu/menu_white.svg', import.meta.url).href

const isMobile = ref(false)

/* 用於磁吸效果 */
const containerRef = ref<HTMLDivElement | null>(null)
/* 用於節流動畫，避免多次重複執行動畫 */
let animating = false
/* 紀錄最新的滑鼠事件，配合 requestAnimationFrame 控制更新頻率 */
let lastEvent: MouseEvent | null = null

/* 根據滑鼠事件計算並更新 containerRef 元素的 transform */
const updateTransform = (e: MouseEvent) => {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const offsetX = e.clientX - rect.left - rect.width / 2
  const offsetY = e.clientY - rect.top - rect.height / 2

  const rotateX = (offsetY / rect.height) * 15
  const rotateY = (offsetX / rect.width) * 15
  const scale = 1.05

  containerRef.value.style.transform = `
    translate(${offsetX * 0.6}px, ${offsetY * 0.6}px)
    rotateX(${-rotateX}deg)
    rotateY(${rotateY}deg)
    scale(${scale})
  `
}

const resetTransform = () => {
  if (!containerRef.value) return
  containerRef.value.style.transform = 'translate(0, 0) rotateX(0deg) rotateY(0deg) scale(1)'
}

/* 處理滑鼠移動事件 */
const handleMouseMove = (e: MouseEvent) => {
  if (isMobile.value) return // 📱 手機不執行
  lastEvent = e

  // 利用 requestAnimationFrame 做節流，避免每次滑鼠事件都直接觸發 updateTransform
  if (!animating) {
    animating = true
    window.requestAnimationFrame(() => {
      if (lastEvent) {
        updateTransform(lastEvent)
      }
      animating = false // 結束動畫更新
    })
  }
}

/* 滑鼠離開容器時呼叫，重置 transform */
const handleMouseLeave = () => {
  if (isMobile.value) return // 📱 手機不執行
  resetTransform()
}

/* CustomEase */
gsap.registerPlugin(CustomEase)
CustomEase.create('myEase', '0.24,0.43,0.15,0.97')

/* 判斷是否在同一張圖片中用的變數 */
const currentIndex = ref<number | null>(null)

/* ▼ 1. 圖片清單 */
const imgList = [
  new URL('@/assets/img/menu/1.webp', import.meta.url).href,
  new URL('@/assets/img/menu/2.webp', import.meta.url).href,
  new URL('@/assets/img/menu/3.webp', import.meta.url).href,
  new URL('@/assets/img/menu/4.webp', import.meta.url).href,
  new URL('@/assets/img/menu/5.webp', import.meta.url).href,
]

// getDom 確保是HTMLElement，可用 GSAP 直接操作 style、class 。
function getDom(el: Element | ComponentPublicInstance | null): HTMLElement | null {
  if (!el) return null

  // 如果是 Vue 元件，取 $el；否則是原生 DOM
  if ('$el' in el) {
    return el.$el as HTMLElement
  } else if (el instanceof HTMLElement) {
    return el
  }
  return null
}

/* DOM refs & 狀態 */
/* 用來把每個圖片元素的真實 DOM（HTMLElement）存到一個陣列 imgRefs */
const imgRefs = ref<HTMLElement[]>([])
const setImgRef = (el: Element | ComponentPublicInstance | null, idx: number) => {
  const dom = getDom(el)
  if (dom) {
    imgRefs.value[idx] = dom
  }
}

const handleMainClick = (item: (typeof menuData)[number]) => {
  if (item.pathName) {
    if (item.jumpToChild && item.list.length > 0) {
      const firstChild = item.list[0]
      // 判斷是否是 aerialPhoto，需要加 tab=0
      if (firstChild.link === 'aerialPhoto') {
        router.push({ name: firstChild.link, query: { tab: 0 } })
      } else {
        router.push({ name: firstChild.link })
      }
    } else {
      router.push(`/${item.pathName}`)
    }
  }
}

//tab是為了空拍圖切換多個tab
const handleSubLinkClick = (link: string, tab?: number) => {
  if (link) {
    // 有路由名稱，要跳轉頁面
    if (tab !== undefined) {
      // 有 tab 參數，就帶 query
      router.push({ name: link, query: { tab } })
    } else {
      // 沒有 tab，純跳頁
      router.push({ name: link })
    }
    showMenu(false)
  }

  // else {
  //   // 沒有路由名稱的，理論上就是同頁切 tab
  //   if (route.name === 'aerialPhoto') {
  //     if (tab !== undefined) {
  //       // 同頁改 tab query，不刷新頁面
  //       router.replace({ name: 'aerialPhoto', query: { tab } })
  //     }
  //     showMenu(false)
  //   } else {
  //     // 其他頁面想切 tab，就跳 aerialPhoto 並帶 tab
  //     if (tab !== undefined) {
  //       router.push({ name: 'aerialPhoto', query: { tab } })
  //     }
  //     showMenu(false)
  //   }
  // }
}

let zCounter = 1 // 每張圖都會把自身 z-index 設成 ++zCounter

//hover link show image
const showImg = (idx: number) => {
  // 若hover到的是正在顯示的圖片，就跳過動畫
  if (currentIndex.value === idx) return
  currentIndex.value = idx

  const el = imgRefs.value[idx]
  if (!el) return

  // 每次 hover 前都先重設 clip-path，讓它可以從底部再展開一次
  gsap.set(el, { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.7 })

  // 疊在最上層再展開
  gsap.set(el, { zIndex: ++zCounter })
  gsap.fromTo(
    el,
    { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.7 },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1,
      scale: 1,
      ease: 'myEase',
      overwrite: true,
    },
  )
}

const showed = new Set<number>() // 記錄「已經展開過」的 index
const showMenu = (val: boolean) => {
  if (val) {
    is_Show.value = true
    nextTick(() => {
      if (!menuRef.value) return
      const tl = gsap.timeline({})
      const texttl = gsap.timeline({})
      const linkBoxes = gsap.utils.toArray<HTMLElement>('.link-box .item .links')

      // 開啟動畫（向上展開）
      tl.fromTo(
        menuRef.value,
        { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'expo.inOut',
          opacity: 1,
        },
      ).fromTo(
        '.left-img-box .img-box img:first-child',
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.4 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'myEase',
          scale: 1,
        },
        '<0.2',
      )

      texttl
        .from('.logo-box a img', { y: '100%', duration: 1, ease: 'myEase' }, '<0.5')
        .from('.item .en,.item .zh', { y: 70, duration: 0.8, opacity: 0 }, '<0.2')
        .from([linkBoxes[0].children], { y: 70, opacity: 0, duration: 0.8, stagger: 0.1 }, '<0.3')
        .from([linkBoxes[1].children], { y: 70, opacity: 0, duration: 0.8, stagger: 0.1 }, '<')
        .from([linkBoxes[2].children], { y: 70, opacity: 0, duration: 0.8, stagger: 0.1 }, '<')
        .from([linkBoxes[3].children], { y: 70, opacity: 0, duration: 0.8, stagger: 0.1 }, '<')
        .from([linkBoxes[4].children], { y: 70, opacity: 0, duration: 0.8, stagger: 0.1 }, '<')

      // Reset all image z-index and clip-path
      imgRefs.value.forEach((el) => {
        gsap.set(el, { clipPath: 'inset(100% 0% 0% 0%)', zIndex: 0 })
      })

      zCounter = 1
      showed.clear()
      currentIndex.value = null //確保 showImg(0) 可正常執行

      showImg(0) // 預設顯示第一張
    })
  } else {
    if (!menuRef.value) return

    const closeTl = gsap.timeline({})

    // 關閉動畫（向上收起）
    closeTl
      .to('.menu-main .left-img-box .images .img-box', {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 1,
        ease: 'myEase',
      })

      .to(
        menuRef.value,
        {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.8,
          ease: 'myEase',
          onComplete: () => {
            is_Show.value = false
            // 重設 clip-path 為初始值（避免下次打開動畫出錯）
            gsap.set(menuRef.value, { clipPath: 'inset(0% 100% 0% 0%)' })
          },
        },
        '<0.1',
      )
  }
}

onMounted(() => {
  if (is_Show.value && menuRef.value) {
    gsap.set(menuRef.value, {
      clipPath: 'inset(100% 0% 0% 0%)',
    })
  }
  nextTick(() => {
    /* 先把所有圖片藏到底部 */
    imgRefs.value.forEach((el) => gsap.set(el, { clipPath: 'inset(100% 0% 0% 0%)', zIndex: 0 }))

    /* 目錄內圖片 預設顯示第一張 */
    showImg(0)
    isMobile.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  })
})
</script>

<style lang="scss"></style>
