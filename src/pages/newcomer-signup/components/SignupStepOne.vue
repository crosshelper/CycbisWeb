<template>
    <section class="pb-5">
      <div class="row justify-content-between">
        <div class="col-3 ml-5 mt-2">
          <router-link to="/">
            <b-img v-bind="mainProps" src="https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisLogo/cb_logo.png" alt="Center image"></b-img>
          </router-link>
        </div>
        <div class="col-3 text-right  mr-5 mt-2">
          <el-button type="text">Or become a helper</el-button>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-5">
          <div class="card">
            <div class="card-body">
              <h3 class="text-center" >Sign up</h3>
              <div class="py-3 px-2">
                <span class="text-secondary">Find lovable local</span><br>
                <span class="text-secondary">to help you solve problem</span>
              </div>
              <form class="px-2">
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
                <div class="form-group mb-2">
                  <el-input v-model="userIDInput" placeholder="Enter User ID"></el-input>
                </div>
                <div class="form-group mb-2">
                  <el-input placeholder="Enter passward" v-model="passwardInput" show-password></el-input>
                </div>
                <div class="form-group mb-2">
                  <el-input placeholder="Comfirm passward" v-model="CpasswardInput" show-password></el-input>
                </div>
                <router-link to="/newcomer-signup-next">
                <el-button type="primary" style="width: 100%" class="mt-2">Next</el-button>
                </router-link>
              </form>
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
  name: 'SignupStepOne',
  data () {
    return {
      mainProps: { width: 65, height: 65, class: 'm1' },
      userIDInput: '',
      passwardInput: '',
      CpasswardInput: ''
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
