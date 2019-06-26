<template>
  <div>
    <investment-header></investment-header>
    <investment-section></investment-section>
    <investment-section-two></investment-section-two>
    <investment-section-three></investment-section-three>
    <investment-section-four></investment-section-four>
    <investment-section-end></investment-section-end>
    <investment-footer></investment-footer>
  </div>
</template>

<script>
  import InvestmentHeader from './components/Header'
  import InvestmentFooter from './components/Footer'
  import InvestmentSection from './components/Section'
  import InvestmentSectionTwo from './components/SectionTwo'
  import InvestmentSectionThree from './components/SectionThree'
  import InvestmentSectionFour from './components/SectionFour'
  import InvestmentSectionEnd from './components/SectionEnd'
    export default {
        name: "investment",
      components:{
        InvestmentHeader,
        InvestmentFooter,
        InvestmentSection,
        InvestmentSectionTwo,
        InvestmentSectionThree,
        InvestmentSectionFour,
        InvestmentSectionEnd
      }
    }
</script>

<style scoped>

</style>
