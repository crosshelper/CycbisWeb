<template>
  <div>
    <investment-header></investment-header>
    <investment-section></investment-section>
    <investment-footer></investment-footer>
  </div>
</template>

<script>
  import InvestmentHeader from './components/Header'
  import InvestmentFooter from './components/Footer'
  import InvestmentSection from './components/Section'
    export default {
        name: "investment",
      components:{
        InvestmentHeader,
        InvestmentFooter,
        InvestmentSection
      }
    }
</script>

<style scoped>

</style>
