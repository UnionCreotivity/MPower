<template>
  <div class="taipei-mrt-box">
    <div class="overlay-close"></div>

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
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

import '@/assets/scss/metro/_taipei-mrt.scss'

// const emit = defineEmits(['close'])

// const imgAni = () => {
//   const tl = gsap.timeline({})

//   tl.fromTo(
//     '.taipei-mrt-box',
//     {
//       maskPosition: '200% 0',
//     },
//     {
//       maskPosition: '0% 0%',
//       duration: 1.5,
//       ease: 'cubic-bezier(0.64, 0.03, 0.07, 0.97)',
//     },
//   )
// }

// const closeWithAnimation = () => {
//   const tl = gsap.timeline({
//     onComplete: () => {
//       emit('close') // 動畫結束後再真正關閉
//     },
//   })

//   tl.to('.taipei-mrt-box', {
//     maskPosition: '200% 0',
//     duration: 1.2,
//   })
// }
// // 初始化時先呼叫一次
// onMounted(async () => {
//   imgAni()
// })
</script>

<style scoped></style>
