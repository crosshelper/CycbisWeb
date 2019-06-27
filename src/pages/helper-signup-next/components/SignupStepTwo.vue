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
            <h6 class="text-center" >Almost finish</h6>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm px-2" >

              <el-form-item prop="Uname">
                <el-input v-model="ruleForm.Uname" placeholder="Enter your Name"></el-input>
              </el-form-item>
              <el-form-item prop="PhoneNum">
                <el-input v-model="ruleForm.PhoneNum" placeholder="Email phone number"></el-input>
              </el-form-item>
              <el-form-item prop="EmailAddress">
                <el-input v-model="ruleForm.EmailAddress" placeholder="Email address"></el-input>
              </el-form-item>
              <div class="dropdown-divider col-12 mb-4"></div>
              <el-form-item prop="StreetAddress">
                <el-input v-model="ruleForm.StreetAddress" placeholder="Street address"></el-input>
              </el-form-item>
                <el-form-item prop="AdditionAddress">
                  <el-input v-model="ruleForm.AdditionAddress" placeholder="Unit, apartment, studio of floor (option)"></el-input>
                </el-form-item>
              <div class="row no-gutters">
                <el-form-item class="col-md-4 ItemGutters" prop="City">
                  <el-input v-model="ruleForm.City" placeholder="City"></el-input>
                </el-form-item>
                <el-form-item class="col-md-3 ItemGutters" prop="State">
                  <el-input v-model="ruleForm.State" placeholder="State"></el-input>
                </el-form-item>
                <el-form-item class="col-md-4 ItemGutters" prop="ZipCode">
                  <el-input v-model="ruleForm.ZipCode" placeholder="Zip Code"></el-input>
                </el-form-item>
              </div>
              <el-form-item>
               <router-link to="/helper-signup-verify">
                  <el-button type="primary" style="width: 100%" class="mt-2" @click="submitForm('ruleForm')">Next</el-button>
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
          return {
            ruleForm: {
              Uname: '',
              PhoneNum:'',
              EmailAddress:'',
              StreetAddress:'',
              AdditionAddress:'',
              City:'',
              State:'',
              ZipCode:''
            },
            rules: {
              Uname: [
                { required: true, message:'Please enter your real name', trigger: 'blur'},
                { min: 3, max: 30, message: 'More than 3 character', trigger: 'blur' }
              ],
              PhoneNum: [
                { required: true, message:'Please enter your phone number', trigger: 'blur'},
                { min: 10, max: 16, message: 'Please enter a valid phone number', trigger: 'blur' }
              ],
              EmailAddress: [
                { required: true, message:'Please enter your email address', trigger: 'blur'}
              ],
              StreetAddress: [
                { required: true, message:'Please enter Street address', trigger: 'blur'}
              ],
              //AdditionAddress: [
                //{ required: true, message:'Enter your real name', trigger: 'blur'},
                //{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              //],
              City: [
                { required: true, message:'Enter City', trigger: 'blur'}
              ],
              State: [
                { required: true, message:'Enter State', trigger: 'blur'}
              ],
              ZipCode: [
                { required: true, message:'Enter zip code', trigger: 'blur'},
                { min: 5, max: 11, message: 'Enter valid zip code', trigger: 'blur' }
              ],
            },
            mainProps: { width: 65, height: 65, class: 'm1' },
            name: "signup-step-two",
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
    .ItemGutters{
      margin-left: 4px;
      margin-right: 4px;
    }
  </style>
