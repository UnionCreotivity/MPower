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
      <router-link
        v-for="(item, index) in linkBoxList"
        :key="index"
        :to="{ name: item.routeName }"
        class="link-box"
        :class="`link-box${index + 1}`"
      >
        <div class="gradient-line"></div>
        <div class="item-logo">
          <img :src="item.img" alt="" srcset="" />
        </div>
        <div class="item-name">{{ item.text }}</div>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/assets/scss/mansion/_mansion-index.scss'

const linkBoxList = [
  {
    text: '嚴選廚具',
    img: new URL('../../../assets/img/mansion/1.svg', import.meta.url).href,
    routeName: 'tlkIndex',
  },
  {
    text: '精品衛浴',
    img: new URL('../../../assets/img/mansion/2.svg', import.meta.url).href,
    routeName: '',
  },
  {
    text: '電子鎖',
    img: new URL('../../../assets/img/mansion/3.svg', import.meta.url).href,
    routeName: '',
  },
  {
    text: '氣密窗',
    img: new URL('../../../assets/img/mansion/4.svg', import.meta.url).href,
    routeName: '',
  },
  {
    text: '耐磨地板',
    img: new URL('../../../assets/img/mansion/5.svg', import.meta.url).href,
    routeName: '',
  },
  {
    text: '全熱交換器',
    img: new URL('../../../assets/img/mansion/6.svg', import.meta.url).href,
    routeName: '',
  },
  {
    text: 'E-HOME',
    img: '',
    routeName: '',
  },
  {
    text: '工作陽台',
    img: '',
    routeName: '',
  },
]

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.3 })
  tl.from('.link-box', {
    autoAlpha: 0,
    y: 100,
    duration: 1,
    // ease: 'back.out(1.7)',
    ease: 'back.out(0.5)', // 彈性效果
    stagger: {
      each: 0.08,
      from: 'center',
    },
  })

  // tl.from('.link-box', {
  //   autoAlpha: 0,
  //   rotationX: -90,
  //   transformOrigin: 'center center',
  //   duration: 1,

  //   stagger: {
  //     each: 0.08,
  //     from: 'center',
  //   },
  // })

  // tl.from('.link-box', {
  //   autoAlpha: 0,
  //   y: 40,
  //   scale: 0.95,
  //   duration: 1.2,
  //   ease: 'power2.out',
  //   stagger: {
  //     each: 0.15,
  //     from: 'center',
  //   },
  // })
})
</script>

<style scoped></style>
