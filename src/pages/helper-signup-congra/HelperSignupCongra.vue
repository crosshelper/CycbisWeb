<template>
  <div>
    <signup-done></signup-done>
    <signup-done-footer></signup-done-footer>
  </div>
</template>

<script>
  import SignupDoneFooter from './components/Footer'
  import SignupDone from './components/SignupStepDone'
    export default {
        name: "helper-signup-congra",
      components: {
        SignupDoneFooter,
        SignupDone
      }
    }
</script>

<style scoped>

</style>
