<template>
  <div class="floor-detail-wrapper">
    <div class="floor-detail" ref="detailEl">
      <div class="overlay-close" @click="$emit('close')"></div>
      <img
        src="../../../assets/img/building/compass.png"
        alt=""
        class="compass"
        v-if="props.floor !== 'B4' && props.floor !== 'R1'"
      />
      <div class="main-box">
        <div class="decorate">FLOOR PLAN</div>
        <div class="left-box">
          <img :src="currentFloor.textImg" class="floor-text-img" />
          <div
            class="camera-box top-camera"
            @click="showCompass = true"
            v-if="props.floor === '3F-12F'"
          >
            <div class="text">View</div>
          </div>
        </div>
        <div class="right-box">
          <div class="text-f1-1" v-if="props.floor === '1F'">40米文心路四段</div>
          <div class="text-f1-2" v-if="props.floor === '1F'">10米文昌東二街</div>
          <ScaleDrag :init="initXY" :max-ratio="2">
            <div class="img-box">
              <img
                :src="currentFloor.img"
                :alt="floor"
                class="floor-plan-img"
                :class="[currentFloor.className]"
              />
              <div
                class="btn-3f-12f btn-3f-12f-a"
                v-if="props.floor === '3F-12F'"
                @click="openFurniture('3F-12F-A')"
              >
                <img src="../../../assets/img/building/a.png" alt="" srcset="" />
              </div>

              <div
                class="btn-2f btn-2f-a"
                v-if="props.floor === '2F'"
                @click="openFurniture2f('2F-A')"
              >
                <img src="../../../assets/img/building/a.png" alt="" srcset="" />
              </div>

              <div
                class="btn-3f-12f btn-3f-12f-b"
                v-if="props.floor === '3F-12F'"
                @click="openFurniture('3F-12F-B')"
              >
                <img src="../../../assets/img/building/b.png" alt="" srcset="" />
              </div>

              <div
                class="btn-2f btn-2f-b"
                v-if="props.floor === '2F'"
                @click="openFurniture2f('2F-B')"
              >
                <img src="../../../assets/img/building/b.png" alt="" srcset="" />
              </div>

              <div
                class="btn-3f-12f btn-3f-12f-c"
                v-if="props.floor === '3F-12F'"
                @click="openFurniture('3F-12F-C')"
              >
                <img src="../../../assets/img/building/c.png" alt="" srcset="" />
              </div>

              <div
                class="btn-2f btn-2f-c"
                v-if="props.floor === '2F'"
                @click="openFurniture2f('2F-C')"
              >
                <img src="../../../assets/img/building/c.png" alt="" srcset="" />
              </div>

              <div
                class="btn-3f-12f btn-3f-12f-d"
                v-if="props.floor === '3F-12F'"
                @click="openFurniture('3F-12F-D')"
              >
                <img src="../../../assets/img/building/d.png" alt="" srcset="" />
              </div>

              <div
                class="btn-2f btn-2f-d"
                v-if="props.floor === '2F'"
                @click="openFurniture2f('2F-D')"
              >
                <img src="../../../assets/img/building/d.png" alt="" srcset="" />
              </div>

              <div class="btn-3f-12f btn-1mf" v-if="props.floor === '1MF'" @click="show1MF = true">
                <img class="point-img" src="../../../assets/img/life/point.svg" alt="" />
              </div>

              <div
                class="btn-3f-12f btn-1mf-2"
                v-if="props.floor === '1MF'"
                @click="show1MF2 = true"
              >
                <img class="point-img" src="../../../assets/img/life/point.svg" alt="" />
              </div>

              <div class="btn-3f-12f btn-1f-1" v-if="props.floor === '1F'" @click="show1F1 = true">
                <img class="point-img" src="../../../assets/img/life/point.svg" alt="" />
              </div>

              <div class="btn-3f-12f btn-1f-2" v-if="props.floor === '1F'" @click="show1F2 = true">
                <img class="point-img" src="../../../assets/img/life/point.svg" alt="" />
              </div>

              <div class="btn-3f-12f btn-1f-3" v-if="props.floor === '1F'" @click="show1F3 = true">
                <img class="point-img" src="../../../assets/img/life/point.svg" alt="" />
              </div>

              <div class="btn-3f-12f btn-r1" v-if="props.floor === 'R1'" @click="showR1 = true">
                <img class="point-img" src="../../../assets/img/life/point.svg" alt="" />
              </div>
            </div>
          </ScaleDrag>
        </div>
        <div class="detail-hint">實際家具配置及平面與建材依買賣契約書為準</div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <FloorCompass v-if="showCompass" @close="showCompass = false" />
    </transition>

    <!-- 家具配置圖 3f-12f -->
    <FloorFurniture v-if="showFurniture" :floor="furnitureFloor" @close="showFurniture = false" />

    <!-- 家具配置圖 2f -->
    <FloorFurniture2f
      v-if="showFurniture2f"
      :floor="furnitureFloor2f"
      @close="showFurniture2f = false"
    />

    <transition name="fade" mode="out-in">
      <div class="floor-mf1-box" v-if="show1MF" @click="show1MF = false">
        <div class="img-box">
          <img src="../../../assets/img/building/LV_c05_002.webp" alt="LV_c05_002" srcset="" />
          <div class="hint">3D示意圖</div>
        </div>
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div class="floor-mf1-box floor-mf1-box2" v-if="show1MF2" @click="show1MF2 = false">
        <div class="img-box">
          <img src="../../../assets/img/building/LV_c06_004.webp" alt="LV_c06_004" srcset="" />
          <div class="hint">3D示意圖</div>
        </div>
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div class="floor-mf1-box floor-r1" v-if="showR1" @click="showR1 = false">
        <div class="img-box">
          <img src="../../../assets/img/building/RF_C01_004.webp" alt="RF_C01_004" srcset="" />
          <div class="hint">3D示意圖</div>
        </div>
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div class="floor-mf1-box floor-1f-1" v-if="show1F1" @click="show1F1 = false">
        <div class="img-box">
          <img src="../../../assets/img/building/1f-img4.webp" alt="1f-img4" srcset="" />
          <div class="hint">3D示意圖</div>
        </div>
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div class="floor-mf1-box floor-1f-2" v-if="show1F2" @click="show1F2 = false">
        <div class="img-box">
          <img src="../../../assets/img/building/1f-img1.webp" alt="1f-img1" srcset="" />
          <div class="hint">3D示意圖</div>
        </div>
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div class="floor-mf1-box floor-1f-3" v-if="show1F3">
        <Swiper :modules="[Navigation, EffectFade]" navigation :speed="800" :effect="'fade'">
          <div class="overlay-close" @click="show1F3 = false"></div>
          <SwiperSlide>
            <div class="img-box">
              <img src="../../../assets/img/building/1f-img3.webp" alt="1f-img3" srcset="" />
              <div class="hint">3D示意圖</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="img-box">
              <img src="../../../assets/img/building/1f-img2.webp" alt="1f-img2" srcset="" />
              <div class="hint">3D示意圖</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </transition>

    <FullScreen :forceBrownIcon="true" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import gsap from 'gsap'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import FloorCompass from '@/components/Floor/floorCompass/FloorCompass.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import FloorFurniture from '@/components/Floor/floorFurniture/FloorFurniture.vue'
