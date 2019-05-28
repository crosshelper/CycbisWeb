<template>
    <div>
      <company-header></company-header>
      <company-section></company-section>
      <company-footer></company-footer>
    </div>
</template>

<script>
  import CompanyHeader from './components/Header'
  import CompanyFooter from './components/Footer'
  import CompanySection from './components/Section'
    export default {
        name: "company",
      components: {
        CompanyHeader,
        CompanyFooter,
        CompanySection
      }
    }
</script>

<style scoped>

</style>
