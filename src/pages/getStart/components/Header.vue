<template>
  <section>
    <b-navbar toggleable="lg" type="light">
      <div class="ml-sm-5">
        <router-link to="/">
          <b-img v-bind="mainProps" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/CycbisWebLogo.png" alt="Center image"></b-img>
        </router-link>
      </div>
      <h5 class="text-dark ml-auto mt-2">Download Apps</h5>
    </b-navbar>
  </section>
</template>

<script>
    export default {
        name: "header",
      data () {
        return {
          mainProps: { width: 115, height: 41, class: 'm1' }
        }
      }
    }
</script>

<style scoped>
  .simple{
    position: relative;
    bottom: 15px;
  }
</style>
