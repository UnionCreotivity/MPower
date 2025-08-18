<template>
  <section class="build-origin">
    <div class="top-box">
      <div class="left">
        <div class="icon">
          <img src="../../../assets/img/metier/build-origin/bear.webp" alt="" srcset="" />
        </div>
        <div class="title-box">
          <div class="title">真正好住懂住<br />大熊擇學昇華</div>
          <div class="en-title">
            BUILT FROM<br />
            CONSTRUCTION
          </div>
        </div>
      </div>
      <div class="right">
        精華擇地學，不只便捷更是稀有。<br />
        延續14期繁華，又一精選地段。<br />
        公設美學輕奢為上，精準格局風光為美。<br />
        近30年築跡，ESG永續思維。<br />
        大熊建築昇華，為少數知者打造藏家。
      </div>
    </div>
    <div class="bottom-box">
      <div class="img-box">
        <img src="../../../assets/img/metier/build-origin/1.webp" alt="" srcset="" />
      </div>
    </div>
    <FullScreen :forceWhiteIcon="true" />
  </section>
</template>
<script setup lang="ts">
import '@/assets/scss/metier/_build-origin.scss'
import FullScreen from '@/components/full-screen/FullScreen.vue'
</script>
