<template>
  <section>
    <b-navbar toggleable="lg" type="light" class="bg-white">
      <div class="ml-sm-5">
        <router-link to="/">
          <b-img v-bind="mainProps" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/CycbisWebLogo.png" alt="Center image"></b-img>
        </router-link>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="text-primary">
            <router-link to="/newcomer-intro">
              <div class="text-dark">Traveler</div>
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
          <b-nav-item-dropdown text="English"  right>
            <b-dropdown-item href="#">
              <router-link to="/">
                <div>English</div>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link to="/ch">
                <div>Chinese</div>
              </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <hr class="simple" color="#DCDFE6" />
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
  b-nav-item-dropdown{
    color: #1b1e21;
  }
</style>
