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
          <div
            v-for="life in lifeList"
            :key="life.key"
            @click.stop="handleTag(life.key)"
            :class="tag === life.key ? 'active' : ''"
          >
            <div class="life-list-squre"></div>
            <div class="text">
              {{ life.zhName }}<span>{{ life.enName }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="img-box">
          <ScaleDrag :init="initXY" :max-ratio="2">
            <img src="../../../assets/img/life/life_main.webp" alt="" srcset="" />
            <div
              class="life-view-point"
              v-for="point in lifeData"
              :key="point.id"
              :class="[point.className, tag === point.tag ? 'active' : '']"
            >
              <div class="radiation">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
              <img class="point-img" src="../../../assets/img/life/point.png" alt="" />
            </div>
          </ScaleDrag>
        </div>
      </div>
    </div>
  </ViewFixed>
</template>

<script setup lang="ts">
import '@/assets/scss/metro/_life.scss'

import { ref, computed } from 'vue'
import ViewFixed from '@/components/view-fixed/ViewFixed.vue'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import { lifeData } from './LifeData'

const lifeList = [
  {
    key: 'green-park',
    zhName: '公園綠意',
    enName: 'GREEN PARK',
  },
  {
    key: 'cultural-district',
    zhName: '優質學區',
    enName: 'CULTURAL DISTRICT',
  },
  {
    key: 'shopping-district',
    zhName: '繁華商圈',
    enName: 'SHOPPING DISTRICT',
  },
  {
    key: 'rapid-transit',
    zhName: '交通樞紐',
    enName: 'RAPID TRANSIT',
  },
  {
    key: 'major-construction',
    zhName: '重大建設',
    enName: 'MAJOR CONSTRUCTION',
  },
]

const tag = ref('')

const handleTag = (val: string) => {
  tag.value = val
}

const initXY = computed(() => {
  return window.innerWidth > 1400 ? { x: 300, y: -200 } : { x: 100, y: -100 }
})
</script>

<style lang="scss">
#life-view {
  background-color: #e2e2e3;
  width: 100%;
  height: 100svh;
  overflow: hidden;
}
</style>
