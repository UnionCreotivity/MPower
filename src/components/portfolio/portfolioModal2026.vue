<template>
  <div class="portfolio-modal" ref="modalBox">
    <div class="overlay-close" @click="handleClose"></div>
    <!-- 2026 -->
    <div class="single-2026">
      <div class="img-box">
        <img src="../../assets/img/metier/portfolio/b_6.webp" alt="" srcset="" />
        <div class="hint">3D外觀圖</div>
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

  tl.from('.single-2026 .img-box img', {
    scale: 1.4,
    duration: 1.2,
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
