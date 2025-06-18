<template>
  <div class="full-screen" @click.stop="handleClick">
    <img src="@/assets/img/other/full-screen.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
import screenfull from 'screenfull'

const handleClick = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
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
  cursor: pointer;
  z-index: 20;
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
