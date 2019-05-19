<template>
  <div>
    <get-start-header></get-start-header>
    <get-start-sign-up></get-start-sign-up>
    <get-start-footer></get-start-footer>
  </div>
</template>

<script>
import GetStartHeader from './components/GetStartHeader'
import GetStartFooter from './components/GetStartFooter'
import GetStartSignUp from './components/GetStartSignUp'

export default {
  name: "get-start",
  components: {
    GetStartHeader,
    GetStartFooter,
    GetStartSignUp
  }
}
</script>

<style scoped>

</style>
