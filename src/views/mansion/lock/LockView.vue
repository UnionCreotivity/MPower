<template>
  <div class="lock-content-box mansion-single-box">
    <div class="overlay-close" @click="handleClose"></div>
    <img src="../../../assets/img/mansion/3.svg" alt="" class="lock-icon" />
    <div class="left-box">
      <video
        src="../../../assets/img/mansion/lock/lock.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
        class="left-video"
      ></video>
    </div>
    <div class="right-box">
      <div class="title-text">
        <div class="text">指紋辨識電子鎖</div>
      </div>
      <div class="title-img-box">
        <img src="../../../assets/img/mansion/lock/waferlock_img.webp" alt="" />
      </div>
      <div class="content-box">
        <ul class="ul-box">
          <li>金屬面板、把手，電鍍防腐銹處理</li>
          <li>美規鎖匣通過美國UL及ANSI一級鎖認證</li>
          <li>門鎖通過台灣 CNS60A防火認證</li>
          <li>四種開門方式 (指紋辨識 / 感應卡 / 觸控密碼 / 機械鑰匙)</li>
          <li>採用銀行等級3D防偽指紋晶片</li>
          <li>開關門及電力不足時，會有語音告知 「門已打開」、「門已上鎖」、「請更換電池」</li>
          <li>可選擇中文語音、英文語音、無語音三種模式</li>
          <li>滑蓋設計，附有隱藏式備用機械鑰匙</li>
          <li>當忘了更換電池無電力時，可由外部以9V電池暫時供電開門</li>
          <li>使用者可自行以母卡來增加或刪除卡片，或設定密碼、指紋</li>
          <li>卡片感應格式支援Mifare Classic / Desire</li>
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
      '.mansion-single-box .right-box div',
      {
        autoAlpha: 0,
        y: 70,
        duration: 1,
        stagger: 0.3,
      },
      '<0.3',
    )
})
</script>

<style scoped></style>
