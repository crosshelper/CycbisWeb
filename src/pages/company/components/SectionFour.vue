<template>
  <section class="bgColor py-5">
    <div class="text-center mb-4">
      <h2>Subscribe</h2>
    </div>
    <div class="container text-center">
      <div>
        <h4>If you want to know more about us, please enter your email address.</h4>
      </div>
      <form>
        <div class="justify-content-center text-center pt-3">
          <el-form :model="subscribeEmail" ref="subscribeEmail" class="demo-ruleForm row">
            <el-col class="col-md-10">
              <el-form-item prop="email" :rules="[
                      { required: true, message: 'Please enter your email address'}]">
                <el-input type="email" placeholder="Enter your email address here." v-model.number="subscribeEmail.email" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col class="col-md-2">
              <el-form-item>
                <el-button @click="submitForm('subscribeEmail')" style="width: 100%" type="primary">Submit</el-button>
              </el-form-item>
            </el-col>
          </el-form>
        </div>
      </form>
    </div>
  </section>

</template>

<script>
    export default {
        name: "section-four",
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
    color: #FF4E18;
  }
  h4{
    font-size: 18px;
    color: #717171;
  }
  h3{
    font-size: 22px;
    color: #FF4E18;
  }
  p{
    font-family: "Arial";
    font-size: 16px;
    color: #FF4E18;
  }
  .bgColor{
    background: #F4F4F4;
  }
</style>
