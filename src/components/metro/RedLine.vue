<template>
  <div class="line-popup red-line-box">
    <div class="overlay-close" @click="closeWithAnimation"></div>
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

        <div class="btn" @click="showTaipeiLine = true">
          <img src="../../assets/img/metro/taipei_btn.png" alt="" />
        </div>
      </div>

      <div class="line-img red-line-img">
        <img src="../../assets/img/metro/red_line_item.webp" alt="" srcset="" />
      </div>
    </div>
  </div>

  <TaipeiLine v-if="showTaipeiLine" @close="showTaipeiLine = false" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import TaipeiLine from '@/components/metro/TaipeiLine.vue'
import '@/assets/scss/metro/_metro-light-box.scss'

const showTaipeiLine = ref(false)

// 定義 emit
const emit = defineEmits(['close'])

const imgAni = () => {
  const tl = gsap.timeline({})
  tl.fromTo(
    '.line-popup',
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
      '.line-popup .main-box .img-box img',
      {
        duration: 1,
        opacity: 0,
        scale: 1.4,
        ease: 'power0.in',
      },
      '<0.2',
    )

    .from(
      '.line-popup .main-box .title-box div',
      {
        duration: 1,
        opacity: 0,
        x: '-110',
        stagger: 0.13,
      },
      '<0.45',
    )
    .from(
      '.line-popup .main-box .main-content-box .list div',
      {
        duration: 1,
        opacity: 0,
        x: '-90',
        stagger: 0.1,
      },
      '<0.2',
    )
    .from(
      '.line-popup .main-box .main-content-box .btn',
      {
        duration: 1,
        opacity: 0,
        y: '40',
      },
      '<0.9',
    )
    .from(
      '.line-popup .main-box .line-img img',
      {
        duration: 1,
        opacity: 0,
        x: '-90',
      },
      '<-0.35',
    )
}

const closeWithAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('close') // 動畫結束後再真正關閉
    },
  })

  tl.to('.line-popup', {
    maskPosition: '200% 0',
    duration: 1.2,
    ease: 'cubic-bezier(0.64, 0.03, 0.07, 0.97)',
  })
}

// 初始化時先呼叫一次
onMounted(async () => {
  imgAni()
})
</script>

<style scoped></style>
