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

import { useRouter } from 'vue-router'
const router = useRouter()

const goTo = (type: string) => {
  router.push(`/method/${type}`)
}
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
