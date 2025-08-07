<template>
  <div class="line-popup green-line-box">
    <div class="overlay-close" @click="$emit('close')"></div>
    <div class="main-box">
      <div class="img-box">
        <img src="../../assets/img/metro/green_line_bg.webp" alt="green_line_bg" srcset="" />
      </div>
      <div class="hint">捷運綠線實景</div>

      <div class="title-box">
        <div class="zh">台中捷運完工</div>
        <div class="en green-en">TMRT GREEN LINE</div>
      </div>

      <div class="main-content-box">
        <div class="list">
          <div class="small-title green-small-title">路段│</div>
          <div class="content">烏日-文心-北屯+彰化-大坑延伸段</div>
        </div>
        <div class="list">
          <div class="small-title green-small-title">路線長度│</div>
          <div class="content">主線約16.71公里，共18站+延伸約9.93公里，共8站</div>
        </div>
        <div class="list">
          <div class="small-title green-small-title">計畫進度│</div>
          <div class="content">2021年主線完工通車+2024年延伸段核定通過</div>
        </div>

        <div class="btn">
          <img src="../../assets/img/metro/taipei_btn.png" alt="" />
        </div>
      </div>

      <div class="line-img">
        <img src="../../assets/img/metro/green_line_item.webp" alt="" srcset="" />
      </div>
      <img class="light" src="../../assets/img/metro/light.png" alt="light" srcset="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import '@/assets/scss/metro/_metro-light-box.scss'
</script>

<style scoped></style>
