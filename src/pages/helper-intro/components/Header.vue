<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="bg-white">
      <div class="ml-sm-5">
        <router-link to="/">
          <b-img v-bind="mainProps" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisLogo/cb_logo.png" alt="Center image"></b-img>
        </router-link>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" class="text-primary">
            <router-link to="/newcomer-intro">
              <div class="text-dark">Newcomer</div>
            </router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/helper-intro">
              <div class="text-dark">Helper</div>
            </router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/company">
              <div class="text-dark">Company</div>
            </router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/learn">
              <div class="text-dark">Learn</div>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link to="/getStart">
            <el-button type="primary" class="mr-sm-5" round>Get Start</el-button>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <hr class="simple " color="#DCDFE6" />
  </div>
</template>

<script>
    export default {
        name: "header",
      data () {
        return {
          mainProps: { width: 65, height: 65, class: 'm1' }
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
