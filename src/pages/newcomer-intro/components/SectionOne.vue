<template>
  <section class="py-md-5">
  <div class="my-5 container">
    <div class="mb-5">
      <h1>How to get help with Cycbis</h1>
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
        <el-step title="Submit your request" description="Click from different categories to select the service you need, or type the keywords in the search bar to find what service you need."></el-step>
        <el-step title="Describe your problem" description="Before submitting your request, choose the location and language per your need, then describe what help that you need in the problem description chart, then click next to submitting your request.">
        </el-step>
        <el-step title="Get connected with local helper" description="After submitting your request, the qualified helper will see your request, and will contact through the chart directly. You can communicate more details to helper to help you better.">
        </el-step>
        <el-step title="Confirm the quotation" description="After getting the quotation from help, and you have confirmed it, the helper will offer the help to solve your problems. You make payment.">
        </el-step>
        <el-step title="Evaluation" description="After payment, evaluate the service and write feedback optional.">
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
      name: "section-one",
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
