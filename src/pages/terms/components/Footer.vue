<template>
  <section class="pt-3 ">
    <div class="container mt-5" >
      <div class="row">
        <div class="col-md-2 col-12 ">
          <h6 class="text-left">About us</h6>
          <ul class="p-0">
            <li class="list text-left">
              <router-link to="/company">
                <a class="text-dark" href="#">Company</a>
              </router-link>
            </li>
            <li class="list text-left">
              <router-link to="/career">
                <a class="text-dark" href="#">Career</a>
              </router-link>
            </li>
            <li class="list text-left">
              <router-link to="/business">
                <a class="text-dark" href="#">Business</a>
              </router-link>
            </li>
            <li class="list text-left">
              <router-link to="/investment">
                <a class="text-dark" href="#">Investment</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-12 ">
          <h6 class="text-left">Get help</h6>
          <ul class="p-0">
            <li class="">
              <router-link to="/newcomer-intro">
                <a class="text-dark" href="#">Why Cycbis</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-12">
          <h6 class="text-left">Helper</h6>
          <ul class="p-0">
            <li class="">
              <router-link to="/helper-intro">
                <a class="text-dark" href="#">Why Cycbis helper</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-12 ">
          <h6 class="text-left">Support</h6>
          <ul class="p-0">
            <li class="">
              <a class="text-dark" href="#">Contact us</a>
            </li>
            <li class="">
              <router-link to="/learn">
                <a class="text-dark" href="#">Learn</a>
              </router-link>
            </li>
            <li class="">
              <router-link to="/privacy">
                <a class="text-dark" href="#">Privacy Policy</a>
              </router-link>
            </li>
            <li class="">
              <router-link to="/terms">
                <a class="text-dark" href="#">Terms of Service</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-12">
          <h6 class="text-left">Download App</h6>
          <div class="col-12 text-center">
            <div class="row">
              <div class="justify-content-center"><a class="text-dark" href="https://apps.apple.com/us/app/cycbis/id1466447486">
                <img class="img-fluid float-right mr-3" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/download/Download_on_the_App_Store.png" alt="" width="100">
                <p class="mr-3">Apple store</p></a></div>
              <div class=" justify-content-center" @click="dialogVisible = true"><a class="text-dark" href="#">
                <img class="img-fluid float-left mr-3" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/download/google_Store_Badge.png" alt="" width="105">
                <p class="mr-3">Google play</p></a></div>
            </div>
          </div>
        </div>
        <div class="col-md-2 col-12 ">
          <h6 class="text-left">Follow us</h6>
          <ul class="p-0">
            <li class="text-light" ><a class="text-dark" href="https://fb.me/cycbis">Facebook</a></li>
            <li class="text-light" ><a class="text-dark" href="https://www.instagram.com/cycbis/">Instagram</a></li>
            <li class="text-light" ><a class="text-dark" href="https://twitter.com/cycbis">Twitter</a></li>
            <li class="text-light" ><a class="text-dark" href="#">WeChat</a></li>
          </ul>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="row justify-content-end py-2">
        <div class="col-md-3">
          <p class=""><small>@2019 Corsshelper Inc.</small></p>
        </div>
      </div>
    </div>

    <el-dialog
      title="Notification"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>We're sorry, Android is currently unavailable.</span>
      <span slot="footer" class="dialog-footer">

            <el-button type="primary" @click="dialogVisible = false">Ok</el-button>
          </span>
    </el-dialog>


  </section>
</template>

<script>
    export default {
        name: "footer",
      data() {
        return {
          dialogVisible: false
        };
      },
      methods: {
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
      }
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
