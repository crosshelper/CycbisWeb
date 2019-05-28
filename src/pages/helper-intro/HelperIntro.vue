<template>
  <section>
    <helper-intro-header></helper-intro-header>
    <helper-intro-section></helper-intro-section>
    <helper-intro-section-two></helper-intro-section-two>
    <helper-intro-footer></helper-intro-footer>
  </section>
</template>

<script>
  import HelperIntroHeader from './components/Header'
  import HelperIntroFooter from './components/Footer'
  import HelperIntroSection from './components/Section'
  import HelperIntroSectionTwo from './components/SectionTwo'
    export default {
        name: "helper-intro",
      components: {
        HelperIntroHeader,
        HelperIntroFooter,
        HelperIntroSection,
        HelperIntroSectionTwo
      }
    }
</script>

<style scoped>

</style>
