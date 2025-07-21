<template>
  <div class="line-popup">
    <Menu :useBlackMenu="true" />
    <FullScreen />
    <div class="metro-light-box">
      <div class="metro-light-content-box">
        <div class="back-button" @click="$emit('close')">
          <img src="../../assets/img/other/x.svg" alt="x" />
        </div>
        <div class="left-box">
          <div class="swiper-box">
            <Swiper
              :speed="1000"
              :slides-per-view="1"
              :navigation="navigationOptions"
              :modules="[Navigation]"
              class="swiper-main"
            >
              <swiper-slide>
                <img src="../../assets/img/metro/green_line1.webp" alt="" srcset="" />
              </swiper-slide>
              <swiper-slide>
                <img src="../../assets/img/metro/green_line2.webp" alt="" srcset="" />
              </swiper-slide>
            </Swiper>
            <div class="prev">
              <img src="../../assets/img/other/left_arrow.svg" alt="" />
            </div>
            <div class="next">
              <img src="../../assets/img/other/right_arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="right-box">
          <div class="en-title">TAICHUNG MASS RAPID TRANSIT</div>
          <div class="title-box">台中捷運綠線</div>
          <div class="light-box-content-box">
            台中捷運綠線全長約16.71公里，沿線共設18站，已於110年4月25日正式通車，串聯烏日、文心及北屯等重要生活圈。<br />
            為擴大捷運效益，綠線延伸至大坑與彰化的可行性研究，已於109年7月通過交通部審查，並於113年1月31日獲行政院正式核定，未來可望帶動更廣泛的區域發展與通勤便利性。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'

import '@/assets/scss/metro/_metro-light-box.scss'
import Menu from '../menu/Menu.vue'
import FullScreen from '../full-screen/FullScreen.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

const navigationOptions = {
  prevEl: '.prev',
  nextEl: '.next',
}
</script>

<style scoped></style>
