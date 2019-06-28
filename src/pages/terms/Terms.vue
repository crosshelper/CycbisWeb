<template>
  <div>
    <terms-header></terms-header>
    <terms-section></terms-section>
    <terms-footer></terms-footer>
  </div>
</template>

<script>
  import TermsHeader from './components/Header'
  import TermsFooter from './components/Footer'
  import TermsSection from './components/Section'

  export default {
        name: "terms",
      components:{
        TermsHeader,
        TermsFooter,
        TermsSection
      }
    }
</script>

<style scoped>

</style>
