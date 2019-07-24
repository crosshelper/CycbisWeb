<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-5 offset-lg-1 d-flex text-center text-md-left">
          <div class="align-self-center">
            <h1 >
              <br>Cycbis is a platform that connects local residents and travelers to offer instant help.</h1>
            <el-divider></el-divider>
            <p class="g-mb-20 ">All traveler are facing various kinds of problems when they first come to a new country, especially during the first 1-2 years.
              <br>
                We help you find the nearest right person to solve your problem immediately.
              <br>(That is based on your location & language & background.)
            </p>
            <div>
              <el-row class="mt-2">
                <el-col :span="18" :offset="8">
                  <router-link to="/getStart">
                    <el-button type="primary" round>Get Start</el-button>
                  </router-link>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 g-overflow-hidden mt-5" v-for="(item, index) of Intro" v-bind:key="index">
          <img class="img-fluid" :src="item.imgUrl" alt="Image description"
               data-animation="slideInUp">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'cycbis-intro',
  data () {
    return {
      Intro: [{
        imgUrl: 'https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/HomePrototype.png'
      }]
    }
  }
}
</script>

<style scoped>

</style>
