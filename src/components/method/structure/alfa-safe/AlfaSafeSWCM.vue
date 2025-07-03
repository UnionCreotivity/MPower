<template>
  <div class="method-content-box">
    <div class="left-box">
      <img
        class="method-img"
        src="../../../../assets/img/method/structure/as_1.webp"
        alt=""
        srcset=""
      />
    </div>
    <div class="right-box">
      <img class="alfa" src="../../../../assets/img/method/alfa.svg" alt="" />
      <div class="title-box">ALFA SAFE 系統牆工法</div>
      <div class="content-box">
        <div class="content">
          牆雖屬次結構，但也是建築防震之第二道重要防線。
          牆體鋼筋間距、厚度需定位綁紮，才能發揮牆體的抗 剪力效果。「Alfa
          Safe系統牆」鋼筋的規劃設計與 施工，於牆體端部與轉角處，皆採用一體式牆箍專利
          結構工法，使牆筋綁紮更加確實堅固、鋼筋間距整齊
          一致、保護層厚度足夠，確保牆體達到防裂、防水且
          抗剪力更佳，總體提升房屋的結構安全與抗震力。
        </div>
      </div>
      <div class="arrow-box">
        <div class="prev" @click="$emit('prev')">
          <img src="../../../../assets/img/prev.svg" alt="prev" />
        </div>
        <div class="next" @click="$emit('next')">
          <img src="../../../../assets/img/next.svg" alt="next" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const initGsap = () => {
  const tl = gsap.timeline({ id: 'method' })

  tl.fromTo(
    '.method-img',
    {
      filter: 'brightness(3)',
      opacity: 0,
    },
    {
      filter: 'brightness(1)',
      opacity: 1,
      duration: 1,
    },
  )
    .from(
      '.method-content-box .right-box .alfa,.method-content-box .right-box .title-box, .method-content-box .right-box .content-box,.method-content-box .right-box .content-box ul',
      {
        filter: 'blur(8px)',
        opacity: 0,
        ease: 'power1.inOut',
        stagger: 0.2,
        duration: 1,
      },
      '<0.3',
    )
    .from(
      '#method-view .arrow-box',
      {
        filter: 'blur(8px)',
        opacity: 0,
        ease: 'power1.inOut',
        stagger: 0.2,
        duration: 1,
      },
      '<0.8',
    )
}

onMounted(() => {
  initGsap()
})
</script>
