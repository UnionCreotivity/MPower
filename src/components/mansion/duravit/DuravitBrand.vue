<template>
  <div class="duravit-brand-box">
    <div class="overlay-close" @click="handleClose"></div>
    <div class="duravit-icon">
      <img src="../../../assets/img/mansion/2.svg" alt="" srcset="" />
    </div>
    <div class="banner-box">
      <img src="../../../assets/img/mansion/duravit/dur_img_main.webp" alt="" srcset="" />
      <div class="hint">情境示意圖</div>
    </div>

    <div class="main-box">
      <div class="en-title">BRAND CONCEPT</div>
      <div class="zh-title">DURAVIT｜源自德國的設計衛浴美學</div>
      <div class="content-box">
        DURAVIT 從德國陶藝工坊起家，品牌秉持「100% 經典美學」理念，<br />與 Philippe Starck、Cecilie
        Manz 等國際設計大師攜手合作，打造兼具藝術感與功能性的衛浴精品。<br />榮獲 IF Design
        Award、Red Dot 等多項國際大獎肯定，並被評為全球前50大設計企業、<br />十大衛浴精品品牌。DURAVIT，不只是衛浴設備，更是一種關於生活與品味的宣言。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/duravit/_duravit-brand.scss'
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useRouter } from 'vue-router'

const router = useRouter()
gsap.registerPlugin(SplitText)

const handleClose = () => {
  router.push('/mansionIndex')
}
let tl: gsap.core.Timeline
onMounted(() => {
  gsap.registerPlugin(SplitText)
  const enSplit = SplitText.create('.duravit-brand-box .main-box .en-title', {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })
  const zhSplit = SplitText.create('.main-box .zh-title', {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })

  tl = gsap
    .timeline({ delay: 0.1 })
    .from('.duravit-brand-box .banner-box img', {
      duration: 1.3,
      filter: 'blur(10px)',
      scale: 1.5,
      autoAlpha: 0,
    })
    .from(
      enSplit.chars,
      {
        y: 70,
        filter: 'blur(5px)',
        autoAlpha: 0,
        duration: 0.5,
        stagger: { each: 0.05, from: 'center' },
      },
      '<0.5',
    )
    .from(
      zhSplit.chars,
      {
        y: 70,
        filter: 'blur(5px)',
        autoAlpha: 0,
        duration: 0.8,
        stagger: { each: 0.05, from: 'center' },
      },
      '<0.3',
    )
    .from(
      '.duravit-brand-box .main-box .content-box',
      {
        y: 80,
        autoAlpha: 0,
        duration: 1,
      },
      '<0.55',
    )
})

onUnmounted(() => {
  if (tl) tl.kill()
})
</script>

<style scoped></style>
