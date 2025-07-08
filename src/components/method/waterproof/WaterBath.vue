<template>
  <div class="method-content-box">
    <div class="left-box">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        alt=""
        class="method-img bath-img"
        :class="{ active: index === currentIndex }"
      />
    </div>
    <div class="right-box window-right-box">
      <div class="title-box">浴室防水</div>
      <div class="content-box">
        <ol class="step-list">
          <li
            :class="{ active: index === currentIndex }"
            v-for="(step, index) in steps"
            :key="index"
          >
            <p v-html="step"></p>
          </li>
        </ol>
      </div>

      <div class="control-box">
        <div class="prev" @click="prevImage">
          <img src="../../../assets/img/prev.svg" alt="" />
        </div>
        <div class="next" @click="nextImage">
          <img src="../../../assets/img/next.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const images = [
  new URL('../../../assets/img/method/waterbath/1.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterbath/2.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterbath/3.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterbath/4.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterbath/5.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterbath/6.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterbath/7.webp', import.meta.url).href,
]

const steps = [
  '1.RC結構體',
  '2.1：3泥作粉刷至樑底',
  '3.第一道防水底漆',
  '4.第二道防水材料',
  '5.試水靜置',
  '6.施作地坪洩水坡度，嚴防積水',
  '7.磁磚面材鋪設',
]

const currentIndex = ref(0)

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const initGsap = () => {
  const tl = gsap.timeline({})

  tl.fromTo(
    '#method-view .method-content-box .left-box',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
    },
  ).from(
    '#method-view .method-content-box .right-box div',
    {
      filter: 'blur(8px)',
      opacity: 0,
      ease: 'power1.inOut',
      stagger: 0.15,
      duration: 1,
    },
    '<0.3',
  )
}

onMounted(() => {
  initGsap()
})
</script>

<style scoped></style>
