<template>
  <ViewFixed id="life-view">
    <div class="life-box">
      <div class="left-box">
        <div class="title-box">
          <div class="en">LIFE STYLE</div>
          <div class="big-zh">瞬移生活，時尚坐標</div>
          <div class="zh">3商圈，繁靜一脈即達</div>
        </div>
        <div class="content">
          北平、中清、崇德三大生活圈合圍，<br />
          從熟悉日常、精品消費到商務往來，<br />
          無需奔波，即可瞬移日常所需；<br />
          選擇生活場景，也選擇節奏美學。<br />
          真正時尚，不張揚，而自成路徑。
        </div>
        <div class="tab-item-box">
          <div>
            <div class="life-list-squre"></div>
            <div class="text">公園綠意<span>GREEN PARK</span></div>
          </div>

          <div>
            <div class="life-list-squre"></div>
            <div class="text">優質學區<span>CULTURAL DISTRICT</span></div>
          </div>

          <div>
            <div class="life-list-squre"></div>
            <div class="text">繁華商圈<span>SHOPPING DISTRICT</span></div>
          </div>

          <div>
            <div class="life-list-squre"></div>
            <div class="text">交通樞紐<span>RAPID TRANSIT</span></div>
          </div>

          <div>
            <div class="life-list-squre"></div>
            <div class="text">重大建設<span>MAJOR CONSTRUCTION</span></div>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="img-box">
          <img src="../../../assets/img/life/life_main.webp" alt="" srcset="" />
        </div>
      </div>
    </div>
  </ViewFixed>
</template>

<script setup lang="ts">
import '@/assets/scss/metro/_life.scss'

import { RouterView } from 'vue-router'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
</script>

<style lang="scss">
#life-view {
  background-color: #e2e2e3;
  width: 100%;
  height: 100svh;
  overflow: hidden;
}
</style>
