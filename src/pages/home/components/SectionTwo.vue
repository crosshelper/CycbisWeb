<template>
  <div class="py-lg-5">
    <div class="container">
      <row class="text-center">
        <h5 class="text-center" type="primary">What we do?</h5>
      </row>
      <!-- Line 1 -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Newcomer" name="first">
          <div class="row py-lg-5 justify-content-center ">
          <div class="col-md-3 col-lg-3 g-mb-30 my-lg-2 mt-5">
            <div class="text-left g-bg-gray-light-v5 g-py-40 g-px-30">
              <h5 class="text-uppercase g-font-weight-700 g-font-size-11 g-color-black g-mb-20">
                FIND THE RIGHT PERSON TO SOLVE YOUR PROBLEM
                <br>
              </h5>
              <p class="mb-0">We search and match your helper based on your preferences and needs. We will screen the helper candidates with Crosshelper’s standards first to ensure the quality and reliability of the help process, so that we can maximize customers benefits and fulfill their needs.</p>
            </div>
          </div>
          <!-- Line 2 -->
          <div class="col-md-3 col-lg-3 g-mb-30 my-lg-2 mx-lg-5 mt-5">
            <div class=" text-left g-bg-gray-light-v5 g-py-40 g-px-30"
                 data-animation="fadeIn"
                 data-animation-duration="1500">
              <h5 class="text-uppercase g-font-weight-700 g-font-size-11 g-color-black g-mb-20">
                GET YOUR PERSONAL HELPER ON CLOUD
                <br>
              </h5>
              <p class="mb-0">We know your pain of asking and looking for the right person to help you in reality. Now you are open to all helpers nationwide on Crosshelper to connect, therefore, you’re getting better chances to be helped with the right person in the shortest tim</p>
            </div>
          </div>
          <!-- Line 3 -->
          <div class="col-md-3 col-lg-3 g-mb-30 my-lg-2 mt-5">
            <div class="text-left g-bg-gray-light-v5 g-py-40 g-px-30"
                 data-animation="fadeIn"
                 data-animation-duration="1500">
              <h5 class="text-uppercase g-font-weight-700 g-font-size-11 g-color-black g-mb-20">
                TAP A BUTTON GET HELPER IMMEDIATELY.
                <br>
              </h5>
              <p class="g-font-size-default mb-0">Let us know your problem or headache, let us find the right helper for you. All you have to do is to tap the button and get Crosshelper started looking for you. We will send you a list of helper candidates within seconds, and you pick your final candidate at your own preference.</p>
            </div>
          </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="Helper" name="second">
          <div class="row py-lg-5 justify-content-center ">
            <div class="col-md-3 col-lg-3 g-mb-30 my-lg-2 mt-5">
              <div class="text-left g-bg-gray-light-v5 g-py-40 g-px-30">
                <h5 class="text-uppercase g-font-weight-700 g-font-size-11 g-color-black g-mb-20">
                  1 V 1 RESIDENT
                  PERSONAL & PRIVATE HELP
                  <br>
                </h5>
                <p class="mb-0">Crosshelper is tailored to your own case and your own situation. You got your 1 to 1 helper with the best candidate we can find according to your needs and requests. No more confusions and endless digging information online when you’re facing tons of general answers or pieces of informations that can not help your situation completely.</p>
              </div>
            </div>
            <!-- Line 2 -->
            <div class="col-md-3 col-lg-3 g-mb-30 my-lg-2 mx-lg-5 mt-5">
              <div class=" text-left g-bg-gray-light-v5 g-py-40 g-px-30"
                   data-animation="fadeIn"
                   data-animation-duration="1500">
                <h5 class="text-uppercase g-font-weight-700 g-font-size-11 g-color-black g-mb-20">
                  HIGH LEVEL OF PROTECTION OF
                  YOUR PERSONAL DATA & RIGHTS
                  <br>
                </h5>
                <p class="mb-0">We have a complete system and procedure to screen and verify the helper candidates. Moreover, we will keep tracking the whole process of the help and monitor the results. Payments are guaranteed to be safe and fair on Crosshelper. We’re sparing no efforts to protect your safety, privacy and rights.</p>
              </div>
            </div>
            <!-- Line 3 -->
            <div class="col-md-3 col-lg-3 g-mb-30 my-lg-2 mt-5">
              <div class="text-left g-bg-gray-light-v5 g-py-40 g-px-30"
                   data-animation="fadeIn"
                   data-animation-duration="1500">
                <h5 class="text-uppercase g-font-weight-700 g-font-size-11 g-color-black g-mb-20">
                  MANY DIFFERENT OPTION FOR
                  PREFERENCE SEARCH
                  <br>
                </h5>
                <p class="g-font-size-default mb-0">Knowing the time sensitivity for your needs to find someone for help, we offer different dimensions for matching the right helper for you on Crosshelper, e.g. language, distance, professional background, availability.</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import ElMain from "element-ui/packages/main/src/main";

export default {
  components: {ElMain},
  name: "section-two",
  data() {
    return {
      activeName: 'first'
    };
  }
}
</script>

<style scoped>
  .el-container{
    color: #333;
    text-align: center;
    line-height: 360px;
  }
</style>
