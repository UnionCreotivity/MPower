<template>
  <div class="number-box">
    <div class="metro-content-box">
      <div class="back-button" @click="closeBox">
        <img src="../../assets/img/other/x.svg" alt="x" />
      </div>
      <div class="left-box"></div>
      <div class="right-box">
        <div class="title-box">移動價值，無限增殖</div>
        <div class="small-title-box">3捷運，繁榮軌跡匯聚</div>
        <div class="house-number-ontent-box">
          每一步，向前；每一刻，增值。<br />
          複製台北忠孝復興、忠孝敦化交會經驗，<br />
          打造台中文心崇德、文心中清人潮新聚點！<br />
          捷運共站孕育新商圈，商機加大更無限；<br />
          移動經濟定錨新軸心，地段本身就是財富保證！
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/metro/_house-number.scss'
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

const closeBox = () => {
  emit('close')
}
</script>

<style scoped></style>
