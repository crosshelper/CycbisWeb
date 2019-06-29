<template>
  <section class="pt-md-5 pb-md-3 container">
    <div class="container">
      <div class="row mb-4" id="signup">
        <div class="col-lg mt-5" id="right">
          <div class="col-12">
            <h1 class="">Earn money up tp $1400 each week. Become a helper to help newcomers.</h1>
            <div class="row mt-4">
              <div class="col-3">
                <router-link to="/helper-signup">
                  <el-button type="primary" round>Sign up as a Helper</el-button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg mt-3" id="left">
          <div>
            <b-img src="http://cw1.tw/CH/images/content_images/ae8f27e7-2dca-4386-96fc-eeab99cbb0e9.jpg" fluid alt="Responsive image"></b-img>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "section"
    }
</script>

<style scoped>

</style>
