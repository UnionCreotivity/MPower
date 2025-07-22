<template>
  <div class="popup-box">
    <div class="back-button" @click="closeBox">
      <img src="../../../assets/img/other/x.svg" alt="x" />
    </div>
    <div class="img">
      <img
        v-if="props.imgIndex === 1"
        src="../../../assets/img/metro/btn_1_img.webp"
        alt="綠線圖1"
      />
      <img v-else src="../../../assets/img/metro/btn_2_img.webp" alt="綠線圖2" />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])
const props = defineProps<{
  imgIndex: number
}>()
console.log(props.imgIndex)
const closeBox = () => {
  emit('close')
}
</script>

<style lang="scss" scoped>
.popup-box {
  position: absolute;
  inset: 0;
  z-index: 999;
  height: 100%;
  width: 100%;
  background-color: #f2f1ea;
  display: flex;
  justify-content: center;

  .back-button {
    position: absolute;
    top: 0.8vw;
    padding: 1vw;
    right: 1vw;
    width: 3.5vw;
    z-index: 50;
    img {
      width: 100%;
      transition: all 0.5s;
    }
    &:hover {
      img {
        scale: 1.25;
      }
    }
  }

  .img {
    width: 57%;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-self: center;

    img {
      width: 100%;
    }
  }
}
</style>
