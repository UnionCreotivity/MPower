<template>
  <ViewFixed>
    <div class="container">
      <div class="coming">
        <!-- <img src="../../assets/img/coming.svg" alt="" srcset="" /> -->
        Coming Soon...
      </div>
    </div>
  </ViewFixed>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
gsap.registerPlugin(SplitText)

const initGsap = () => {
  const tl = gsap.timeline({ delay: 0.1 })
  const splits = gsap.utils.toArray('.coming') as HTMLElement[]
  const split = SplitText.create(splits, {
    type: 'chars,words,lines',
    linesClass: 'clip-text',
  })

  tl.fromTo(
    split.chars,
    {
      'will-change': 'opacity, transform',
      opacity: 0,
      yPercent: 60,
      scaleY: 2,
      scaleX: 0.7,
      transformOrigin: '50% 0%',
    },
    {
      duration: 1,
      ease: 'back.inOut(2)',
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      stagger: 0.03,
    },
  )
}

onMounted(() => {
  initGsap()
})
</script>

<style scoped lang="scss">
.container {
  background-color: #f4f3ec;
  width: 100%;
  height: 100svh;
  overflow: hidden;
}
.coming {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #9e7966;
  font-size: 1.5vw;
  font-style: italic;
  font-weight: bold;
  font-family: var(--font-family-title-en);
  background-color: #f4f3ec;
  svg {
    width: 6vw;
  }
}
</style>
