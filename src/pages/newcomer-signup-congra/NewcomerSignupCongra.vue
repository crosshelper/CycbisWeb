<template>
  <div>
    <signup-done></signup-done>
    <signup-done-footer></signup-done-footer>
  </div>
</template>

<script>
import SignupDone from './components/SignupStepDone'
import SignupDoneFooter from './components/Footer'

export default {
  name: "signup-congra",
    components: {
      SignupDone,
      SignupDoneFooter
  }
}
</script>

<style scoped>

</style>
