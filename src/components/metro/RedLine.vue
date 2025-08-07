<template>
  <div class="line-popup red-line-box">
    <div class="overlay-close" @click="$emit('close')"></div>
    <div class="main-box">
      <div class="img-box">
        <img src="../../assets/img/metro/red_line_bg.webp" alt="red_line_bg" srcset="" />
      </div>
      <div class="hint">捷運紅線示意</div>

      <div class="title-box">
        <div class="zh">
          台中捷運紅線-研議<br />
          貫穿崇德路至豐原
        </div>
        <div class="en red-en">TMRT RED LINE</div>
      </div>

      <div class="main-content-box">
        <div class="list">
          <div class="small-title red-small-title">路段│</div>
          <div class="content">北區-北屯-潭子-神岡-豐原</div>
        </div>
        <div class="list">
          <div class="small-title red-small-title">路線長度│</div>
          <div class="content">主線約11.8公里，共9站</div>
        </div>
        <div class="list">
          <div class="small-title red-small-title">計畫進度│</div>
          <div class="content">2024年交通部已核定可行性研究</div>
        </div>

        <div class="btn">
          <img src="../../assets/img/metro/taipei_btn.png" alt="" />
        </div>
      </div>

      <div class="line-img red-line-img">
        <img src="../../assets/img/metro/red_line_item.webp" alt="" srcset="" />
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
