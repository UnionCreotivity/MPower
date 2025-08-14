<template>
  <section class="mansion-menu-view">
    <img class="bg" src="../../../assets/img/mansion/mansion.webp" alt="mansion" />
    <div class="hint">情境示意圖</div>
    <div class="title-box">
      <div class="en-title" ref="enTitle">MATERIALS</div>
      <img
        class="small-title-img"
        src="../../../assets/img/mansion/title_img_small.svg"
        alt="title_img_small"
        srcset=""
      />
      <div class="zh-title" ref="zhTitle">貼心建材</div>
    </div>

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
import '@/assets/scss/mansion/_mansion-index.scss'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import SplitText from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

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
    routeName: 'EhomeIndex',
  },
  {
    text: '五金',
    img: new URL('../../../assets/img/mansion/logo.png', import.meta.url).href,
    routeName: '',
  },
]

const enTitle = ref<HTMLElement | null>(null)
const zhTitle = ref<HTMLElement | null>(null)

onMounted(() => {
  const splitEnTitle = new SplitText(enTitle.value, { type: 'chars' })
  const splitZhTitle = new SplitText(zhTitle.value, { type: 'chars' })

  const tl = gsap.timeline({})
  tl.fromTo(
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

    .fromTo(
      splitEnTitle.chars,
      {
        'will-change': 'transform',
        transformOrigin: '50% 100%',
        scaleX: 0,
        y: 60,
        autoAlpha: 0,
      },
      { y: 0, duration: 0.7, autoAlpha: 1, scaleX: 1, stagger: 0.05 },
      '<0.55',
    )
    .from(
      '.mansion-menu-view .title-box .small-title-img',
      {
        autoAlpha: 0,
        duration: 1,
        y: 70,
      },
      '<0.25',
    )
    .fromTo(
      splitZhTitle.chars,
      {
        y: '50',
        autoAlpha: 0,
      },
      {
        duration: 1.25,
        autoAlpha: 1,
        y: '0',
        stagger: 0.05,
      },
      '<0.4',
    )
    .from(
      '.link-box',
      {
        autoAlpha: 0,
        duration: 1,
        filter: 'blur(10px)',
        // ease: 'back.out(0.5)', // 彈性效果
        stagger: {
          each: 0.08,
          from: 'center',
        },
      },
      '<0.2',
    )
    .from(
      '.shine',
      {
        autoAlpha: 0,
        duration: 1,
      },
      '<',
    )
})
</script>

<style scoped></style>
