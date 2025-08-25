<template>
  <div class="portfolio-modal" ref="modalBox">
    <div class="overlay-close" @click="handleClose"></div>
    <!-- 2017 大熊康橋 -->
    <div class="portfolio-2017-box">
      <div class="img-box">
        <img src="../../assets/img/metier/portfolio/b_3.webp" alt="b_3" srcset="" />
        <div class="hint">現場實景圖</div>
      </div>
      <img src="../../assets/img/metier/portfolio/3_item.webp" alt="3_item" class="item" />
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

  tl.from('.portfolio-2017-box .img-box img', {
    scale: 1.4,
    duration: 1.2,
    ease: 'power1.inOut',
  }).from(
    '.portfolio-modal .portfolio-2017-box .item',
    {
      y: 120,
      duration: 1,
      opacity: 0,
      ease: 'power1.inOut',
    },
    '<0.35',
  )
}

onMounted(() => {
  imgAni()
})

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
</script>
