<template>
    <div>
      <company-header></company-header>
      <company-section></company-section>
      <company-section-two></company-section-two>
      <company-section-three></company-section-three>
      <company-section-four></company-section-four>
      <company-section-five></company-section-five>
      <company-section-six></company-section-six>
      <company-footer></company-footer>
    </div>
</template>

<script>
  import CompanyHeader from './components/Header'
  import CompanyFooter from './components/Footer'
  import CompanySection from './components/Section'
  import CompanySectionTwo from './components/SectionTwo'
  import CompanySectionThree from './components/SectionThree'
  import CompanySectionFour from './components/SectionFour'
  import CompanySectionFive from './components/SectionFive'
  import CompanySectionSix from './components/SectionSix'

    export default {
        name: "company",
      components: {
        CompanyHeader,
        CompanyFooter,
        CompanySection,
        CompanySectionTwo,
        CompanySectionThree,
        CompanySectionFour,
        CompanySectionFive,
        CompanySectionSix
      }
    }
</script>

<style scoped>

</style>
