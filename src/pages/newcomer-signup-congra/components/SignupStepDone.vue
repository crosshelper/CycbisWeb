<template>
  <section class="pb-5">
    <div class="row justify-content-between">
      <div class="col-3 ml-5 mt-2">
        <router-link to="/">
          <b-img v-bind="mainProps" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisLogo/cb_logo.png" alt="Center image"></b-img>
        </router-link>
      </div>
      <div class="col-3 text-right mr-5 mt-2">
        <el-button type="text">Or become a helper</el-button>
      </div>
    </div>

    <!-- Section Content -->
    <section class="congraMT" >
      <div class="container">
        <div class="row">
          <div class="col-8 g-line-height-1_3 g-mb-20">
            <h1 class="g-font-size-20">Congratulations! Your are ready to start. Let's download the app.</h1>
            <div class="row ml-1">
              <div class=""><a class="text-dark" href="#"><img class="img-fluid float-right mr-3" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/download/Download_on_the_App_Store.png" alt="" width="150"><p class="mr-3">Apple store</p></a></div>
              <div class=""><a class="text-dark" href="#"><img class="img-fluid float-left mr-3" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/download/google_Store_Badge.png" alt="" width="155"><p class="mr-3">Google play</p></a></div>
            </div>
          </div>
          <div class="cl-6 bg-primary">
            <div class="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Section Content -->
  </section>
</template>

<script>
    export default {
      name: "signup-step-done",
      data () {
        return {
          mainProps: { width: 65, height: 65, class: 'm1' },
          name: "signup-step-two"
        }
      }
    }
</script>

<style scoped>
.congraMT{
  margin-top: 10%;
}
</style>
