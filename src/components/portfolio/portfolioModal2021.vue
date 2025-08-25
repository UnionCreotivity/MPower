<template>
  <div class="portfolio-modal" ref="modalBox">
    <div class="overlay-close" @click="handleClose"></div>
    <!-- 2021 -->
    <div class="portfolio-2021-box">
      <div class="left-img-box">
        <img src="../../assets/img/metier/portfolio/b_4_1.webp" alt="" srcset="" />
        <div class="hint">現場實景圖</div>
      </div>
      <div class="right-img-box">
        <div class="right-top-box">
          <img src="../../assets/img/metier/portfolio/b_4_2.webp" alt="" srcset="" />
          <div class="hint">現場實景圖</div>
        </div>
        <div class="right-bottom-box">
          <img src="../../assets/img/metier/portfolio/b_4_3.webp" alt="" srcset="" />
          <div class="hint">現場實景圖</div>
        </div>
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

  tl.from('.portfolio-2021-box .left-img-box', {
    clipPath: 'inset(0% 0% 100% 0%)',
    duration: 1,
    ease: 'power1.inOut',
  })
    .from(
      '.portfolio-2021-box .right-top-box',
      {
        clipPath: 'inset(0% 100% 0% 0%)',
        duration: 1,
        ease: 'power1.inOut',
      },
      '<0.3',
    )
    .from(
      '.portfolio-2021-box .right-bottom-box',
      {
        clipPath: 'inset(0% 0% 0% 100%)',
        duration: 1,
        ease: 'power1.inOut',
      },
      '<0.5',
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
