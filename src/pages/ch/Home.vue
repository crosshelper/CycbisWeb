<template>
  <div>
    <home-header></home-header>
    <cycbis-intro></cycbis-intro>
    <section-two></section-two>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import CycbisIntro from './components/CycbisIntro'
import SectionTwo from './components/sectionTwo'
import HomeFooter from './components/Footer'

export default {
  name: 'ch',
  components: {
    HomeHeader,
    CycbisIntro,
    HomeFooter,
    SectionTwo
  }
}
</script>

<style scoped>
  .home {
    font-size: 50px;
  }
</style>
