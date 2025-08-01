<template>
  <div class="tlk-brand-box">
    <div class="overlay-close" @click="handleClose"></div>
    <div class="banner-box">
      <img src="../../../assets/img/mansion/tlk/tlk_img_main.webp" alt="" srcset="" />
      <div class="hint">情境示意圖</div>
    </div>

    <div class="main-box">
      <div class="en-title">BRAND CONCEPT</div>
      <div class="zh-title">義式工藝 × 精品美學 TLK義式廚房</div>
      <div class="content-box">
        義大利廚具品牌T L K創立於1960年，至今有62年歷史現在由第2代，<br />
        帶領義大利知名設計師團隊專門為T L
        K設計，創造具有前瞻性的精品廚具義大利人的卓越成就代代相傳，<br />
        著眼于未來。對於義大利人。在設計上的堅持細節之美，也正是T L K落實在廚房生活的理念。
        <br />
        <div>• 義大利設計 • 義大利製造 • 多項設計專利與工廠認證 • 櫻花整體服務</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/tlk/_tlk-brand.scss'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useRouter } from 'vue-router'

const router = useRouter()
gsap.registerPlugin(SplitText)

const handleClose = () => {
  router.push('/mansionIndex')
}

onMounted(() => {
  const enSplit = SplitText.create('.tlk-brand-box .main-box .en-title', {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })

  const zhSplit = SplitText.create('.main-box .zh-title', {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })

  const tl = gsap.timeline({ delay: 0.1 })

  tl.from('.tlk-brand-box .banner-box img', {
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
      '.tlk-brand-box .main-box .content-box',
      {
        y: 80,
        autoAlpha: 0,
        duration: 1,
      },
      '<0.55',
    )
})
</script>

<style scoped></style>
