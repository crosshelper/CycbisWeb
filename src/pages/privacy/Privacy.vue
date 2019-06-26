<template>
  <div>
    <privacy-header></privacy-header>
    <privacy-section></privacy-section>
    <privacy-footer></privacy-footer>
  </div>
</template>

<script>
  import PrivacyHeader from './components/Header'
  import PrivacyFooter from './components/Footer'
  import PrivacySection from './components/Section'
    export default {
        name: "privacy.vue",
      components: {
        PrivacyHeader,
        PrivacyFooter,
        PrivacySection
      }
    }
</script>

<style scoped>

</style>
