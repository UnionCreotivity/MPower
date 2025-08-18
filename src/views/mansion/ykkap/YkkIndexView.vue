<template>
  <div class="ykk-content-box mansion-single-box">
    <div class="overlay-close" @click="handleClose"></div>
    <img src="../../../assets/img/mansion/4.svg" alt="" class="ykk-icon" />
    <div class="left-box">
      <div class="img-box">
        <img src="../../../assets/img/mansion/ykkap/1.webp" alt="" srcset="" />
        <div class="hint">情境示意圖</div>
      </div>
    </div>
    <div class="right-box">
      <div class="title-text">
        <div class="text">YKK AP頂級氣密窗</div>
      </div>

      <div class="content-box">
        <div class="content">
          YKK AP Taiwan 的 YRB-A 超高水密窗系列專為台灣嚴苛的氣候條件 設計，搭載 6mm+6mm
          膠合玻璃，提供卓越的水密性、氣密性、耐 風壓性和隔音性能，確保居家環境的舒適與安全。
        </div>
        <ul class="ul-box ul-box1">
          <li>高水密性: YKK AP獨創「新水密結構」，颱風天在家也安穩舒適的生活。</li>
          <li>高耐風壓: 等同蒲福氏風級表的16級風，守護居家安全。</li>
          <li>高隔音性: 即使室外噪音吵雜擾人，室內也能享有宜居舒適的環境。</li>
        </ul>
        <div class="content-img-box">
          <img src="../../../assets/img/mansion/ykkap/2.webp" alt="" srcset="" />
        </div>
        <ul class="ul-box ul-box2">
          <li>高耐候性: 日本技術陽極處理，常保亮麗美觀及耐侯性、耐蝕性。</li>
          <li>專業施工: 專業施工團隊，定期施工培訓確保施工品質。</li>
          <li>安心配備: 窗戶標準配有限開裝置，簡單操作確保居家安全。</li>
          <li>設計簡約: 窗型線條設計簡約，符合人體工學設計之把手兼具美觀大方。</li>
        </ul>
      </div>
    </div>
    <FullScreen />
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/mansion-single/_mansion-single.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import gsap from 'gsap'

const router = useRouter()

const handleClose = () => {
  router.push('/mansionIndex')
}

onMounted(() => {
  const tl = gsap.timeline({})
  tl.fromTo(
    '.mansion-single-box .left-box',
    {
      maskPosition: '200% 0',
    },
    {
      maskPosition: '0% 0%',
      duration: 1,
      ease: 'power1.inOut',
    },
  )
    .fromTo('.mansion-single-box .left-box img', { scale: 1.2 }, { scale: 1, duration: 1 }, '<')
    .from(
      '.mansion-single-box .right-box .title-text',
      {
        autoAlpha: 0,
        y: 70,
        duration: 1,
      },
      '<0.3',
    )

    .from(
      '.ykk-content-box .right-box .content-box .content,.ul-box1,.ykk-content-box .right-box .content-box .content-img-box',
      {
        autoAlpha: 0,
        y: 70,
        duration: 1,
        stagger: 0.3,
      },
      '<0.3',
    )
    .from(
      '.ul-box2',
      {
        autoAlpha: 0,
        y: 70,
        duration: 1,
      },
      '<0.7',
    )
})
</script>

<style scoped></style>
