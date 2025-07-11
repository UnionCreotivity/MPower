<template>
  <div class="app-main">
    <div id="custom-cursor"></div>
    <FadeIn>
      <div class="app-loading" v-show="!isLoad">
        <div class="app-loading-container">
          <div class="wave-loading">
            <span
              v-for="(letter, index) in loadingText"
              :key="index"
              class="wave-letter"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              {{ letter }}
            </span>
          </div>
          <div class="progress-text">{{ displayProgress }}%</div>
        </div>
      </div>
    </FadeIn>

    <div class="app-container" v-show="isLoad">
      <router-view v-slot="{ Component, route }">
        <FadeIn>
          <component
            :is="Component"
            :key="route.path"
            :isLoad="isLoad"
            @loaded="handleLoaded"
          ></component>
        </FadeIn>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
<<<<<<< HEAD
import { onMounted } from 'vue'
=======
import { ref, onMounted, onBeforeUnmount } from 'vue'
>>>>>>> prod
import { RouterView } from 'vue-router'

import FadeIn from './components/transition/FadeIn.vue'
import axios from 'axios'
import screenfull from 'screenfull'

const isLoad = ref(false)
const progress = ref(0) // 真實進度
const displayProgress = ref(0) // 顯示用進度數字

const loadingText = ['L', 'O', 'A', 'D', 'I', 'N', 'G']

const cursor = ref<HTMLElement | null>(null)

// const waitForPreloadedImages = () => {
//   const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]')
//   const total = preloadLinks.length

//   if (total === 0) {
//     isLoad.value = true
//     displayProgress.value = 100
//     return
//   }

