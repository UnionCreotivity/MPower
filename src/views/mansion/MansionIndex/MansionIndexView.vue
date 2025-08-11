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
        <div class="run-light"></div>
        <div class="item-logo">
          <img :src="item.img" alt="" srcset="" />
        </div>
        <div class="item-name">{{ item.text }}</div>
      </router-link>
    </div>
  </section>
  <FullScreen :forceWhiteIcon="true" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import FullScreen from '@/components/full-screen/FullScreen.vue'
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
    routeName: 'duravitIndex',
  },
  {
    text: '電子鎖',
    img: new URL('../../../assets/img/mansion/3.svg', import.meta.url).href,
    routeName: 'lockIndex',
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
    routeName: 'lifegearIndex',
  },
  {
    text: 'E-HOME',
    img: new URL('../../../assets/img/mansion/3.svg', import.meta.url).href,
    routeName: '',
  },
  {
    text: '衛浴配件',
    img: new URL('../../../assets/img/mansion/logo.png', import.meta.url).href,
    routeName: '',
  },
]

onMounted(() => {
  const tl = gsap.timeline({})
  tl
    // .fromTo(
    //   '.mansion-menu-view .bg',
    //   {
    //     autoAlpha: 0,
    //     filter: 'brightness(2) blur(6px)',
    //   },
    //   {
    //     filter: 'brightness(1) blur(0px)',
    //     duration: 1,
    //     autoAlpha: 1,
    //     ease: 'power1.inOut',
    //   },
    // )
    .fromTo(
      '.mansion-menu-view .bg',
      {
        maskPosition: '200% 0',
      },
      {
        maskPosition: '0% 0%',
        duration: 1.5,
        // ease: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
        ease: 'power1.inOut',
      },
    )
    .from(
      '.mansion-menu-view .title-img',
      {
        autoAlpha: 0,
        duration: 1,
        y: 70,
      },
      '<0.3',
    )
    .from(
      '.link-box',
      {
        autoAlpha: 0,
        duration: 1,
        filter: 'blur(5px)',
        // ease: 'back.out(0.5)', // 彈性效果
        stagger: {
          each: 0.08,
          from: 'center',
        },
      },
      '<0.7',
    )

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
