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
    ownMoney: '',
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
    //月利率
    const monthRatio = Number(val.ratio) / 12 / 100
    let loanMonth = 0
    let periodMoney = 0
    let avgMonthRatio = 0
    let totalMoney = 0
    state.value.deposit = '10'
    //有寬限期
    if (val.allowance === 'three') {
      //-- 月數= (貸款年限*12)-(寬限年*12) --
      loanMonth = val.year * 12 - 3 * 12
      //-- 每月應付本息金額之平均攤還率 --
      avgMonthRatio =
        (Math.pow(1 + monthRatio, loanMonth) * monthRatio) /
        (Math.pow(1 + monthRatio, loanMonth) - 1)
      periodMoney = val.total * 0.5 * monthRatio * 10000
    } else {
      //無寬限期
      //-- 月數= 貸款年限*12 --
      loanMonth = val.year * 12
      //-- 每月應付本息金額之平均攤還率 --
      avgMonthRatio =
        (Math.pow(1 + monthRatio, loanMonth) * monthRatio) /
        (Math.pow(1 + monthRatio, loanMonth) - 1)
      totalMoney = Math.floor(val.total * 0.5 * avgMonthRatio * 10000 * loanMonth)
    }
    //---------------- 拆款 ----------------

    //簽約金
    state.value.sign = toMoneyStyle(Math.ceil(val.total * 0.07 - 10))
    //1樓底板
    // this.firstFloor = toMoneyStyle(Math.ceil(val.total * 0.01))
    //8樓底板
    // this.eighthFloor = toMoneyStyle(Math.ceil(val.total * 0.01))
    //16樓底板
    // this.sixteenThFloor = toMoneyStyle(Math.ceil(val.total * 0.01))
    //開工款
    state.value.kickOff = toMoneyStyle(Math.ceil(val.total * 0.03))
    //結構完成(工程款)
    state.value.construction = toMoneyStyle(Math.ceil(val.total * 0.15))
    //契稅
    // state.value.tax = toMoneyStyle(Math.ceil(val.total * 0.1))

    // //契稅
    // state.value.tax = toMoneyStyle(Math.ceil(val.total * 0.2))
    // //結構完成(工程款)
    // // state.value.construction = toMoneyStyle(Math.ceil(val.total * 0.1))

    //交屋款
    state.value.delivery = toMoneyStyle(Math.ceil(val.total * 0.05))

    //---------------- 拆款 END ----------------
    //自備款
    // state.value.ownMoney = toMoneyStyle(Math.ceil(val.total * 0.5))
    state.value.ownMoney = toMoneyStyle(Math.ceil(val.total * 0.5))
    //貸款
    state.value.loanMoney = toMoneyStyle(Math.floor(val.total * 0.5))

    //契稅
    state.value.tax = toMoneyStyle(
      Math.ceil(val.total * 0.5) -
        10 -
        Math.ceil(val.total * 0.07 - 10) -
        Math.ceil(val.total * 0.03) -
        Math.ceil(val.total * 0.15) -
        Math.ceil(val.total * 0.05),
    )
    // //結構完成(工程款)
    // state.value.construction = toMoneyStyle(
    //   Math.ceil(val.total * 0.5) -
    //     10 -
    //     Math.ceil(val.total * 0.07 - 10) -
    //     Math.ceil(val.total * 0.03) -
    //     Math.ceil(val.total * 0.2) -
    //     Math.ceil(val.total * 0.05),
    // )

    //使照申請 自備款減去拆款後的值當作使照申請
    state.value.license = toMoneyStyle(
      Number(state.value.ownMoney) -
        Number(state.value.deposit) -
        Number(state.value.sign) -
        Number(state.value.construction) -
        Number(state.value.delivery) -
        Number(state.value.kickOff) -
        Number(state.value.tax),
    )
    //本利攤還
    state.value.monthlyCost = toMoneyStyle(Math.floor(val.total * 0.5 * avgMonthRatio * 10000))
    //還息金額
    state.value.interestRepayment = toMoneyStyle((totalMoney - val.total * 0.5 * 10000) / loanMonth)
    //寬限期
    state.value.allowancePeriodCost = toMoneyStyle(Math.floor(periodMoney))
    //寬限期之後
    state.value.afterAllowancePeriodCost = toMoneyStyle(
      Math.floor(val.total * 0.5 * avgMonthRatio * 10000),
    )
  }
  function cleanAll() {
    state.value.deposit = ''
    state.value.sign = ''
    state.value.construction = ''
    state.value.license = ''
    state.value.delivery = ''
    state.value.ownMoney = ''
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
