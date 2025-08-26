<template>
  <!-- 結果 -->
  <div class="loan-view-result">
    <ul class="loan-result-col">
      <div class="left-box">
        <li class="loan-result-li">
          <div>訂　金　：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ displayDeposit }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>簽 約 金 ：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.sign }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>開 工 款 ：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.kickOff }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>結構完成：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.license }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>

        <li class="loan-result-li">
          <div>交 屋 款 ：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.delivery }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>自備金額：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.ownMoney }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
        <li class="loan-result-li">
          <div>貸款金額：</div>
          <div class="nember-box">
            <p class="loan-result-number">{{ state.loanMoney }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue'
import { useLoanStore } from '@/stores/loanStore'
import { storeToRefs } from 'pinia'
import '@/assets/scss/live/loan-result.scss'

const loanStore = useLoanStore()
const is_Allowance = ref(false)

const { state } = storeToRefs(loanStore)

watch(
  () => [state.value.allowancePeriodCost],
  () => {
    if (Number(state.value.allowancePeriodCost.replace(',', '')) > 0) {
      is_Allowance.value = true
    } else {
      is_Allowance.value = false
    }
  },
)
const displayDeposit = computed(() => {
  // total 為 0 或清空時顯示空，否則顯示 10 萬
  return loanStore.state.ownMoney === '' ? '' : 10
})
// const all = computed(() => {
//   return is_Allowance.value
//     ? state.value.afterAllowancePeriodCost
//     : Number(state.value.monthlyCost.replace(',', ''))
// })

onMounted(() => {
  loanStore.cleanAll()
})
</script>

<style scoped></style>
