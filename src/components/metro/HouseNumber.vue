<template>
  <div class="number-box">
    <Swiper
      :modules="[Navigation, EffectFade]"
      navigation
      :speed="800"
      :loop="true"
      class="mansion-single-swiper-container"
      :effect="'fade'"
      @slideChange="handleSlideChange"
    >
      <SwiperSlide>
        <div class="overlay-close" @click="closeWithAnimation"></div>
        <div class="img-box">
          <img src="../../assets/img/metro/door_bg.webp" alt="door_bg" srcset="" />
        </div>

        <div class="number-content-box">
          <div class="title-box">
            <div class="title">
              <div class="img-40">
                <img src="../../assets/img/metro/40.png" alt="40" srcset="" />
              </div>
              <div class="title-text">米文心金融大道，門牌身段</div>
            </div>
            <div class="small-title">
              <img src="../../assets/img/metro/number_title.png" alt="number_title" srcset="" />
            </div>
          </div>
        </div>

        <img src="../../assets/img/metro/main_text.png" alt="main_text" class="text" />
        <img src="../../assets/img/metro/light.png" alt="light" class="light" />
        <img src="../../assets/img/metro/light.png" alt="light" class="light-bg" />

        <div class="hint">情境示意圖</div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="overlay-close" @click="closeWithAnimation"></div>
        <div class="img-box bank-img-box">
          <img src="../../assets/img/metro/bank_bg.webp" alt="bank_bg" srcset="" />
        </div>
        <img src="../../assets/img/metro/light2.png" alt="light2" class="bank-light light2" />
        <img src="../../assets/img/metro/light2.png" alt="light2" class="bank-light light3" />
        <img src="../../assets/img/metro/light2.png" alt="light2" class="bank-light light4" />
        <img src="../../assets/img/metro/light2.png" alt="light2" class="bank-light light5" />
        <img src="../../assets/img/metro/light2.png" alt="light2" class="bank-light light6" />
        <img src="../../assets/img/metro/light2.png" alt="light2" class="bank-light light7" />
        <img src="../../assets/img/metro/light2.png" alt="light2" class="bank-light light8" />

        <div class="bank-content-box">
          <div class="title-box">
            <div class="title">
              <img src="../../assets/img/metro/bank_title.png" alt="bank_title" srcset="" />
            </div>
            <div class="small-title">
              <img src="../../assets/img/metro/bank_title2.png" alt="bank_title2" srcset="" />
            </div>
          </div>
        </div>

        <div class="hint">情境示意圖</div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import '@/assets/scss/metro/_house-number.scss'

gsap.registerPlugin(SplitText)

const emit = defineEmits(['close'])

const openAni = () => {
  const tl = gsap.timeline({ delay: 0.1 })

  tl.fromTo(
    '.number-box',
    {
      maskPosition: '200% 0',
    },
    {
      maskPosition: '0% 0%',
      duration: 1.5,
      ease: 'cubic-bezier(0.64, 0.03, 0.07, 0.97)',
    },
  )
    .from(
      '.number-box .img-box img',
      {
        duration: 1.2,
        opacity: 0,
        scale: 1.4,
        ease: 'power1.inOut',
      },
      '<0.2',
    )
    .from(
      '#metro-view .number-box .number-content-box .title-box .title .img-40,.title-text',
      {
        duration: 1,
        opacity: 0,
        y: '80',
        stagger: 0.2,
      },
      '<0.5',
    )
    .from(
      '#metro-view .number-box .number-content-box .title-box .small-title',
      {
        duration: 1,
        opacity: 0,
        y: '80',
      },
      '<0.3',
    )

    .fromTo(
      '#metro-view .number-box .text',
      {
        y: 100,
        maskPosition: '200% 0',
      },
      {
        y: 0,
        maskPosition: '0% 0%',
        duration: 1.8,
        // ease: 'cubic-bezier(0.24,0.43,0.15,0.97)',
      },
      '<0.2',
    )
    .from(
      '#metro-view .number-box .light,.light-bg',
      {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          // 呼吸燈效果
          gsap.to('#metro-view .number-box .light', {
            opacity: 0.3,
            duration: 1.2,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
          })
        },
      },
      '<0.85',
    )
}

const closeWithAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('close') // 動畫結束後再真正關閉
    },
  })

  tl.to('.number-box', {
    maskPosition: '200% 0',
    duration: 1.2,
    ease: 'cubic-bezier(0.64, 0.03, 0.07, 0.97)',
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSlideChange = (swiper: any) => {
  // 檢查當前是第二個 slide (index 從 0 開始)
  if (swiper.realIndex === 1) {
    // 對 bank-img 做放大縮小動畫
    gsap.fromTo(
      '.bank-img-box img',
      { scale: 1.4 },
      {
        scale: 1,
        duration: 1,

        ease: 'power1.inOut',
      },
    )
  }
}
// 初始化時先呼叫一次
onMounted(async () => {
  openAni()
})
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: #000; /* 可自行換顏色 */
}
</style>
