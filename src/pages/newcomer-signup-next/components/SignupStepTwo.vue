<template>
  <section class="pb-5">
    <div class="row justify-content-between">
      <div class="col-3 ml-5 mt-2">
          <router-link to="/">
            <b-img v-bind="mainProps" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisLogo/cb_logo.png" alt="Center image"></b-img>
          </router-link>
      </div>
      <div class="col-3 text-right  mr-5 mt-2">
        <router-link to="/helper-signup">
          <el-button type="text">Or become a helper</el-button>
        </router-link>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-4 my-5">
        <div class="card">
          <div class="card-body">
            <h6 class="text-center" >Almost finish</h6>


            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm px-2">

              <el-form-item prop="UName">
                <el-input v-model="ruleForm.UName" placeholder="Enter your Name"></el-input>
              </el-form-item>
              <div class="dropdown-divider col-12 mb-4"></div>
              <el-form-item>
                <el-input v-model="ruleForm.PhoneNum" placeholder="Email phone number"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="ruleForm.EmailAddress" placeholder="Email address"></el-input>
              </el-form-item>
              <div>
                <p text-muted style="font-size: x-small">Phone number or email address is option but highly recommend.</p>
              </div>
              <el-form-item>
                 <router-link to="/newcomer-signup-congra">
                   <el-button type="primary" style="width: 100%" @click="submitForm('ruleForm')">Done</el-button>
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
    name: "signup-step-two",
    data () {
      var checkName = (rule, value, callback) => {
        if (value  === '') {
          callback(new Error('Enter a Email Address'));
        }
        else {
          callback();
        }
      };
      return {
        ruleForm: {
          UName: '',
          PhoneNum:'',
          EmailAddress:''
        },
        rules: {
          UName: [
            {validator: checkName, trigger: 'blur'}
          ],
        },
        mainProps: { width: 65, height: 65, class: 'm1' },
        UnameInput: '',
        PhoneNumInput: '',
        EmailAddressInput: '',
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
    p{
      color: #6C757D;
    }
    h6{
      color: #FF4E18;
    }
    Section{
      height: 100%;
    }
  </style>
