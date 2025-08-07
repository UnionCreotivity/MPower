<template>
  <div class="taipei-line-box">
    <div class="overlay-close" @click="closeWithAnimation"></div>
    <div class="main-box">
      <div class="img-box">
        <img src="../../assets/img/metro/taipei_bg.webp" alt="taipei_bg" srcset="" />
      </div>

      <div class="title">
        <img src="../../assets/img/metro/taipei_title.png" alt="taipei_title" srcset="" />
      </div>

      <div class="taipei-img">
        <img src="../../assets/img/metro/taipei_img.webp" alt="taipei_img" srcset="" />
        <div class="hint">
          資料來源:賣價登錄資料,臺北大眾捷連股份有限公司;永慶房產集團研究發展中心氣整整。<br />
          住宅價格篩選條件:1.交易標的為房地(土地+建物)、房地(土地+建物)+車位、建物。2.建物型態:住宅大樓、華廈及公寓。3.排除屋齢兩年內、一樓及親友交易之成交資料。<br />
          註1.實價登錄資料統計自2022年6月至2023年5月。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

import '@/assets/scss/metro/_metro-light-box.scss'

const emit = defineEmits(['close'])

const imgAni = () => {
  const tl = gsap.timeline({})

  tl.fromTo(
    '.taipei-line-box',
    {
      maskPosition: '200% 0',
    },
    {
      maskPosition: '0% 0%',
      duration: 1.5,
      ease: 'cubic-bezier(0.64, 0.03, 0.07, 0.97)',
    },
  )
}

const closeWithAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('close') // 動畫結束後再真正關閉
    },
  })

  tl.to('.taipei-line-box', {
    maskPosition: '200% 0',
    duration: 1.2,
  })
}
// 初始化時先呼叫一次
onMounted(async () => {
  imgAni()
})
</script>

<style scoped></style>
