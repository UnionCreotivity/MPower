<template>
  <div class="method-content-box">
    <div class="left-box">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        alt=""
        class="method-img window-img"
        :class="{ active: index === currentIndex }"
      />
    </div>
    <div class="right-box window-right-box">
      <div class="title-box">窗框防水</div>
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

const images = [
  new URL('../../../assets/img/method/waterwindow/1.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterwindow/2.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterwindow/3.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterwindow/4.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterwindow/5.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterwindow/6.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterwindow/7.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterwindow/8.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterwindow/9.webp', import.meta.url).href,
  new URL('../../../assets/img/method/waterwindow/10.webp', import.meta.url).href,
]

const steps = [
  '1.窗框四周以彈性水泥施作，<br />開口内部採用RC鋼筋做斜角補強，可防止剪力裂縫',
  '2.RC灌漿',
  '3.窗框安装',
  '4.嵌縫：灌製防水水泥沙漿',
  '5.塗抹兩道防水材料',
  '6.水泥沙漿全面打底',
  '7.施作面材',
  '8.抹縫處理',
  '9.窗框處用矽利康(Silicone)填縫',
  '10.最後清洗外牆與磁磚，以檢查防水效果',
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
