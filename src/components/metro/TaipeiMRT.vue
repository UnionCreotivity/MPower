<template>
  <Swiper
    :modules="[Navigation]"
    navigation
    :speed="800"
    class="mrt-swiper"
    id="mrt-swiper-container"
    @slide-change="handleSlideChange"
  >
    <SwiperSlide>
      <div class="taipei-mrt-box">
        <div class="overlay-close" @click="closeWithAnimation"></div>

        <div class="left-box">
          <div class="title-box">
            <div class="en">
              <img src="../../assets/img/metro/mrt_entitle.png" alt="" srcset="" />
            </div>
            <div class="zh">台中捷運崛起 台北模式再現</div>
          </div>

          <div class="taipei-mrt-content-box">
            台北捷運，串聯生活、商圈與核心，房價與區域價值持續攀升，<br />
            成為最鮮明的城市成長軌跡。<br /><br />
            如今，台中正走在同樣的道路上。隨著捷運逐步落實，帶動沿線<br />
            環境全面升級。<br />
            未來，捷運所經之處，將是資產保值與增值的黃金軸帶。<br />

            <div>台北已經驗證，台中正在發生。</div>

            掌握捷運軌道經濟，掌握未來城市價值！
          </div>
        </div>
        <div class="right-box">
          <div class="zh-title">
            <img src="../../assets/img/metro/mrt_zhtitle.png" alt="mrt_zhtitle" srcset="" />
          </div>
          <div class="mrt-img-box">
            <img class="wen-1" src="../../assets/img/metro/wen.png" alt="wen" srcset="" />
            <img class="dan-2" src="../../assets/img/metro/dan.png" alt="dan" srcset="" />
            <img class="ban-3" src="../../assets/img/metro/ban.png" alt="ban" srcset="" />
            <img class="zhong-4" src="../../assets/img/metro/zhong.png" alt="zhong" srcset="" />
            <img class="song-5" src="../../assets/img/metro/song.png" alt="song" srcset="" />
            <img class="hai-6" src="../../assets/img/metro/hai.png" alt="hai" srcset="" />
            <img class="gi-7" src="../../assets/img/metro/gi.png" alt="gi" srcset="" />
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div class="taichung-mrt-box taichung-mrt-box1">
        <div class="overlay-close" @click="closeWithAnimation"></div>

        <div class="left-box">
          <div class="title-box">
            <div class="en">
              <img src="../../assets/img/metro/mrt_entitle.png" alt="" srcset="" />
            </div>
            <div class="zh">台中捷運崛起 台北模式再現</div>
          </div>

          <div class="taipei-mrt-content-box taichung-mrt-content-box">
            台北捷運，串聯生活、商圈與核心，房價與區域價值持續攀升，<br />
            成為最鮮明的城市成長軌跡。<br /><br />
            如今，台中正走在同樣的道路上。隨著捷運逐步落實，帶動沿線<br />
            環境全面升級。<br />
            未來，捷運所經之處，將是資產保值與增值的黃金軸帶。<br />

            <div>台北已經驗證，台中正在發生。</div>

            掌握捷運軌道經濟，掌握未來城市價值！
          </div>
        </div>
        <div class="right-box">
          <img src="../../assets/img/metro/taichung_mrt_bg.png" alt="taichung_mrt_bg" srcset="" />
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import '@/assets/scss/metro/_taipei-mrt.scss'
import gsap from 'gsap'

// Slide 0 動畫
const animateSlide1 = () => {
  const tl = gsap.timeline({ delay: 0.25 })

  tl.to('.taipei-mrt-box .left-box .title-box div', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15,
  })
    .to('.taipei-mrt-box .taipei-mrt-content-box', { y: 0, opacity: 1, duration: 1 }, '<0.3')
    .to(
      '.wen-1, .dan-2, .ban-3, .zhong-4, .song-5, .hai-6, .gi-7',
      { opacity: 1, duration: 1, ease: 'power1.in', stagger: 0.1 },
      '<0.3',
    )
    .to('.taipei-mrt-box .right-box .zh-title', { y: 0, opacity: 1, duration: 1 }, '<0.3')
}

// Slide 1 動畫
const animateSlide2 = () => {
  gsap.set('.taichung-mrt-box1 .left-box .title-box div', { y: 100, opacity: 0 })
  gsap.set('.taichung-mrt-box1 .left-box .taichung-mrt-content-box', { y: 100, opacity: 0 })
  gsap.set('.taichung-mrt-box1 .right-box', { y: 100, opacity: 0 })

  const tl = gsap.timeline({ delay: 0.4 })
  tl.to('.taichung-mrt-box1 .left-box .title-box div', {
    y: 0,
    opacity: 1,

    duration: 1,
    stagger: 0.1,
  })
    .to(
      '.taichung-mrt-box1 .left-box .taichung-mrt-content-box',
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      '<0.3',
    )
    .to(
      '.taichung-mrt-box1 .right-box',
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      '<0.3',
    )
}

// 監聽 slide 切換
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSlideChange = (swiper: any) => {
  const index = swiper.activeIndex

  resetSlide1()
  resetSlide2()

  // 再播放對應動畫

  if (index === 0) animateSlide1()
  if (index === 1) animateSlide2()
}

const emit = defineEmits(['close'])

const resetSlide1 = () => {
  gsap.set('.taipei-mrt-box .left-box .title-box div', { y: 100, opacity: 0 })
  gsap.set('.taipei-mrt-box .taipei-mrt-content-box', { y: 100, opacity: 0 })
  gsap.set('.wen-1, .dan-2, .ban-3, .zhong-4, .song-5, .hai-6, .gi-7', { opacity: 0 })
  gsap.set('.taipei-mrt-box .right-box .zh-title', { y: 70, opacity: 0 })
}

const resetSlide2 = () => {
  gsap.set('.taichung-mrt-box1 .left-box .title-box div', { y: 100, opacity: 0 })
  gsap.set('.taichung-mrt-box1 .left-box .taichung-mrt-content-box', { y: 100, opacity: 0 })
  gsap.set('.taichung-mrt-box1 .right-box', { y: 100, opacity: 0 })
}

const imgAni = () => {
  const tl = gsap.timeline({ delay: 0.2 })
  tl.to('.taipei-mrt-box .left-box .title-box div', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15,
  })
    .to('.taipei-mrt-box .taipei-mrt-content-box', { y: 0, opacity: 1, duration: 1 }, '<0.3')
    .to(
      '.wen-1, .dan-2, .ban-3, .zhong-4, .song-5, .hai-6, .gi-7',
      { opacity: 1, duration: 1, ease: 'power1.in', stagger: 0.1 },
      '<0.3',
    )
    .to('.taipei-mrt-box .right-box .zh-title', { y: 0, opacity: 1, duration: 1 }, '<0.3')
}

const closeWithAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('close') // 動畫結束後再真正關閉
    },
  })

  tl.to('.mrt-swiper', {
    maskPosition: '200% 0',
    duration: 1.2,
  })
}
// 初始化時先呼叫一次
onMounted(() => {
  resetSlide1()
  resetSlide2()
  imgAni()
})
</script>

<style scoped></style>
