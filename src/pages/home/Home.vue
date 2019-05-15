<template>
  <div>
    <home-header></home-header>
    <router-link to="/signup">Sign Up</router-link>
    <test></test>
  </div>

</template>

<script>
import HomeHeader from './components/Header'
import Test from './components/test'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Test
  }
}
</script>

<style scoped>
  .home {
    font-size: 50px;
  }
</style>
