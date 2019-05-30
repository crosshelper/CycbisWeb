<template>
  <section class="py-5 bgColor">
    <div class="row justify-content-center">
      <h2>Or learn more about us.</h2>
    </div>
    <br>
    <div class="container text-center">
    </div>
    <div class="row mx-5 justify-content-center">
      <router-link to="/helper-intro" class="col-md-3 text-center py-md-3 mt-2">
        <el-button style="width: 100%" round>Business & Partner</el-button>
      </router-link>
      <router-link to="/helper-intro" class="col-md-3 text-center py-md-3 mt-2">
        <el-button round style="width: 100%">Joining us</el-button>
      </router-link>
      <router-link to="/helper-intro" class="col-md-3 text-center py-md-3 mb-3 mt-2">
        <el-button style="width: 100%" round>Invest us</el-button>
      </router-link>
    </div>
  </section>
</template>

<script>
    export default {
        name: "section-six",
      data() {
        return {
          subscribeEmail: {
            email: ''
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      }
    }
</script>

<style scoped>
  h2{
    color: #ffffff;
  }
  h4{
    font-size: 18px;
    color: #FFFFFF;
  }
  h3{
    font-size: 22px;
    color: #FFFFFF;
  }
  p{
    font-family: "Arial";
    font-size: 16px;
    color: #555555;
  }
  .bgColor{
    background: #FF4E17;
  }
</style>
