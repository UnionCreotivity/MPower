<template>
  <section class="team-menu-view">
    <div class="title-box">
      <div class="zh">專業大師團隊｜</div>
      <div class="en">PROFESSIONAL TEAM</div>
    </div>

    <div class="menu-box">
      <div class="item">
        <img class="bg" src="../../../assets/img/team/bg.png" alt="bg" srcset="" />
        <div class="name-box">
          <div class="text">建築大師</div>
          <div class="name">
            <img src="../../../assets/img/team/one_name.png" alt="one_name" srcset="" />
          </div>
        </div>
        <div class="person-box">
          <img src="../../../assets/img/team/one_img.webp" alt="one_img" srcset="" />
        </div>
      </div>

      <div class="item">
        <img class="bg" src="../../../assets/img/team/bg.png" alt="bg" srcset="" />
        <div class="name-box">
          <div class="text">公設大師</div>
          <div class="name">
            <img src="../../../assets/img/team/two_name.png" alt="two_name" srcset="" />
          </div>
        </div>
        <div class="person-box person-box2">
          <img src="../../../assets/img/team/two_img.webp" alt="two_img" srcset="" />
        </div>
      </div>

      <div class="item">
        <img class="bg" src="../../../assets/img/team/bg.png" alt="bg" srcset="" />
        <div class="name-box">
          <div class="text">景觀大師</div>
          <div class="name">
            <img src="../../../assets/img/team/three_name.png" alt="three_name" srcset="" />
          </div>
        </div>
        <div class="person-box person-box3">
          <img src="../../../assets/img/team/three_img.webp" alt="three_img" srcset="" />
        </div>
      </div>
    </div>
    <FullScreen />
  </section>
</template>

<script setup lang="ts">
import '@/assets/scss/team/_team-menu.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
</script>

<style scoped></style>
