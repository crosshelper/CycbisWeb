<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="ml-sm-5">
        <b-img v-bind="mainProps" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisLogo/cb_logo.png" alt="Center image"></b-img>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Newcomer</b-nav-item>
          <b-nav-item href="#">Helper</b-nav-item>
          <b-nav-item-dropdown text="Our company">
            <b-dropdown-item href="#">About us</b-dropdown-item>
            <b-dropdown-item href="#">Investment</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="mr-sm-5">Sign Up</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data(){
    return{
      mainProps: { width: 65, height: 65, class: 'm1' }
    }
  }
}
</script>

<style scoped>

</style>
