<template>
    <section>
      <div>
        <el-image :src="src">
          <div class="row py-md-5">
            <h5 class="col-3">About us</h5>
            <h5 class="col-3">Career</h5>
            <h5 class="col-3">Business</h5>
            <h5 class="col-3">Investment</h5>
          </div>
        </el-image>
      </div>
      <div class=" justify-content-center">
        <div class="row py-md-5">
          <router-link to="/helper-intro" class="col-md-3 text-center">
            <h5>About us</h5>
          </router-link>
          <router-link to="/helper-intro" class="col-md-3 text-center">
          <h5 >Career</h5>
          </router-link>
          <router-link to="/helper-intro" class="col-md-3 text-center">
          <h5>Business</h5>
          </router-link>
          <router-link to="/helper-intro" class="col-md-3 text-center">
          <h5>Investment</h5>
          </router-link>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "section",
      data() {
        return {
          src: 'https://s3-us-west-1.amazonaws.com/image.cycbis.com/Test/14970.jpg'
        }
      }
    }
    //https://picsum.photos/300/150/?image=41"
</script>

<style scoped>
h5{
  color: #4e555b;
}
</style>
