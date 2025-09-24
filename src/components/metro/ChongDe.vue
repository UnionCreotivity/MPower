<template>
  <div class="line-popup chong-de-box">
    <div class="overlay-close" @click="closeWithAnimation"></div>
    <div class="main-box">
      <div class="img-box">
        <img src="../../assets/img/metro/business_3.webp" alt="business_3" srcset="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/assets/scss/metro/_metro-light-box.scss'

// 定義 emit
const emit = defineEmits(['close'])

const imgAni = () => {
  const tl = gsap.timeline({})
  tl.fromTo(
    '.line-popup',
    {
      maskPosition: '200% 0',
    },
    {
      maskPosition: '0% 0%',
      duration: 1.5,
      ease: 'cubic-bezier(0.64, 0.03, 0.07, 0.97)',
    },
  )

    .from(
      '.line-popup .main-box .img-box img',
      {
        duration: 1,
        opacity: 0,
        scale: 1.4,
        ease: 'power0.in',
      },
      '<0.2',
    )

    .from(
      '.line-popup .main-box .title-box div',
      {
        duration: 1,
        opacity: 0,
        x: '-110',
        stagger: 0.13,
      },
      '<0.45',
    )
    .from(
      '.line-popup .main-box .main-content-box .list div',
      {
        duration: 1,
        opacity: 0,
        x: '-90',
        stagger: 0.1,
      },
      '<0.2',
    )
    .from(
      '.line-popup .main-box .main-content-box .btn',
      {
        duration: 1,
        opacity: 0,
        y: '40',
      },
      '<0.9',
    )
    .from(
      '.line-popup .main-box .line-img img',
      {
        duration: 1,
        opacity: 0,
        x: '-90',
      },
      '<-0.35',
    )
    // 顯示並啟動光效
    .to(
      '.line-popup .main-box .light',
      {
        duration: 0.5,
        autoAlpha: 1, // opacity:1 + visibility:visible
        onStart: () => {
          const light = document.querySelector('.line-popup .main-box .light')
          if (light instanceof HTMLElement) {
            light.style.animationPlayState = 'running'
          }
        },
      },
      '<0.7',
    )
}

const closeWithAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('close') // 動畫結束後再真正關閉
    },
  })

  tl.to('.line-popup', {
    maskPosition: '200% 0',
    duration: 1.2,
    ease: 'cubic-bezier(0.64, 0.03, 0.07, 0.97)',
  })
}

onMounted(async () => {
  imgAni()
})
</script>

<style scoped></style>
