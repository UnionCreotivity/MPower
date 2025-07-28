<template>
  <div class="lifegear-content-box mansion-single-box">
    <div class="overlay-close" @click="handleClose"></div>
    <img src="../../../assets/img/mansion/6.svg" alt="" class="lock-icon" />
    <div class="left-box">
      <div class="img-box">
        <img src="../../../assets/img/mansion/lifegear/lifegear2.webp" alt="" srcset="" />
        <div class="hint">情境示意圖</div>
      </div>
    </div>
    <div class="right-box">
      <div class="title-img-box">
        <img src="../../../assets/img/mansion/lifegear/lifegear.webp" />
      </div>
      <div class="content-box">
        <ul class="ul-box">
          <li>去除室內 PM2.5、病菌、甲醛等有害揮發物質。</li>
          <li>全熱交換、空氣淨化、節能模式切換。</li>
          <li>液晶控制面板，外型簡約，適配現代居家裝潢。</li>
          <li>採用 DC 無刷直流高靜壓馬達，運轉安靜省電。</li>
          <li>業界首創電動式擋風門，有效防止空氣滲漏。</li>
          <li>可依需求自訂開關機時間與運轉週期。</li>
          <li>滑動式蓋板設計，濾網清潔與更換快速簡單。</li>
          <li>全新E款支援手機遠端操控，操作更靈活。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/mansion-single/_mansion-single.scss'
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
  ).from(
    '.mansion-single-box .right-box div',
    {
      filter: 'blur(8px)',
      autoAlpha: 0,
      ease: 'power1.inOut',
      stagger: 0.2,
      duration: 1,
    },
    '<0.3',
  )
})
</script>

<style scoped></style>
