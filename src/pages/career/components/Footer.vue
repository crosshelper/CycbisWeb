<template>
  <section class="pt-3 ">
    <div class="container mt-5" >
      <div class="row">
        <div class="col-md-2 col-12 ">
          <h6 class="text-left">About us</h6>
          <ul class="p-0">
            <li class="list text-left">
              <a class="text-dark" href="#">Company</a>
            </li>
            <li class="list text-left">
              <router-link to="/career">
                <a class="text-dark" href="#">Career</a>
              </router-link>
            </li>
            <li class="list text-left"><a class="text-dark" href="#">Business</a></li>
            <li class="list text-left"><a class="text-dark" href="#">Investment</a></li>
          </ul>
        </div>
        <div class="col-md-2 col-12 ">
          <h6 class="text-left">Get help</h6>
          <ul class="p-0">
            <li class=""><a class="text-dark" href="#">Sign up to get help</a></li>
          </ul>
        </div>
        <div class="col-md-2 col-12">
          <h6 class="text-left">Helper</h6>
          <ul class="p-0">
            <li class=""><a class="text-dark" href="#">Become helper</a></li>
            <li class=""><a class="text-dark" href="#">Why Crosshelper</a></li>
          </ul>
        </div>
        <div class="col-md-2 col-12 ">
          <h6 class="text-left">Support</h6>
          <ul class="p-0">
            <li class=""><a class="text-dark" href="#">Contact us</a></li>
          </ul>
        </div>
        <div class="col-md-2 col-12">
          <h6 class="text-left">Download App</h6>
          <div class="col-12 text-center">
            <div class="row">
              <div class=" justify-content-center"><a class="text-dark" href="#"><img class="img-fluid float-right mr-3" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/download/Download_on_the_App_Store.png" alt="" width="100"><p class="mr-3">Apple store</p></a></div>
              <div class=" justify-content-center"><a class="text-dark" href="#"><img class="img-fluid float-left mr-3" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/download/google_Store_Badge.png" alt="" width="105"><p class="mr-3">Google play</p></a></div>
            </div>
          </div>
        </div>
        <div class="col-md-2 col-12 ">
          <h6 class="text-left">Follow us</h6>
          <ul class="p-0">
            <li class="text-light" ><a class="text-dark" href="#">Sign up to get help</a></li>
          </ul>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="row justify-content-end py-2">
        <div class="col-md-3">
          <p class=""><small>@2019 Corsshelper Inc.</small></p>
        </div>
        <div class="col-md-1">
          <li class=""><small><a class="text-dark" href="#">Terms</a></small></li>
        </div>
        <div class="col-md-1">
          <li class=""><small><a class="text-dark" href="#">Privacy</a></small></li>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
  li{
    list-style-type:none;
  }
  section{
    background: #F4F4F4;
  }
</style>
