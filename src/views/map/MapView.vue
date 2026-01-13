<template>
  <div class="map-view">
    <div class="top-box">
      <div class="en-title">ANALYSIS</div>
      <div class="zh-title">競案分析</div>
    </div>
    <GoogleMap />
  </div>
</template>

<script setup lang="ts">
import GoogleMap from '@/components/map/GoogleMap.vue'
</script>

<style lang='scss' scoped>

@use '../../assets/scss/utils/mixin' as *;

.map-view {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .top-box {
    display: flex;
    flex-direction: column;
    margin-top: 2%;
    .en-title {
      font-family: var(--font-family-title-en);
      font-size: 1.7vw;
      font-weight: 100;
      color: #a48b78;
      text-align: center;
      letter-spacing: 0.08em;
      margin-bottom: 0.3%;
    }
    .zh-title {
      position: relative;
      text-align: center;
      padding-bottom: 1%;
      margin-bottom: 1.5%;
      @include pageTitle();
      &::after {
        content: '';
        position: absolute;
        background-color: #5f4c3f;
        height: 1px;
        width: 3%;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .content {
      @include pageContent();
      & {
        text-align: center;
      }
    }
  }
}
</style>
