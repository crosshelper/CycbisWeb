<template>
  <div class="">
    <div class="container pt-4 pb-5" id="signup">
      <div class="mt-2 text-center justify-content-center">
        <div>
          <div class="">
            <h3>Get help right now</h3>
          </div>
          <div class="row mt-md-4 justify-content-center">

            <div class="mr-md-5 mt-3 col-md-2">
              <img class="" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisLogo/CycbisIcon.png" alt="" width="105">
              <h5 class="text-dark mt-2">Cycbis</h5>
            </div>

              <div class="mr-md-5 mt-md-5 mt-2 col-md-2"><a class="" href="https://apps.apple.com/us/app/cycbis/id1466447486">
                <img class="" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/download/Download_on_the_App_Store.png" alt="" width="120">
                <h5 class="text-dark">Apple store</h5></a>
              </div>

            <div class="mr-md-5 mt-md-5 mt-2 col-md-2" @click="dialogVisible = true"><a class="" href="#">
                <img class="" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/download/google_Store_Badge.png" alt="" width="125">
                <h5 class="text-dark">Google play</h5></a>
            </div>
          </div>
          <h5 class="my-4 ml-md-3">Find lovable local helper solve your problem.</h5>
        </div>

        <hr class="simple" color="#DCDFE6" />

        <div class="mt-4">
          <div>
            <div>
              <div class="">
                <h3>Become a helper</h3>
              </div>
              <div class="row mt-md-4 justify-content-center">

                <div class="mr-md-5 mt-3 col-md-2">
                  <img class="" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisLogo/CycbisProIcon.png" alt="" width="105">
                  <h5 class="text-dark mt-2">Cycbis pro</h5>
                </div>

                <div class="mr-md-5 mt-md-5 mt-2 col-md-2"><a class="" href="https://apps.apple.com/us/app/cycbis-pro/id1467813234">
                  <img class="" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/download/Download_on_the_App_Store.png" alt="" width="120">
                  <h5 class="text-dark">Apple store</h5></a>
                </div>

                <div class="mr-md-5 mt-md-5 mt-2 col-md-2" @click="dialogVisible = true"><a class="" href="#">
                  <img class="" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/download/google_Store_Badge.png" alt="" width="125">
                  <h5 class="text-dark">Google play</h5></a>
                </div>
              </div>
              <h5 class="my-3 ml-md-3">Earn money up tp $1400 each week.</h5>
            </div>
          </div>
        </div>

      </div>

      <div class="text-center pt-5">
        <router-link to="/">
          <el-button type="primary" round>Back to home</el-button>
        </router-link>
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
  </div>
</template>
<script>
    export default {
      name: "get-start-sign-up",
      data() {
        return {
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://s3-us-west-1.amazonaws.com/image.cycbis.com/Test/tokyo05-2-1447803.jpg',
          currentDate: new Date(),
          dialogVisible: false
        }
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
  #signup {
  }
  #right{

  }
  #left{

  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .bg-color{
    background-color: #ff4e18;
    height: 300px;
  }
  .partTwo{
    color: white;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
