<template>
  <section class="loan-view">
    <Menu />
    <FullScreen />
    <div class="title-box">房貸試算</div>
    <div class="loan-view-container">
      <div class="loan-view-left">
        <div class="loan-view-bottom">
          <div class="loan-view-input-container">
            <div class="loan-input-item floor-select">
              <div>樓層戶別：</div>
              <div class="loan-input">
                <select name="household-type">
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="d">D</option>
                </select>
                <span>戶</span>
                <input
                  type="number"
                  id="floor"
                  min="0"
                  max="1000000000"
                  v-model="loanInputModel.floor"
                  @click.stop="checkClick('floor')"
                />
                <span>樓</span>
              </div>
            </div>

            <div class="loan-input-item">
              <div>戶別價格：</div>
              <div class="loan-input">
                <input
                  type="number"
                  id="householdPrice"
                  min="0"
                  max="1000000000"
                  v-model="loanInputModel.householdPrice"
                  @click.stop="checkClick('householdPrice')"
                />
                <p>萬元</p>
              </div>
            </div>

            <div class="loan-input-item">
              <div>車　位　：</div>
              <div class="loan-input">
                <input
                  type="number"
                  id="carAmount"
                  min="0"
                  max="100000"
                  v-model="loanInputModel.carAmount"
                  @click.stop="checkClick('carAmount')"
                />
              </div>
            </div>

            <div class="loan-input-item">
              <div>車位價格：</div>
              <div class="loan-input">
                <input
                  type="number"
                  id="carPrice"
                  min="0"
                  max="1000000000"
                  v-model="loanInputModel.carPrice"
                  @click.stop="checkClick('carPrice')"
                />
                <p>萬元</p>
              </div>
            </div>

            <div class="loan-input-item">
              <div>總 金 額 ：</div>
              <div class="loan-input">
                <input type="number" id="total" v-model="loanInputModel.total" readonly />
                <p>萬元</p>
              </div>
            </div>

            <div class="loan-click-item">
              <div class="loan-click-clear">
                <button type="button" @click.stop="cleanClick">清除</button>
              </div>
              <div class="loan-click-cal">
                <button type="button" @click.stop="submitClick">試算</button>
              </div>
              <div class="loan-click-print">
                <button type="button">列印</button>
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
import { ref, onMounted, watch } from 'vue'
import LoanCal from '@/components/loan/LoanCal.vue'
import { useLoanStore } from '@/stores/loanStore'
import LoanResult from '@/components/loan/LoanResult.vue'
import Menu from '../../components/menu/Menu.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import gsap from 'gsap'

import '@/assets/scss/live/loan.scss'

const nowInputId = ref('')

const loanInputModel = ref({
  floor: 0,
  householdPrice: 0,
  carAmount: 0,
  carPrice: 0,
  total: 0,
  allowance: 'none',
})

const targetMap: Record<string, 'floor' | 'householdPrice' | 'carAmount' | 'carPrice' | 'total'> = {
  floor: 'floor',
  householdPrice: 'householdPrice',
  carAmount: 'carAmount',
  carPrice: 'carPrice',
  total: 'total',
}

const loanStore = useLoanStore()

const checkClick = (id: string) => {
  nowInputId.value = id
}

const keyboardClick = (num: string) => {
  const key = targetMap[nowInputId.value]
  if (!key) return
  const inputNum = num

  const modelTemp = loanInputModel.value[key].toString() + inputNum
  const total = Math.floor(Number(modelTemp))
  loanInputModel.value[key] = total
}

const keyboardBackClick = () => {
  const key = targetMap[nowInputId.value]
  if (!key) return
  const temp = loanInputModel.value[key].toString()
  if (temp.length === 0) return

  loanInputModel.value[key] = Math.floor(Number(temp.slice(0, length - 1)))
}

const submitClick = () => {
  loanStore.loanCalc(loanInputModel.value)

  console.log(loanInputModel.value)
}

const cleanClick = () => {
  loanInputModel.value = {
    floor: 0,
    householdPrice: 0,
    carAmount: 0,
    carPrice: 0,
    total: 0, // total 為 0，LoanResult 顯示 deposit 就會是 0
    allowance: 'none',
  }
  loanStore.cleanAll() // store deposit 保持 100000
}

//總金額
watch(
  () => [loanInputModel.value.householdPrice, loanInputModel.value.carPrice],
  ([newHousehold, newCar]) => {
    loanInputModel.value.total = newHousehold + newCar
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