import FloorFurniture2f from '@/components/Floor/floorFurniture2f/FloorFurniture2f.vue'

const props = defineProps<{ floor: string }>()
const showCompass = ref(false)
const show1MF = ref(false)
const show1MF2 = ref(false)
const showR1 = ref(false)
const show1F1 = ref(false)
const show1F2 = ref(false)
const show1F3 = ref(false)
const showFurniture = ref(false)
const showFurniture2f = ref(false)
const furnitureFloor = ref('') // 用來傳給 FloorFurniture 的樓層
const furnitureFloor2f = ref('') // 用來傳給 FloorFurniture2f 的樓層
const detailEl = ref<HTMLElement | null>(null)

// 所有樓層對應資料
const floorDetailMap: Record<string, { img: string; textImg: string; className: string }> = {
  '2F': {
    img: new URL('@/assets/img/building/2f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/2f_text.min.svg', import.meta.url).href,
    className: 'floor-2F',
  },
  '3F-12F': {
    img: new URL('@/assets/img/building/3f12f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/3f12f_text.min.svg', import.meta.url).href,
    className: 'floor-3F-12F',
  },
  '1MF': {
    img: new URL('@/assets/img/building/1mf.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/1mf_text.min.svg', import.meta.url).href,
    className: 'floor-1mf',
  },
  '1F': {
    img: new URL('@/assets/img/building/1f.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/1f_text.min.png', import.meta.url).href,
    className: 'floor-1f',
  },
  B1: {
    img: new URL('@/assets/img/building/b1.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b1_text.min.svg', import.meta.url).href,
    className: 'floor-B1',
  },
  B2: {
    img: new URL('@/assets/img/building/b2.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b2_text.min.svg', import.meta.url).href,
    className: 'floor-B2',
  },
  B3: {
    img: new URL('@/assets/img/building/b3.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b3_text.min.svg', import.meta.url).href,
    className: 'floor-B3',
  },
  B4: {
    img: new URL('@/assets/img/building/b4.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/b4_text.min.svg', import.meta.url).href,
    className: 'floor-B4',
  },
  R1: {
    img: new URL('@/assets/img/building/r1.webp', import.meta.url).href,
    textImg: new URL('@/assets/img/building/rf_text.min.svg', import.meta.url).href,
    className: 'floor-r1',
  },
}

function openFurniture(floor: string) {
  furnitureFloor.value = floor
  showFurniture.value = true
}

function openFurniture2f(floor: string) {
  furnitureFloor2f.value = floor
  showFurniture2f.value = true
}

const initXY = computed(() => {
  const screenWidth = window.innerWidth
  return {
    x: screenWidth < 1400 ? 200 : 400,
    y: 0,
  }
})
// 根據傳入樓層取資料
const currentFloor = computed(() => floorDetailMap[props.floor])

onMounted(() => {
  if (detailEl.value) {
    gsap.fromTo(detailEl.value, { opacity: 0 }, { opacity: 1, duration: 0.6 })
  }

  const tl = gsap.timeline({})
  tl.fromTo(
    '.building-view .floor-detail .main-box .left-box .floor-text-img,.camera-box',
    {
      autoAlpha: 0,
      y: 70,
    },
    { autoAlpha: 1, duration: 1, y: 0 },
  ).fromTo(
    '.building-view .floor-detail .main-box .right-box .imgBoxIn .img-box',
    {
      // autoAlpha: 0,
      y: 70,
    },
    { duration: 1, y: 0 },
    '<0.3',
  )
})

onBeforeUnmount(() => {
  if (detailEl.value) {
    gsap.to(detailEl.value, { opacity: 0, duration: 0.3, ease: 'power1.out' })
  }
})
</script>
