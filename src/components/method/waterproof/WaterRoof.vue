<template>
  <div class="method-content-box">
    <div class="left-box">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        alt=""
        class="method-img roof-img"
        :class="{ active: index === currentIndex }"
      />
    </div>
    <div class="right-box window-right-box">
      <div class="title-box">屋頂防水</div>
      <div class="content-box">
        <ol class="step-list">
          <li
            :class="{ active: index === currentIndex }"
            v-for="(step, index) in steps"
            :key="index"
          >
            <p v-html="step"></p>
            <span class="background-block"></span>
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
  new URL('../../../assets/img/method/waterproof/1.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterproof/2.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterproof/3.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterproof/4.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterproof/5.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterproof/6.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterproof/7.webp', import.meta.url).href,
]

const steps = [
  '1.地坪整體粉光、清潔表層，填縫材補縫隙',
  '2.導角以樹脂砂漿處理，延伸至牆面、防水材',
  '3.施做彈性防水材',
  '4.試水72小時以上，確定不漏水為止',
  '5.施做水泥砂漿並貼磚',
  '6.防水材抹縫',
  '7.再試水72小時以上，確定不漏水為止',
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
    '<0.15',
  )
}

onMounted(() => {
  initGsap()
})
</script>

<style scoped></style>
