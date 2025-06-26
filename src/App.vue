<template>
  <div class="app-main">
    <div id="custom-cursor"></div>
    <FadeIn>
      <div class="app-loading" v-show="!is_Load">
        <div class="app-loading-container">
          <div class="progress-text">{{ displayProgress }}%</div>
        </div>
      </div>
    </FadeIn>
    <div class="app-container">
      <router-view v-slot="{ Component, route }">
        <FadeIn
          ><component :is="Component" :key="route.path" :is_Load="is_Load"></component
        ></FadeIn>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterView } from 'vue-router'
import FadeIn from './components/transition/FadeIn.vue'
import axios from 'axios'

const is_Load = ref(false)
const progress = ref(0) // 真實進度
const displayProgress = ref(0) // 顯示用進度數字

const cursor = ref<HTMLElement | null>(null)

const waitForPreloadedImages = () => {
  const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]')
  const total = preloadLinks.length

  if (total === 0) {
    is_Load.value = true
    displayProgress.value = 100
    return
  }

  let count = 0
  const checkComplete = () => {
    count++
    progress.value = Math.round((count / total) * 100)
    animateProgress()
    if (count === total) {
      is_Load.value = true
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preloadLinks.forEach((link: any) => {
    const img = new Image()
    img.src = link.href
    img.onload = checkComplete
    img.onerror = checkComplete
  })
}

// 讓數字慢慢往 progress.value 靠近
const animateProgress = () => {
  const step = () => {
    if (displayProgress.value < progress.value) {
      displayProgress.value += 1
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}

waitForPreloadedImages()

onMounted(() => {
  if (!import.meta.env.DEV) {
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
            //document.querySelector('.ajax_loading').classList.add('show_in');
          },
        },
      )
      .then(function (response) {
        console.log(response.data)
        if (response.data.success) {
          // -- 刷新 token --
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
        //document.querySelector('.ajax_loading').classList.remove('show_in');
      })
  } else {
    console.log('開發環境，跳過登入請求')
  }

  cursor.value = document.getElementById('custom-cursor')

  const moveHandler = (e: MouseEvent) => {
    if (!cursor.value) return
    cursor.value.style.left = e.clientX + 'px'
    cursor.value.style.top = e.clientY + 'px'
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
  background: #dcd4c0;
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
