<template>
  <section class="mansion-menu-view">
    <img class="bg" src="../../../assets/img/mansion/mansion.webp" alt="mansion" />
    <div class="hint">情境示意圖</div>

    <div class="main-box">
      <div
        v-for="(item, index) in linkBoxList"
        :key="index"
        class="link-box"
        :class="`link-box${index + 1}`"
      >
        <div class="gradient-line"></div>
        <a>{{ item.text }}</a>
        <!-- <div class="material-img-box-light">
          <img :src="item.img" />
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/_mansion-index.scss'

const linkBoxList = [
  {
    text: '嚴選廚具',
    img: new URL('../../../assets/img/mansion/list-light.webp', import.meta.url).href,
  },
  {
    text: '精品衛浴',
    img: new URL('../../../assets/img/mansion/list-light.webp', import.meta.url).href,
  },
  {
    text: '墊子所',
    img: new URL('../../../assets/img/mansion/list-light.webp', import.meta.url).href,
  },
  {
    text: '氣密窗',
    img: new URL('../../../assets/img/mansion/list-light.webp', import.meta.url).href,
  },
  {
    text: '耐磨地板',
    img: new URL('../../../assets/img/mansion/list-light.webp', import.meta.url).href,
  },
  {
    text: '全熱交換器',
    img: new URL('../../../assets/img/mansion/list-light.webp', import.meta.url).href,
  },
  {
    text: 'E-HOME',
    img: new URL('../../../assets/img/mansion/list-light.webp', import.meta.url).href,
  },
  {
    text: '工作陽台',
    img: new URL('../../../assets/img/mansion/list-light.webp', import.meta.url).href,
  },
]
</script>

<style scoped></style>
