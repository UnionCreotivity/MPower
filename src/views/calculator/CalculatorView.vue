<template>
  <section class="loan-view">
    <Menu />
    <FullScreen />
    <div class="title-box">房貸試算</div>
    <div class="loan-view-container">
      <div class="loan-view-left">
        <div class="loan-view-bottom">
          <div class="loan-view-input-container">
            <div class="loan-input-item">
              <div>貸款年限</div>
              <div class="loan-input">
                <input
                  type="number"
                  id="cal-year"
                  min="0"
                  max="99"
                  v-model="loanInputModel.year"
                  @click.stop="checkClick('cal-year')"
                />
                <p>年</p>
              </div>
            </div>
            <div class="loan-input-item">
              <div>總金額</div>
              <div class="loan-input">
                <input
                  type="number"
                  id="cal-total"
                  min="0"
                  max="100000"
                  v-model="loanInputModel.total"
                  @click.stop="checkClick('cal-total')"
                />
                <p>萬元</p>
              </div>
            </div>

            <div class="loan-input-item">
              <div>年利率</div>
              <div class="loan-input">
                <input
                  type="text"
                  id="cal-ratio"
                  v-model="loanInputModel.ratio"
                  @click.stop="checkClick('cal-ratio')"
                />
                <p>%</p>
              </div>
            </div>
            <div class="loan-select-item">
              <div>寬限期</div>
              <div class="loan-select-main">
                <div class="loan-select-first">
                  <input
                    type="radio"
                    id="none"
                    value="none"
                    name="period"
                    v-model="loanInputModel.allowance"
                  />
                  <label for="none">無</label>
                </div>
                <div class="loan-select-second">
                  <input
                    type="radio"
                    id="three"
                    value="three"
                    name="period"
                    v-model="loanInputModel.allowance"
                  />
                  <label for="three">3年</label>
                </div>
              </div>
            </div>
            <div class="loan-click-item">
              <div class="loan-click-clear">
                <button type="button" @click.stop="cleanClick">清除</button>
              </div>
              <div class="loan-click-cal">
                <button type="button" @click.stop="submitClick">試算</button>
              </div>
            </div>
          </div>

          <LoanResult />
        </div>
      </div>
      <LoanCal
        @keyboard-click="keyboardClick"
        @keyboard-back-click="keyboardBackClick"
        @submit-click="submitClick"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import LoanCal from '@/components/loan/LoanCal.vue'
import { useLoanStore } from '@/stores/loanStore'
import LoanResult from '@/components/loan/LoanResult.vue'
import Menu from '../../components/menu/Menu.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import gsap from 'gsap'

import '@/assets/scss/live/loan.scss'

const nowInputId = ref('')

const loanInputModel = ref({
  year: 0,
  total: 0,
  ratio: '',
  allowance: 'none',
})

const tempRatio = ref('.')

const targetMap: Record<string, 'year' | 'total' | 'ratio'> = {
  'cal-year': 'year',
  'cal-total': 'total',
  'cal-ratio': 'ratio',
}

const loanStore = useLoanStore()

const checkClick = (id: string) => {
  nowInputId.value = id
}

const keyboardClick = (num: string) => {
  const key = targetMap[nowInputId.value]
  if (!key) return
  const inputNum = num
  if (key === 'ratio') {
    loanInputModel.value.ratio += inputNum
  } else {
    const modelTemp = loanInputModel.value[key].toString() + inputNum
    const total = Math.floor(Number(modelTemp))
    loanInputModel.value[key] = total
  }
}

const keyboardBackClick = () => {
  const key = targetMap[nowInputId.value]
  if (!key) return
  const temp = loanInputModel.value[key].toString()
  if (temp.length === 0) return

  if (key === 'ratio') {
    loanInputModel.value[key] = temp.slice(0, length - 1)
  } else {
    loanInputModel.value[key] = Math.floor(Number(temp.slice(0, length - 1)))
  }
}

const submitClick = () => {
  loanStore.loanCalc(loanInputModel.value)
}

const cleanClick = () => {
  loanInputModel.value = {
    year: 0,
    total: 0,
    ratio: '',
    allowance: 'none',
  }
  loanStore.cleanAll()
}

//年利率檢查
const testRatio = () => {
  const regex = /^\d*\.?\d{0,2}?$/
  const ratio = regex.test(loanInputModel.value.ratio)
  if (ratio) {
    tempRatio.value = loanInputModel.value.ratio
  } else {
    loanInputModel.value.ratio = tempRatio.value
  }
}

watch(
  () => [loanInputModel.value.total, loanInputModel.value.ratio, loanInputModel.value.year],
  () => {
    if (Number(loanInputModel.value.year) > 99) {
      loanInputModel.value.year = 99
    }
    if (Number(loanInputModel.value.total) > 100000) {
      loanInputModel.value.total = 100000
    }
    if (Number(loanInputModel.value.ratio) > 10) {
      loanInputModel.value.ratio = '10'
    }
    testRatio()
  },
)
onMounted(() => {
  const tl = gsap.timeline({ delay: 0.15 })
  tl.fromTo(
    '.loan-view',
    {
      maskPosition: '200% 0',
    },
    {
      maskPosition: '0% 0%',
      duration: 1.5,
      // ease: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
      ease: 'power1.inOut',
    },
  )
})
</script>

<style scoped></style>
