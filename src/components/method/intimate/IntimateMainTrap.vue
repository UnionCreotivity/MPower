<template>
  <div class="method-content-box">
    <div class="left-box">
      <video
        src="../../../assets/img/method/MainTrap.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
        class="left-video"
      ></video>
    </div>
    <div class="right-box">
      <div class="title-box">總存水彎</div>
      <div class="content-box">
        <div class="content">
          <div>
            傳統浴室雜排水系統，常因為衛生器具之存水彎分散設置、存水不足、開置蒸發乾涸，而使臭沼氣四溢，不僅嚴重威脅使用者的衛生及健康，也長期存在
            排水不順暢及維護不便等問題。
          </div>
          <div>
            總存水彎優點：<br />
            1.集中存水且存水量大 <br />
            2.可當樓層清潔維護 <br />
            3.雙層滅音構造，降低排水噪音 <br />
            4.雙重攔渣及高自淨力 <br />
            5.排水量大，不回(溢)流
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const initGsap = () => {
  const tl = gsap.timeline({})

  tl.fromTo(
    '.left-video',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
    },
  )
}

onMounted(() => {
  initGsap()
})
</script>

<style scoped></style>
