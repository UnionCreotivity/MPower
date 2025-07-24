<template>
  <section class="mansion-menu-view">
    <img class="bg" src="../../../assets/img/mansion/mansion.webp" alt="mansion" />
    <div class="hint">情境示意圖</div>
    <img class="title-img" src="../../../assets/img/mansion/title.svg" alt="title" srcset="" />
    <img class="shine1 shine" src="../../../assets/img/mansion/shineshine.png" alt="" srcset="" />
    <img class="shine2 shine" src="../../../assets/img/mansion/shineshine.png" alt="" srcset="" />
    <img class="shine3 shine" src="../../../assets/img/mansion/shineshine.png" alt="" srcset="" />
    <img class="shine4 shine" src="../../../assets/img/mansion/shineshine.png" alt="" srcset="" />

    <div class="main-box">
      <a
        v-for="(item, index) in linkBoxList"
        :key="index"
        class="link-box"
        :class="`link-box${index + 1}`"
      >
        <div class="gradient-line"></div>
        <div class="item-logo">
          <img :src="item.img" alt="" srcset="" />
        </div>
        <div class="item-name">{{ item.text }}</div>
        <!-- <div class="material-img-box-light">
          <img :src="item.img" />
        </div> -->
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/mansion/_mansion-index.scss'

const linkBoxList = [
  {
    text: '嚴選廚具',
    img: new URL('../../../assets/img/mansion/1.svg', import.meta.url).href,
  },
  {
    text: '精品衛浴',
    img: new URL('../../../assets/img/mansion/2.svg', import.meta.url).href,
  },
  {
    text: '墊子所',
    img: new URL('../../../assets/img/mansion/3.svg', import.meta.url).href,
  },
  {
    text: '氣密窗',
    img: new URL('../../../assets/img/mansion/4.svg', import.meta.url).href,
  },
  {
    text: '耐磨地板',
    img: new URL('../../../assets/img/mansion/5.svg', import.meta.url).href,
  },
  {
    text: '全熱交換器',
    img: new URL('../../../assets/img/mansion/6.svg', import.meta.url).href,
  },
  {
    text: 'E-HOME',
    img: '',
  },
  {
    text: '工作陽台',
    img: '',
  },
]
</script>

<style scoped></style>
