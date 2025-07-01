<template>
  <section class="method-menu-view">
    <div class="title-box">
      <div class="zh">建築工藝</div>
      <div class="en">METHOD OF HOUSE</div>
    </div>

    <div class="menu-box">
      <div class="item" @click="goTo('structure')">
        <div class="img-box">
          <img src="../../../assets/img/method/1.webp" alt="" />
          <div class="text">STRUCTURE</div>
        </div>
        <div class="title">結構工法</div>
      </div>

      <div class="item" @click="goTo('waterproof')">
        <div class="img-box">
          <img src="../../../assets/img/method/2.webp" alt="" />
          <div class="text">WATERPROOF</div>
        </div>
        <div class="title">防水工法</div>
      </div>

      <div class="item" @click="goTo('intimate')">
        <div class="img-box">
          <img src="../../../assets/img/method/3.webp" alt="" />
          <div class="text">INTIMATE</div>
        </div>
        <div class="title">貼心工法</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/method/_method-index.scss'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)
const router = useRouter()

const goTo = (type: string) => {
  router.push(`/method/${type}`)
}

const initGsap = () => {
  const tl = gsap.timeline({ delay: 0.5 })

  tl.from('.method-menu-view .title-box div', {
    opacity: 0,
    duration: 0.8,
    y: 80,
    stagger: 0.1,
  })
    .fromTo(
      '.method-menu-view .menu-box .item .img-box',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        stagger: 0.2,
      },
      '<0.3',
    )
    .fromTo(
      '.method-menu-view .menu-box .item .title',
      { opacity: 0 },
      {
        duration: 1,
        opacity: 1,
        stagger: 0.1,
      },
      '<0.15',
    )

  // SplitText 動畫加到 timeline 裡面
  const splits = gsap.utils.toArray(
    '.method-menu-view .menu-box .item .img-box .text',
  ) as HTMLElement[]

  splits.forEach((el) => {
    const split = SplitText.create(el, {
      type: 'chars,words,lines',
      linesClass: 'clip-text',
    })

    tl.fromTo(
      split.chars,
      {
        'will-change': 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 4,
        scaleX: 0.7,
        transformOrigin: '50% 0%',
      },
      {
        duration: 2,
        ease: 'back.inOut(2)',
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: 0.03,
      },
      '<0.2', // 控制 SplitText 動畫的起始時機
    )
  })
}
onMounted(() => {
  initGsap()
})
</script>

<style scoped>
.white-mask {
  position: fixed;
  inset: 0;
  background: white;
  z-index: 999;
}
.white-mask-enter-active,
.white-mask-leave-active {
  transition: opacity 0.4s ease;
}
.white-mask-enter-from,
.white-mask-leave-to {
  opacity: 0;
}
.white-mask-enter-to,
.white-mask-leave-from {
  opacity: 1;
}
</style>
