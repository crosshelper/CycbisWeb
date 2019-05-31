<template>
    <div>
      <business-header></business-header>
      <business-section></business-section>
      <business-section-two></business-section-two>
      <business-section-three></business-section-three>
      <business-footer></business-footer>
    </div>
</template>

<script>
  import BusinessHeader from './components/Header'
  import BusinessFooter from './components/Footer'
  import BusinessSection from './components/Section'
  import BusinessSectionTwo from './components/SectionTwo'
  import BusinessSectionThree from './components/SectionThree'
    export default {
        name: "business",
      components:{
        BusinessHeader,
        BusinessFooter,
        BusinessSection,
        BusinessSectionTwo,
        BusinessSectionThree
      }
    }
</script>

<style scoped>

</style>
