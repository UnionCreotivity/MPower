<template>
  <div class="portfolio-modal" ref="modalBox">
    <div class="overlay-close" @click="handleClose"></div>
    <!-- 2008 -->
    <div class="portfolio-2008-box">
      <div class="img-box img-box1">
        <img src="../../assets/img/metier/portfolio/b_1_1.webp" alt="" srcset="" />
      </div>
      <div class="img-box img-box2">
        <img src="../../assets/img/metier/portfolio/b_1_2.webp" alt="" srcset="" />
      </div>
      <div class="img-box img-box3">
        <img src="../../assets/img/metier/portfolio/b_1_3.webp" alt="" srcset="" />
      </div>
    </div>
    <div class="hint">現場實景圖</div>
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

  tl.from('.portfolio-2008-box .img-box1 img', {
    clipPath: 'inset(0% 0% 100% 0%)',
    duration: 1,
    scale: 1.3,
    ease: 'power1.inOut',
  })
    .from(
      '.portfolio-2008-box .img-box2 img',
      {
        clipPath: 'inset(100% 0% 0% 0%)',
        duration: 1,
        scale: 1.3,
        ease: 'power1.inOut',
      },
      '<0.3',
    )
    .from(
      '.portfolio-2008-box .img-box3 img',
      {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 1,
        scale: 1.3,
        ease: 'power1.inOut',
      },
      '<0.3',
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
        emit('close')
      },
    })
  } else {
    emit('close')
  }
}
</script>
