<template>
  <div class="line-popup">
    <div class="main-box">
      <div class="metro-light-box">
        <div class="metro-light-content-box">
          <div class="back-button" @click="closeBox">
            <img src="../../assets/img/other/x.svg" alt="x" />
          </div>
          <div class="left-box">
            <div class="swiper-box">
              <Swiper
                :speed="1000"
                :loop="true"
                :slides-per-view="1"
                :navigation="navigationOptions"
                :modules="[Navigation, EffectFade, Autoplay]"
                :effect="'fade'"
                class="swiper-main"
              >
                <swiper-slide>
                  <img src="../../assets/img/metro/green_line1.webp" alt="green_line1" srcset="" />
                  <div class="hint">台中捷運實景示意圖</div>
                </swiper-slide>
                <swiper-slide>
                  <img src="../../assets/img/metro/green_line2.webp" alt="green_line2" srcset="" />
                  <div class="hint">台中捷運實景示意圖</div>
                </swiper-slide>
              </Swiper>
              <div class="prev">
                <img src="../../assets/img/other/left_arrow.svg" alt="left_arrow" />
              </div>
              <div class="next">
                <img src="../../assets/img/other/right_arrow.svg" alt="right_arrow" />
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

            <div class="btn-box">
              <div class="btn" @click="openLineImg(1)">
                <img src="../../assets/img/metro/green_btn_1.svg" alt="" />
              </div>
              <div class="btn" @click="openLineImg(2)">
                <img src="../../assets/img/metro/green_btn_2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Transition appear @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <GreenLineImg
        v-if="showGreenLineImg"
        :imgIndex="selectedImageIndex"
        @close="showGreenLineImg = false"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import '@/assets/scss/metro/_metro-light-box.scss'
import GreenLineImg from './MrtLightImgBox/LineImg.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const navigationOptions = {
  prevEl: '.prev',
  nextEl: '.next',
}

const showGreenLineImg = ref(false)
const selectedImageIndex = ref(1)

const openLineImg = (index: number) => {
  selectedImageIndex.value = index
  showGreenLineImg.value = true
}
const onBeforeEnter = (el: Element) => {
  gsap.set(el, { opacity: 0 })
}

const onEnter = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
    onComplete: done,
  })
}

const onLeave = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.inOut',
    onComplete: done,
  })
}

const emit = defineEmits(['close'])

const closeBox = () => {
  emit('close')
}
</script>

<style scoped></style>
