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
// import { GSDevTools } from 'gsap/GSDevTools'
gsap.registerPlugin(SplitText)
// gsap.registerPlugin(GSDevTools)

const router = useRouter()

const goTo = (type: string) => {
  router.push(`/method/${type}`)
}

const initGsap = () => {
  const tl = gsap.timeline({ id: 'method-menu' })
  // GSDevTools.create({ animation: tl })

  const titleSplits = gsap.utils.toArray('.method-menu-view .title-box div') as HTMLElement[]
  const mainSplit = SplitText.create(titleSplits, {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })
  const imgTextSplits = gsap.utils.toArray(
    '.method-menu-view .menu-box .item .img-box .text',
  ) as HTMLElement[]
  tl.fromTo(
    mainSplit.chars,
    {
      'will-change': 'opacity, transform',
      opacity: 0,
      yPercent: 50,

      transformOrigin: '50% 50%',
    },
    {
      duration: 1.3,
      ease: 'back.inOut(1)',
      opacity: 1,
      yPercent: 0,

      stagger: 0.05,
    },
  )

    .fromTo(
      '.method-menu-view .menu-box .item',
      { opacity: 0, 'will-change': 'opacity, transform' },
      {
        opacity: 1,
        ease: 'power1.in',
        duration: 1,
        stagger: 0.1,
      },
      '<1.1',
    )
    .fromTo(
      '.method-menu-view .menu-box .item .title',
      { opacity: 0 },
      {
        duration: 1,
        opacity: 1,
        stagger: 0.1,
      },
      '<1.2',
    )

  imgTextSplits.forEach((el) => {
    const split = SplitText.create(el, {
      type: 'chars,words,lines',
      linesClass: 'clip-text',
    })
    const imgTextTl = gsap.timeline({ delay: 1.3 })
    imgTextTl.fromTo(
      split.chars,
      {
        'will-change': 'opacity, transform',
        transformOrigin: '50% 100%',
        opacity: 0,
        scale: 3,
        rotationY: -90,
      },
      {
        duration: 2.5,
        ease: 'expo',
        opacity: 1,
        scale: 1,
        rotationY: 0,
        stagger: { each: 0.06, from: 'start' },
      },
      '<0.5',
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
