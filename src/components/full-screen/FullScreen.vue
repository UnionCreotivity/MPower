<template>
  <div class="full-screen" @click.stop="handleClick">
    <img src="@/assets/img/other/full-screen.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
import screenfull from 'screenfull'

const handleClick = () => {
  // 先讓事件結束，避免卡住滑鼠動畫
  setTimeout(() => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
    }
  }, 50) // 延遲 1 frame (大約 16ms～50ms)
}
</script>

<style lang="scss" scoped>
.full-screen {
  position: absolute;
  right: 3vw;
  bottom: 5%;
  width: 3vw;
  height: 3vw;
  opacity: 0.5;

  z-index: 35;
  img {
    height: 100%;
  }
  @media screen and (max-width: 1400px) {
    width: 5vw;
    height: 5vw;
    bottom: 3%;
  }
}
</style>
