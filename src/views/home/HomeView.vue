<template>
  <article id="home-view">
    <div class="video-box">
      <video class="bg-video" autoplay loop muted playsinline>
        <source src="../../assets/img/home/c1_bg.mp4" type="video/mp4" />
      </video>
    </div>
    <FadeIn>
      <div class="home-view-init" v-show="!isShow" @click.stop="showClick">
        <div class="home-view-init-icon">
          <img src="../../assets/img/home/logo.svg" alt="" />
        </div>
      </div>
    </FadeIn>
    <div class="home-view-main" v-show="isShow">
      <div class="svg-wrapper">
        <div class="mask-overlay"></div>
        <div class="svg">
          <img src="../../assets/img/home/logo.svg" alt="" />
        </div>
      </div>
      <ul class="home-view-menu">
        <li class="home-view-menu-item" v-for="menu in menuItems" :key="menu.id">
          <router-link :to="{ name: menu.link }" class="home-view-menu-item-link">
            <p class="menu-en">{{ menu.enName }}</p>
            <p class="menu-zh">{{ menu.zhName }}</p>
          </router-link>
        </li>
      </ul>
      <FullScreen />
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import screenfull from 'screenfull'
import FadeIn from '@/components/transition/FadeIn.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import '@/assets/scss/home/_home-view.scss'
// import GSDevTools from 'gsap/GSDevTools'
// gsap.registerPlugin(GSDevTools)

const isShow = ref(false)

// const isEnter = ref(false)

const menuItems = [
  {
    id: 'metro',
    zhName: '地段環境',
    enName: 'METRO',
    link: 'aerialPhoto',
  },
  {
    id: 'master',
    zhName: '建築規劃',
    enName: 'MASTER',
    link: 'test',
  },
  {
    id: 'mansion',
    zhName: '貼心建材',
    enName: 'MANSION',
    link: 'aerialPhoto',
  },
  {
    id: 'method',
    zhName: '建築工藝',
    enName: 'METHOD',
    link: 'aerialPhoto',
  },
  {
    id: 'metier',
    zhName: '大熊建設',
    enName: 'METIER',
    link: 'aerialPhoto',
  },
]

const initGsap = () => {
  const tl = gsap.timeline({ delay: 0.5 })

  tl.fromTo(
    '.svg',
    { opacity: 0, maskPosition: '100% 0', webkitMaskPosition: '100% 0' },
    {
      duration: 1,

      ease: 'steps(70)',
      maskPosition: '0% 0',

      opacity: 1,
      webkitMaskPosition: '0% 0',
      // filter: 'blur(0px)',
    },
  )

    .from(
      '.home-view-menu-item',
      {
        duration: 1,
        y: '60',
        opacity: 0,
        stagger: 0.1,
        filter: 'blur(5px)',
      },
      '<0.8',
    )

  // GSDevTools.create({
  //   animation: tl,
  // })
}

const showClick = () => {
  isShow.value = !isShow.value
  if (!screenfull.isFullscreen) {
    screenfull.toggle()
  }
  initGsap()
}
</script>

<style scoped></style>
