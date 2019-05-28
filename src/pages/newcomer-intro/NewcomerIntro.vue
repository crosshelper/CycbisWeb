<template>
    <div>
      <newcomer-intro-header></newcomer-intro-header>
      <newcomer-section></newcomer-section>
      <newcomer-section-one></newcomer-section-one>
      <newcomer-section-three></newcomer-section-three>
      <newcomer-intro-footer></newcomer-intro-footer>
    </div>
</template>

<script>
  import NewcomerIntroHeader from './components/Header'
  import NewcomerIntroFooter from './components/Footer'
  import NewcomerSectionOne from './components/SectionOne'
  import NewcomerSectionThree from './components/SectionThree'
  import NewcomerSection from './components/Section'
    export default {
        name: "newcomer-intro",
      components: {
        NewcomerIntroHeader,
        NewcomerIntroFooter,
        NewcomerSectionOne,
        NewcomerSectionThree,
        NewcomerSection

      }
    }
</script>

<style scoped>

</style>
