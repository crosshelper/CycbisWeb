<template>
    <section class="container my-5">
      <div>
        <h2>Contact us to get more detail:</h2>
      </div>
      <div class="row">
        <div class="col-lg-4 mt-3">
          <form>
            <div class="justify-content-start text-center pt-3">
              <h3>Contact</h3>
              <el-form :model="subscribeEmail" ref="subscribeEmail" class="demo-ruleForm">
                <el-form-item prop="email" :rules="[
                        { required: true, message: 'Please enter your email address'}]">
                  <el-input type="email" placeholder="Enter your email address here." v-model.number="subscribeEmail.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="submitForm('subscribeEmail')" style="width: 100%" type="primary">Submit</el-button>
                </el-form-item>
              </el-form>
            </div>
          </form>
        </div>

        <div class="col-lg-5 mt-5">
          <div class="justify-content-center offset-lg-7">
            <h3>Or email us</h3>
            <h4>bo.chen@cycbis.com</h4>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "section-two",
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
  h3{
    color: #444444;
  }
h4{
  color: #444444;
}
</style>
