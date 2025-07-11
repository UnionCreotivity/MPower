<template>
  <Transition mode="out-in" @before-enter="runRevealAnimation">
    <slot />
  </Transition>

  <svg class="overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path
      ref="overlayPath"
      class="overlay__path"
      vector-effect="non-scaling-stroke"
      d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
    />
  </svg>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'

const overlayPath = ref<SVGPathElement | null>(null)

const paths = {
  step1: {
    unfilled: 'M 0 100 V 100 Q 50 100 100 100 V 100 z',
    inBetween: {
      curve1: 'M 0 100 V 50 Q 50 0 100 50 V 100 z',
    },
    filled: 'M 0 100 V 0 Q 50 0 100 0 V 100 z',
  },
}

const runRevealAnimation = () => {
  if (!overlayPath.value) return

  const tl = gsap.timeline()

  tl.set(overlayPath.value, {
    attr: { d: paths.step1.unfilled },
    opacity: 1,
  })
    .to(
      overlayPath.value,
      {
        duration: 0.8,
        ease: 'power4.in',
        attr: { d: paths.step1.inBetween.curve1 },
      },
      0,
    )
    .to(overlayPath.value, {
      duration: 0.2,
      ease: 'power1',
      attr: { d: paths.step1.filled },
    })
    .to(overlayPath.value, {
      duration: 0.6,
      opacity: 0,
      ease: 'power1.out',
    })
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
}

.overlay__path {
  fill: #856b58;
}
</style>
