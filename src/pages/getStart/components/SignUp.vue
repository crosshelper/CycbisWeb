<template>
  <div class="container">
    <div class="row mb-4" id="signup">
      <div class="col-lg mt-5" id="right">
        <div class="col-10 ">
          <router-link to="/helper-signup">
            <h2 class="text-dark"><u>Become a helper</u></h2>
          </router-link>
            <p class="">Earn money up tp $1400 each week. Become a helper to help newcomers.</p>
        </div>
        <div class="col-10">
          <router-link to="/newcomer-signup">
          <h2 class="text-dark mt-5"><u>Sign up to get help</u></h2>
          </router-link>
          <p class="">Earn money up tp $1400 each week. Become a helper to help newcomers.</p>
        </div>
      </div>
      <div class="col-lg my-5" id="left">
        <div>
          <b-img src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/Test/test1.jpg" fluid alt="Responsive image"></b-img>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      name: "get-start-sign-up",
      data() {
        return {
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://s3-us-west-1.amazonaws.com/image.cycbis.com/Test/tokyo05-2-1447803.jpg',
          currentDate: new Date()
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

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
