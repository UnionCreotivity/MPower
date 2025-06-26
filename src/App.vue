<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div class="app-main">
    <FadeIn>
      <div class="app-loading" v-show="!is_Load">
        <div class="app-loading-container">
          <div class="progress-text">{{ displayProgress }}%</div>
        </div>
      </div>
    </FadeIn>
    <div class="app-container">
      <router-view v-slot="{ Component, route }">
        <FadeIn>
          <component :is="Component" :key="route.path" :is_Load="is_Load" />
        </FadeIn>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import FadeIn from './components/transition/FadeIn.vue'
import axios from 'axios'
import homeVideoSrc from '@/assets/img/home/c1_bg.mp4'

const is_Load = ref(false)
const progress = ref(0)
const displayProgress = ref(0)

// 圖片預載入
const waitForPreloadedImages = (): Promise<void> => {
  return new Promise((resolve) => {
    const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]')
    const total = preloadLinks.length

    if (total === 0) {
      progress.value += 50
      animateProgress()
      resolve()
      return
    }

    let count = 0
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    preloadLinks.forEach((link: any) => {
      const img = new Image()
      img.src = link.href
      img.onload = img.onerror = () => {
        count++
        progress.value = Math.round((count / total) * 50)
        animateProgress()
        if (count === total) resolve()
      }
    })
  })
}

// 影片預載入
const waitForVideoLoad = (): Promise<void> => {
  return new Promise((resolve) => {
    const video = document.createElement('video')
    video.src = homeVideoSrc
    video.preload = 'auto'
    video.muted = true
    video.playsInline = true
    video.addEventListener('canplaythrough', () => {
      progress.value = 100
      animateProgress()
      resolve()
    })
    video.addEventListener('error', () => {
      console.warn('影片載入失敗，但繼續')
      progress.value = 100
      animateProgress()
      resolve()
    })
  })
}

// 整合圖片與影片
const waitForAssets = async () => {
  const start = Date.now()
  await Promise.all([waitForPreloadedImages(), waitForVideoLoad()])
  const elapsed = Date.now() - start
  const MIN_DURATION = 1000
  const delay = Math.max(0, MIN_DURATION - elapsed)

  setTimeout(() => {
    is_Load.value = true
    displayProgress.value = 100
  }, delay)
}

// 平滑進度動畫
const animateProgress = () => {
  const step = () => {
    if (displayProgress.value < progress.value) {
      displayProgress.value += 1
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}

waitForAssets()

// 登入檢查邏輯
onMounted(() => {
  axios
    .post(
      'https://web-board.tw/sys/login_axios.php',
      { type: 'admin' },
      {
        headers: {
          Authorization: `Bearer ${localStorage['token']}`,
          'Refresh-Token': localStorage['refresh_token'],
        },
      },
    )
    .then((res) => {
      if (res.data.success) {
        if (res.data.jwt && res.data.refresh_jwt) {
          sessionStorage['token'] = res.data.jwt
          localStorage['refresh_token'] = res.data.refresh_jwt
        }
      } else {
        alert(res.data.msg)
        window.location.href = 'https://web-board.tw'
      }
    })
    .catch(console.error)
})
</script>

<style lang="scss" scoped>
.app-loading {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #5e4c3f;
  background: linear-gradient(
    90deg,
    rgb(220, 212, 192) 0%,
    rgb(248, 244, 225) 23%,
    rgb(218, 209, 188) 100%
  );
  z-index: 99999;

  .app-loading-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .progress-text {
      gap: 2px;
      font-size: 23px;
      letter-spacing: 0.1em;
      font-style: italic;
      font-weight: 500;
      font-family: 'Junge', cursive;
    }

    @media screen and (max-width: 1400px) {
      gap: 12px;
      > .progress-text {
        font-size: 16px;
      }
    }
    @media screen and (max-width: 768px) {
      gap: 6px;
      > .progress-text {
        font-size: 12px;
      }
    }
  }
}
.app-main,
.app-container {
  width: 100%;
  height: 100%;
}
</style>
