<template>
  <div class="life-fancybox">
    <div class="life-swiper">
      <Swiper
        :speed="1000"
        :slides-per-view="1"
        :loop="props.fancyItem.length > 1"
        :spaceBetween="25"
        :navigation="navigationOptions"
        :modules="[Navigation]"
        class="life-swiper-main"
      >
        <swiper-slide
          v-for="item in props.fancyItem"
          :key="item.image"
          class="life-swiper-item"
          @click="closeClick"
        >
          <img :src="item.image" :alt="item.txt" />
          <div class="life-swiper-text">
            <p>{{ item.txt }}</p>
            <div class="life-swiper-line"></div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>

    <div class="prev" v-if="hasMultiple">
      <img src="../../assets/img/other/left_arrow.svg" alt="上一張" />
    </div>
    <div class="next" v-if="hasMultiple">
      <img src="../../assets/img/other/right_arrow.svg" alt="下一張" />
    </div>

    <!-- 關閉按鈕保留也可點 -->
    <div class="life-fancy-button" @click="closeClick" aria-label="關閉">
      <img src="../../assets/img/other/X.svg" alt="關閉" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import '@/assets/scss/metro/_life-fancybox.scss'

const props = defineProps(['fancyItem'])

const emits = defineEmits(['show-fancybox'])
const hasMultiple = computed(() => props.fancyItem.length > 1)

const navigationOptions = computed(() =>
  hasMultiple.value ? { prevEl: '.prev', nextEl: '.next' } : false,
)
const closeClick = () => {
  emits('show-fancybox')
}
</script>

<style scoped></style>
