<template>
  <section class="py-md-5">
    <div class="my-5 container">
      <div class="mb-5">
        <h1>How to help newcomers</h1>
      </div>
      <div class="row text-center justify-content-center pb-4">

        <div class="col-md-5 mt-md-4">
          <template>
            <el-carousel :interval="4000" type="card" >
              <el-carousel-item v-for="(img,index) in imageList" :key="index">
                <el-image v-bind:src="img.url"></el-image>
              </el-carousel-item>
            </el-carousel>
          </template>
        </div>

        <el-steps :active="5" align-center finish-status="Danger" direction="vertical" class="col-md-6 ml-md-5">
          <el-step title="Choose the newcomers to offer help" description="At the help page, you can see all the problem list submitted by newcomers who are seeking for help, choose the one that you want to help."></el-step>
          <el-step title="Chat to know what newcomers need." description="Just click into the chat to communicate with the newcomers and know the details that newcomer needs for help.">
          </el-step>
          <el-step title=" Offer the quotation after confirming the help service" description="After knowing the newcomers’ needs, offer the quote to newcomer, after newcomer confirmed and accept the quotation, then provide service to newcomers and get paid by newcomers.">
          </el-step>
          <el-step title="Evaluation after post-collection" description="After receiving the payment, users will write the feedback for the service and suggestions as well.">
          </el-step>
          <el-step title="Done"></el-step>
        </el-steps>

      </div>
    </div>
  </section>
</template>

<script>
  import ElStep from "element-ui/packages/steps/src/step";
    export default {
      components: {ElStep},
        name: "section-two",
      data() {
        return {
          active: 0,
          imageList:[
            {
              url:"http://www.cycbis.com/CH/app/assets/img-temp/mockups/mockup4.png"
            },
            {
              url:"http://www.cycbis.com/CH/app/assets/img-temp/mockups/mockup5.png"
            },
            {
              url:"http://www.cycbis.com/CH/app/assets/img-temp/mockups/mockup6.png"
            },
            {
              url:"http://www.cycbis.com/CH/app/assets/img-temp/mockups/mockup7.png"
            },
          ],
        };
      },
      methods: {
        next() {
          if (this.active++ > 2) this.active = 0;
        }
      }
    }
</script>

<style scoped>
  .el-carousel__item el-image {
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }
</style>
