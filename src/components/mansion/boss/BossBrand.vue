<template>
  <div class="boss-brand-box">
    <div class="boss-icon">
      <img src="../../../assets/img/mansion/logo.png" alt="" srcset="" />
    </div>
    <div class="overlay-close" @click="handleClose"></div>
    <div class="banner-box">
      <img src="../../../assets/img/mansion/boss/boss_img_main.webp" alt="" srcset="" />
      <div class="hint">情境示意圖</div>
    </div>

    <div class="main-box">
      <div class="en-title">BRAND CONCEPT</div>
      <div class="zh-title">無鉛工藝，質感進駐生活每一刻</div>
      <div class="content-box">
        BOSS 堅持台灣製造，以無鉛安全、精緻工藝與設計美感為核心，打造兼具機能與品味的衛浴日常。<br />
        從水龍頭到配件，皆通過嚴格檢驗，為空間注入安心與細膩，讓每一次使用，都成為舒適生活的延伸。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/boss/_boss-brand.scss'
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
  const enSplit = SplitText.create('.boss-brand-box .main-box .en-title', {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })

  const zhSplit = SplitText.create('.main-box .zh-title', {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })

  const tl = gsap.timeline({ delay: 0.1 })

  tl.from('.boss-brand-box .banner-box img', {
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
      '.boss-brand-box .main-box .content-box',
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
