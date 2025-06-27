<template>
  <section class="method-menu-view">
    <div class="title-box">
      <div class="zh">建築工藝</div>
      <div class="en">METHOD OF HOUSE</div>
    </div>
    <div class="menu-box"></div>
    <div class="menu-box">
      <div class="item" v-for="(item, index) in items" :key="index">
        <div class="img-box">
          <WaveImage :imagePath="item.img" />
          <div class="text">{{ item.text }}</div>
        </div>
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/method/_method-menu.scss'
import WaveImage from '@/components/WaveImage/WaveImage.vue'
// import { onMounted } from 'vue'
// import gsap from 'gsap'
import img1 from '@/assets/img/method/1.webp'
import img2 from '@/assets/img/method/2.webp'
import img3 from '@/assets/img/method/3.webp'
const items = [
  { img: img1, text: 'STRUCTURE', title: '結構工法' },
  { img: img2, text: 'WATERPROOF', title: '防水工法' },
  { img: img3, text: 'INTIMATE', title: '貼心工法' },
]
</script>

<style scoped></style>
