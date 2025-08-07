<template>
  <div class="line-popup orange-line-box">
    <div class="overlay-close" @click="$emit('close')"></div>
    <div class="main-box">
      <div class="img-box">
        <img src="../../assets/img/metro/orange_line_bg.webp" alt="orange_line_bg" srcset="" />
      </div>
      <div class="hint orange-hint">捷運橘線示意</div>

      <div class="title-box">
        <div class="zh">
          台中捷運橘線-審議
          <br />
          直通台中國際機場
        </div>
        <div class="en orange-en">TMRT ORANGE LINE</div>
      </div>

      <div class="main-content-box">
        <div class="list">
          <div class="small-title orange-small-title">路段│</div>
          <div class="content">機場段-市區段-屯區段</div>
        </div>
        <div class="list">
          <div class="small-title orange-small-title">路線長度│</div>
          <div class="content">主線約29.23公里，共26站</div>
        </div>
        <div class="list">
          <div class="small-title orange-small-title">計畫進度│</div>
          <div class="content">2024年交通部已原則同意，待最終審議後核定</div>
        </div>

        <div class="btn">
          <img src="../../assets/img/metro/taipei_btn.png" alt="" />
        </div>
      </div>

      <div class="line-img orange-line-img">
        <img src="../../assets/img/metro/orange_line_item.webp" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import '@/assets/scss/metro/_metro-light-box.scss'
</script>

<style scoped></style>
