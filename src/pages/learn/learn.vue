<template>
  <section>
    <learn-header></learn-header>
    <learn-section></learn-section>
    <learnt-footer></learnt-footer>
  </section>
</template>

<script>
  import LearnHeader from './components/Header'
  import LearntFooter from './components/Footer'
  import LearnSection from './components/Section'
    export default {
        name: "learn",
      components: {
        LearnHeader,
        LearntFooter,
        LearnSection

      }
    }
</script>

<style scoped>
  .home {
    font-size: 50px;
  }
</style>
