<template>
  <div class="method-content-box">
    <div class="left-box">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        alt=""
        class="method-img"
        :class="{ active: index === currentIndex }"
      />
    </div>
    <div class="right-box">
      <img class="alfa" src="../../../assets/img/method/alfa.svg" alt="" srcset="" />
      <div class="title-box">
        ALFA SAFE柱中柱&系統牆<br />
        結構安全，超越國家品質
      </div>
      <div class="content-box">
        <div class="content">
          建築一樓+夾層，戴雲發Alfa Safe系統。<br />
          一根鋼筋到底，一體式系統柱箍。<br />
          施工品質提升，耐震韌性強化。<br />
          <span>
            Alfa safe 耐震系統工法四大創新<br />
            系統規則化│規格標準化│防呆配件化│作業效率化<br />
            國家發明創作獎-發明獎金牌，LCBA低碳工法認證</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const images = [new URL('../../../assets/img/method/test.webp', import.meta.url).href]
const currentIndex = ref(0)

const initGsap = () => {
  const tl = gsap.timeline({ id: 'method' })

  tl.fromTo(
    '.method-img',
    {
      filter: 'brightness(3)',
      opacity: 0,
    },
    {
      filter: 'brightness(1)',
      opacity: 1,

      duration: 1.5,
      ease: 'back.inOut(1)',
    },
  )
}

onMounted(() => {
  initGsap()
})
</script>
