<template>
  <section class="text-center my-5">
    <div>
      <h3>Post arrival service</h3>
    </div>
    <div class="row justify-content-center mt-5">
      <el-card class="col-lg-2 mx-4 my-1">
        <div class="text-center">
          <div class="mb-3">
            <i class="el-icon-guide"></i>
          </div>
          <h5>Travelers</h5>
          <p class="">
            Travelers get problems during the travel<br>
          </p>
        </div>
      </el-card>
      <el-card class="col-lg-2 mx-4 my-1">
        <div class="text-center">
          <div class="mb-3">
            <i class="el-icon-house"></i>
          </div>
          <h5>Residents</h5>
          <p class="">
            New residents get problems after moving to a new city/state.<br>
          </p>
        </div>
      </el-card>
      <el-card class="col-lg-2 mx-4 my-1">
        <div class="text-center">
          <div class="mb-3">
            <i class="el-icon-place"></i>
          </div>
          <h5>Immigrants</h5>
          <p class="">
            New immigrants get problems after coming to a new country.<br>
          </p>
        </div>
      </el-card>
      <el-card class="col-lg-2 mx-4 my-1">
        <div class="text-center">
          <div class="mb-3">
            <i class="el-icon-notebook-2"></i>
          </div>
          <h5>International student</h5>
          <p class="">
            Student get problems after abroad study<br>
          </p>
        </div>
      </el-card>
    </div>
    <div class="text-center my-5">
      <h4>Cycbis can get them helped on these post-arrival problems.</h4>
    </div>
  </section>
</template>

<script>
    export default {
        name: "section-three",
      data() {
        return {
        }
      }
    }
</script>

<style scoped>
  h2{
    color: #555555;
  }
  h4{
    color: #555555;
  }
h5{
  font-family: "Arial";
  font-size: 18px;
  color: #555555;
  }
p{
  font-family: "Arial";
  font-size: 16px;
  color: #555555;
}
i{
  font-size: 35px;
  color: #FF4E17;
}
</style>