//   let count = 0
//   const checkComplete = () => {
//     count++
//     progress.value = Math.round((count / total) * 100)
//     animateProgress()
//     if (count === total) {
//       isLoad.value = true
//     }
//   }

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   preloadLinks.forEach((link: any) => {
//     const img = new Image()
//     img.src = link.href
//     img.onload = checkComplete
//     img.onerror = checkComplete
//   })
// }

// // 讓數字慢慢往 progress.value 靠近
const animateProgress = () => {
  const step = () => {
    if (displayProgress.value < progress.value) {
      displayProgress.value += 1
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}

const handleLoaded = () => {
  isLoad.value = true
}

const waitForPreloadedAssets = () => {
  const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]')
  const videoSrc = new URL('@/assets/img/home/c1_bg.mp4', import.meta.url).href
  const backgroundImages = [new URL('@/assets/img/home/bg.webp', import.meta.url).href]
  const total = preloadLinks.length + 1 + backgroundImages.length // +1 是首頁影片
  if (total === 0) {
    isLoad.value = true
    return
  }

  let count = 0
  const checkComplete = () => {
    count++
    progress.value = Math.round((count / total) * 100)
    animateProgress()
    if (count === total) {
      isLoad.value = true
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preloadLinks.forEach((link: any) => {
    const img = new Image()
    img.src = link.href
    img.onload = checkComplete
    img.onerror = checkComplete
  })

  // 預載首頁的背景圖片
  backgroundImages.forEach((src) => {
    const img = new Image()
    img.src = src
    img.onload = checkComplete
    img.onerror = checkComplete
  })

  const video = document.createElement('video')
  video.src = videoSrc
  video.preload = 'auto'
  video.oncanplaythrough = checkComplete
  video.onerror = checkComplete
}

waitForPreloadedAssets()

onMounted(() => {
  if (!import.meta.env.DEV) {
<<<<<<< HEAD
    // 非本地開發，才執行
=======
>>>>>>> prod
    axios
      .post(
        'https://web-board.tw/sys/login_axios.php',
        {
          type: 'admin',
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage['token']}`,
            'Refresh-Token': localStorage['refresh_token'],
          },
          onUploadProgress: function () {
<<<<<<< HEAD
            // document.querySelector('.ajax_loading').classList.add('show_in');
=======
            //document.querySelector('.ajax_loading').classList.add('show_in');
>>>>>>> prod
          },
        },
      )
      .then(function (response) {
        console.log(response.data)
        if (response.data.success) {
<<<<<<< HEAD
=======
          // -- 刷新 token --
>>>>>>> prod
          if (response.data.jwt !== undefined && response.data.refresh_jwt !== undefined) {
            sessionStorage['token'] = response.data.jwt
            localStorage['refresh_token'] = response.data.refresh_jwt
          }
        } else {
          alert(response.data.msg)
          window.location.href = 'https://web-board.tw'
        }
      })
      .catch(function (error) {
        console.error(error)
      })
      .finally(function () {
<<<<<<< HEAD
        // document.querySelector('.ajax_loading').classList.remove('show_in');
=======
        //document.querySelector('.ajax_loading').classList.remove('show_in');
>>>>>>> prod
      })
  } else {
    console.log('開發環境，跳過登入請求')
  }
<<<<<<< HEAD
=======

  cursor.value = document.getElementById('custom-cursor')
  let lastX = 0
  let lastY = 0
  const moveHandler = (e: MouseEvent) => {
    if (!cursor.value) return
    lastX = e.clientX
    lastY = e.clientY
    cursor.value.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    // cursor.value.style.left = e.clientX + 'px'
    // cursor.value.style.top = e.clientY + 'px'
  }

  // const clickHandler = (e: MouseEvent) => {
  //   const heart = document.createElement('div')
  //   heart.className = 'heart'
  //   heart.style.left = `${e.clientX}px`
  //   heart.style.top = `${e.clientY}px`
  //   document.body.appendChild(heart)

  //   heart.addEventListener('animationend', () => {
  //     heart.remove()
  //   })
  // }

  window.addEventListener('mousemove', moveHandler)
  // window.addEventListener('click', clickHandler)

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', moveHandler)
    // window.removeEventListener('click', clickHandler)
  })
  if (screenfull.isEnabled) {
    screenfull.on('change', () => {
      document.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: lastX,
          clientY: lastY,
        }),
      )
    })
  }
>>>>>>> prod
})
</script>

<style lang="scss" scoped>
// .app-loading {
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
//   user-select: none;
//   color: #5e4c3f;
//   background: #dcd4c0;
//   background: linear-gradient(
//     90deg,
//     rgb(220, 212, 192) 0%,
//     rgb(248, 244, 225) 23%,
//     rgb(218, 209, 188) 100%
//   );
//   z-index: 99999;
//   .app-loading-container {
//     width: 100%;
//     height: 100%;
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;

//     .progress-text {
//       gap: 2px;
//       font-size: 23px;
//       letter-spacing: 0.1em;
//       font-style: italic;
//       font-weight: 500;
//       font-family: 'Junge', cursive;
//     }

//     @media screen and (max-width: 1400px) {
//       gap: 12px;
//       > .progress-text {
//         font-size: 16px;
//       }
//     }
//     @media screen and (max-width: 768px) {
//       gap: 6px;
//       > .progress-text {
//         font-size: 12px;
//       }
//     }
//   }
// }

.app-loading {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  user-select: none;
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .wave-loading {
      display: flex;
      gap: 6px;

      font-size: 23px;
      letter-spacing: 0.02em;
      font-style: italic;
      font-weight: 500;
      font-family: 'Junge', cursive;
      .wave-letter {
        display: inline-block;
        animation:
          // wave 2s infinite ease-in-out,
          shimmer 3s linear infinite;
        background: linear-gradient(
          90deg,
          /* 咖啡深棕 */ #bb7f30,
          /* 淺咖啡米色 */ #eacda3,
          /* 米色 */ #e6b980 /* 卡其色 */
        );

        background-size: 300%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        position: relative;
      }
    }

    .progress-text {
      display: inline-block;
      animation:
          // wave 2s infinite ease-in-out,
        shimmer 3s linear infinite;
      background: linear-gradient(
        90deg,
        /* 咖啡深棕 */ #bb7f30,
        /* 淺咖啡米色 */ #eacda3,
        /* 米色 */ #e6b980 /* 卡其色 */
      );

      background-size: 100%;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      position: relative;
      font-size: 18px;
      letter-spacing: 0.02em;
      font-style: italic;
      font-weight: 500;
      font-family: 'Junge', cursive;
      margin-top: 0.5vw;
    }
  }
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes shimmer {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 300%;
  }
}
.app-main {
  width: 100%;
  height: 100%;
}
.app-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
