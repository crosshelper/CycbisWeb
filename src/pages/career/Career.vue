<template>
  <div>
    <career-header></career-header>
    <career-section></career-section>
    <career-section-two></career-section-two>
    <career-footer></career-footer>
  </div>
</template>

<script>
  import CareerHeader from './components/Header'
  import CareerFooter from './components/Footer'
  import CareerSection from './components/Section'
  import CareerSectionTwo from './components/SectionTwo'
    export default {
        name: "career",
      components:{
        CareerHeader,
        CareerFooter,
        CareerSection,
        CareerSectionTwo
      }
    }
</script>

<style scoped>

</style>
