<template>
  <div class="method-content-box">
    <div class="left-box">
      <video
        src="../../../assets/img/method/Wall.mp4"
        autoplay
        muted
        playsinline
        controls
        loop
        class="left-video"
      ></video>
    </div>
    <div class="right-box">
      <div class="title-box">外牆防水</div>
      <div class="content-box">
        <div class="content">
          在建築物外牆施作防水層，常用防水塗料、捲材或防水砂漿，有效阻絕雨水滲入牆體，防止牆面龜裂、滲水與室內潮濕，延長建物使用壽命並維護室內舒適度。施工時須注重基面清理、接縫處理及防水層厚度，確保防水效果完整無虞。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const initGsap = () => {
  const tl = gsap.timeline({})

  tl.fromTo(
    '#method-view .method-content-box .left-box',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
    },
  ).from(
    '#method-view .method-content-box .right-box div',
    {
      filter: 'blur(8px)',
      opacity: 0,
      ease: 'power1.inOut',
      stagger: 0.15,
      duration: 1,
    },
    '<0.15',
  )
}

onMounted(() => {
  initGsap()
})
</script>
