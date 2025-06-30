<template>
  <div class="method-content-box">
    <div class="left-box">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        alt=""
        class="method-img"
        :class="{ active: index === currentIndex }"
      />
    </div>
    <div class="right-box">
      <div class="title-box">系統鋁膜</div>
      <div class="content-box">
        <div class="content">
          取代傳統木模板，鋁模板採用精密測量及電腦化配模技術，<br />
          施工更精準、快速、乾淨，且不漏漿，混凝土的結構<br />
          更是扎實、平滑，讓結構強度更強更穩固，<br />
          且能大幅減少營建廢棄物的產生，既環保又節能。
        </div>
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

const images = [
  new URL('../../../assets/img/method/structure/1.webp', import.meta.url).href,
  new URL('../../../assets/img/method/structure/2.webp', import.meta.url).href,
  new URL('../../../assets/img/method/structure/3.webp', import.meta.url).href,
  new URL('../../../assets/img/method/structure/4.webp', import.meta.url).href,
]

const currentIndex = ref(0)

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}
</script>

<style scoped></style>
