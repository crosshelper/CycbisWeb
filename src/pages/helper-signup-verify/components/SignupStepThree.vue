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
              <div class="dropdown-divider col-12 my-3"></div>
              <div>
                <p text-muted style="font-size: small">Upload Your photo ID</p>
              </div>

              <template>
                <div>
                  <b-form-file v-model="file" ref="file-input" class="mb-2"></b-form-file>
                  <el-button style="width: 100%" @click="file = null">Reset</el-button>
                  <p class="mt-2">Selected file: <span>{{ file ? file.name : '' }}</span></p>
                </div>
              </template>

              <div class="dropdown-divider col-12 my-3"></div>

              <el-form-item prop="SSN">
                <el-input v-model="ruleForm.SSN" placeholder="Enter your SSN"></el-input>
              </el-form-item>

              <div>
                <p text-muted style="font-size: x-small">Enter SSN for background check and Tax. We will not use your SSN to do any other purposes.</p>
              </div>

             <router-link to="/helper-signup-congra">
                <el-button type="primary" style="width: 100%" class="mt-2" @click="submitForm('ruleForm')">Done</el-button>
             </router-link>
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
          name: "signup-step-three",
        components: {ElButton},
        data () {
          return {
            mainProps: { width: 65, height: 65, class: 'm1' },
            name: "signup-step-two",
            file: null,
            ruleForm: {
              SSN: ''
            },
            rules: {
              SSN: [
                { required: true, message:'Please enter your SSN', trigger: 'blur'},
                { min: 9, max: 9, message: 'Please enter a valid SSN', trigger: 'blur' }
              ]
            }
          }
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
          },
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
