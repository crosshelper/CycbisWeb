<template>
  <section class="pb-5">
    <div class="row justify-content-between">
      <div class="col-3 ml-5 mt-2">
        <router-link to="/">
          <b-img v-bind="mainProps" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisLogo/cb_logo.png" alt="Center image"></b-img>
        </router-link>
      </div>
      <div class="col-3 text-right  mr-5 mt-2">
        <router-link to="/newcomer-signup">
          <el-button type="text">Newcomer? Click here to get help.</el-button>
        </router-link>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4 my-5">
        <div class="card">
          <div class="card-body">
            <h3 class="text-center" >Sign up as a helper</h3>
            <div class="py-3 px-2">
                <span class="text-secondary">Helper others</span><br>
              <span class="text-secondary">Make up to $2400 per week</span>
            </div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <div>
                <div class="text-center pb-1">
                  <el-button size="mini" style="width: 100%">
                    <img src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/google-480.png" width="30" height="30">
                    <span class="pl-2 text-secondary" style="font-size: small">Continue with Google</span>
                  </el-button>
                </div>
                <div class="text-center pb-1">
                  <el-button size="mini" style="width: 100%">
                    <img src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/facebook-old-480.png" width="30" height="28">
                    <span class="pl-2 text-secondary" style="font-size: small">Continue with Facebook</span>
                  </el-button>
                </div>
              </div>
              <div class="row px-4">
                <div class="dropdown-divider col-5"></div>
                <p class="text-muted col-2 text-center" style="font-size: xx-small">OR</p>
                <div class="dropdown-divider col-5 ml-auto"></div>
              </div>

              <el-form-item prop="UserID">
                <el-input v-model="ruleForm.UserID" placeholder="User ID"></el-input>
              </el-form-item>
              <el-form-item  prop="pass">
                <el-input type="password" v-model="ruleForm.pass" placeholder="Password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" placeholder="Confirm password" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item>
                <router-link to="/helper-signup-next">
                  <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%" class="mt-2">Next</el-button>
                </router-link>
              </el-form-item>
            </el-form>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import ElButton from "element-ui/packages/button/src/button";
    export default {
      components: {ElButton},
        name: "signup-step-one",
      data () {
        var checkUserID = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('Enter a Email Address'));
          }
          else {
            callback();
          }
        };

        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('Enter a password'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('Confirm the password'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('Those password did not match! Try agian!'));
          } else {
            callback();
          }
        };
        return {
          mainProps: {width: 65, height: 65, class: 'm1'},
          userIDInput: '',
          passwardInput: '',
          CpasswardInput: '',
          ruleForm: {
            UserID: '',
            pass: '',
            checkPass: ''
          },
          rules: {
            pass: [
              {validator: validatePass, trigger: 'blur'}
            ],
            checkPass: [
              {validator: validatePass2, trigger: 'blur'}
            ],
            UserID: [
              {validator: checkUserID, trigger: 'blur'}
            ]
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
  .simple{
    position: relative;
    bottom: 15px;
  }
  h3{
    color: #FF4E18;
  }
  Section{
    height: 100%;
  }
</style>
