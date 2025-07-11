<template>
  <div class="method-content-box">
    <div class="left-box">
      <video
        src="../../../assets/img/method/AluminumForm.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
        class="left-video"
      ></video>
    </div>
    <div class="right-box">
      <div class="title-box">筏式基礎</div>
      <div class="content-box">
        <div class="content">
          在地基下方整體澆置大面積鋼筋混凝土底板，像筏子一樣承載整棟建築重量，能有效分散荷重、減少不均勻沉陷，常用於軟弱地基或高地下水位環境，施工方便且經濟性佳。
        </div>
      </div>

      <!-- <div class="control-box">
        <div class="prev" @click="prevImage">
          <img src="../../../assets/img/prev.svg" alt="" />
        </div>
        <div class="next" @click="nextImage">
          <img src="../../../assets/img/next.svg" alt="" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
// import { GSDevTools } from 'gsap/GSDevTools'
// gsap.registerPlugin(GSDevTools)

// const images = [
//   new URL('../../../assets/img/method/structure/1.webp', import.meta.url).href,
//   new URL('../../../assets/img/method/structure/2.webp', import.meta.url).href,
//   new URL('../../../assets/img/method/structure/3.webp', import.meta.url).href,
//   new URL('../../../assets/img/method/structure/4.webp', import.meta.url).href,
// ]

// const currentIndex = ref(0)

// const prevImage = () => {
//   currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
// }

// const nextImage = () => {
//   currentIndex.value = (currentIndex.value + 1) % images.length
// }

const initGsap = () => {
  const tl = gsap.timeline({})

  tl.fromTo(
    '.left-video',
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
      stagger: 0.2,
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
