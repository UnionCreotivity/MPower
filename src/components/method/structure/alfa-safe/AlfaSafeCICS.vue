<template>
  <div class="method-content-box">
    <div class="left-box">
      <img class="method-img" src="../../../../assets/img/method/test.webp" alt="" srcset="" />
    </div>
    <div class="right-box">
      <img class="alfa" src="../../../../assets/img/method/alfa.svg" alt="" />
      <div class="title-box">ALFA SAFE 柱中柱工法</div>
      <div class="content-box">
        <div class="content">
          「Alfa Safe柱中柱」採系統化設計與自動化加工， 鋼筋一體彎折、精準預製，取代傳統綁紮。<br />
          現場僅需組裝與灌漿，施工快速、品質穩定，有效 減少人力與誤差，全面提升結構安全與效率。
        </div>
        <ul>
          <li>
            規劃設計結構安全柱中柱系統加工面，<br />
            提升柱中柱設計安全強度。
          </li>
          <li>柱圍束鋼筋加工圖電腦精確彎折加工，<br />確保加工品質精準與施工性。</li>
          <li>工地落實柱中柱鋼筋依設計圍施工，<br />確保結構安全施工品質。</li>
        </ul>
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
