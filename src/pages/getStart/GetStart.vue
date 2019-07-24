<template>
  <div class="bg-color">
    <get-start-header></get-start-header>
    <get-start-sign-up></get-start-sign-up>
  </div>
</template>

<script>
import GetStartSignUp from './components/SignUp'
import GetStartHeader from './components/Header'

export default {
  name: "get-start",
  components: {
    GetStartSignUp,
    GetStartHeader
  }
}
</script>

<style scoped>
.bg-color{
  background-color: #EBEBEB;
}
</style>
