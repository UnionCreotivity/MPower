import { ref } from 'vue'
import { defineStore } from 'pinia'

interface CalFormVal {
  year: number
  total: number
  ratio: string
  allowance: string
}

const toMoneyStyle = (num: number) => {
  return num.toLocaleString('zh-TW', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

export const useLoanStore = defineStore('loan', () => {
  const state = ref({
    deposit: '',
    sign: '',
    construction: '',
    license: '',
    delivery: '',
    ownMoney: '', //自備款
    loanMoney: '',
    monthlyCost: '',
    kickOff: '', //開工款
    tax: '', //契稅
    interestRepayment: '',
    allowancePeriodCost: '',
    afterAllowancePeriodCost: '',
    salesMan: '',
    allAllowance: '',
  })
  function loanCalc(val: CalFormVal) {

    //---------------- 拆款 ----------------

    //簽約金
    state.value.sign = toMoneyStyle(Math.ceil(val.total * 0.08 - 10))

    //開工款
    state.value.kickOff = toMoneyStyle(Math.ceil(val.total * 0.02))

    //結構完成(工程款)
    // state.value.construction = toMoneyStyle(Math.ceil(val.total * 0.05))

    //交屋款
    state.value.delivery = toMoneyStyle(Math.ceil(val.total * 0.05))



    //自備款
    state.value.ownMoney = toMoneyStyle(Math.ceil(val.total * 0.2))
    //貸款
    state.value.loanMoney = toMoneyStyle(Math.floor(val.total * 0.8))




    //算出來是結構完成款
    state.value.license = toMoneyStyle(
      Number(state.value.ownMoney) - //自備款
      Number(state.value.kickOff) -//開工款
      Number(100000) - //訂金
      // Number(state.value.construction) -//結構完成(工程款)
      Number(state.value.delivery) - //交屋款
      Number(state.value.sign)  //簽約金

    )

  }
  function cleanAll() {
    state.value.deposit = ''
    state.value.sign = ''
    state.value.construction = ''
    state.value.license = ''
    state.value.delivery = ''
    state.value.ownMoney = '' //自備款
    state.value.loanMoney = ''
    state.value.monthlyCost = ''
    state.value.kickOff = '' //開工款
    state.value.tax = '' //契稅
    state.value.interestRepayment = ''
    state.value.allowancePeriodCost = ''
    state.value.afterAllowancePeriodCost = ''
    state.value.salesMan = ''
    state.value.allAllowance = ''
  }

  return { state, loanCalc, cleanAll }
})
