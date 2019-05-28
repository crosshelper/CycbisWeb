<template>
  <section>
    <support-header></support-header>
    <support-footer></support-footer>
  </section>
</template>

<script>
  import SupportHeader from './components/Header'
  import SupportFooter from './components/Footer'
    export default {
        name: "support",
      components: {
        SupportHeader,
        SupportFooter,
      }
    }
</script>

<style scoped>
  .home {
    font-size: 50px;
  }
</style>
