<template>
  <div class="method-content-box">
    <div class="left-box">
      <img src="../../../assets/img/method/Charging.webp" class="method-img charging-img" />
    </div>

    <div class="right-box">
      <div class="title-box">預留充電管路</div>
      <div class="content-box">
        <div class="content">
          由於每家電動車的管線、充電柱規格不一，本案已預留好從住家到停車位的充電管路，經由車商配線及安裝充電柱，不採用公共電費最為單純。
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
    '.method-img',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
    },
  ).from(
    '#method-view .method-content-box .right-box div',
    {
      filter: 'blur(8px)',
      opacity: 0,
      ease: 'power1.inOut',
      stagger: 0.15,
      duration: 1,
    },
    '<0.3',
  )
}

onMounted(() => {
  initGsap()
})
</script>

<style scoped></style>
