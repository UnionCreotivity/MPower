<template>
  <div class="floor-menu">
    <div class="floor-box">
      <div class="floor-title" ref="floorTitle">FLOOR</div>
      <div
        v-for="floor in floorList"
        :key="floor"
        class="floor"
        @click="floor !== '1F' && $emit('selectFloor', floor)"
      >
        {{ floor }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/building/_building-view.scss'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

const floorList = ['R1', '3F-12F', '2F', '1F', 'B1', 'B2', 'B3', 'B4']
const floorTitle = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!floorTitle.value) return

  // const split = new SplitText(floorTitle.value, { type: 'chars' })
  // const chars = split.chars

  // gsap.set(chars, { opacity: 0.2 })

  // gsap.to(chars, {
  //   opacity: 1,
  //   stagger: {
  //     each: 0.15,
  //     repeat: -1,
  //     yoyo: true,
  //   },
  //   duration: 0.8,
  //   ease: 'power1.inOut',
  // })
})
</script>

<style lang="scss"></style>
