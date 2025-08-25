<template>
  <div class="portfolio-modal" ref="modalBox">
    <div class="overlay-close" @click="handleClose"></div>
    <!-- 2024 -->
    <div class="portfolio-2024-box">
      <div class="img-box">
        <img src="../../assets/img/metier/portfolio/b_5.webp" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import '@/assets/scss/portfolioModal/_portfolio-modal.scss'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const modalBox = ref<HTMLElement | null>(null)
const emit = defineEmits<{ (e: 'close'): void }>()

const imgAni = () => {
  const tl = gsap.timeline({})

  tl.from('.portfolio-2024-box .img-box img', {
    clipPath: 'inset(0% 0% 100% 0%)',
    duration: 1.2,
    scale: 1.3,
    stagger: 0.2,
    ease: 'power1.inOut',
  })
}

function handleClose() {
  if (modalBox.value) {
    gsap.to(modalBox.value, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // 動畫結束後才真正關閉
        emit('close')
      },
    })
  } else {
    emit('close')
  }
}

onMounted(() => {
  imgAni()
})
</script>
