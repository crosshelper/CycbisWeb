<template>
  <!-- Section Content -->
  <section class="py-5 bgColor">
      <div class="container">
        <div>
          <h2 class="text-white">Partner with us</h2>
        </div>
        <div class="row">
          <div class="col-5">
            <form>
              <div class="justify-content-center text-center pt-3">
                <el-form :model="busContact" ref="busContact" class="demo-ruleForm">
                    <el-form-item prop="busEmail" :rules="[
                      { required: true, message: 'Please enter your email address'}]">
                      <el-input type="text" placeholder="Enter your email address here." v-model="busContact.busEmail" autocomplete="off"></el-input>
                    </el-form-item>
                  <el-form-item prop="busTextarea"  :rules="[
                      { required: true, message: 'Please enter here'}]">
                    <el-input type="textarea" maxlength="500" show-word-limit placeholder="Enter your text here." v-model="busContact.busTextarea" autocomplete="off"></el-input>
                  </el-form-item>
                    <el-form-item>
                      <el-button @click="submitForm('busContact')" style="width: 100%">Submit</el-button>
                    </el-form-item>
                </el-form>
              </div>
            </form>
          </div>
        </div>
      </div>
  </section>
  <!-- End Section Content -->
</template>

<script>
    import ElFormItem from "element-ui/packages/form/src/form-item";

    export default {
      components: {ElFormItem},
      name: "section",
      data() {
        return {
          busContact: {
            busEmail: '',
            busTextarea:''
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
.bgColor{
  background: #ff4e17;
}
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

</style>
