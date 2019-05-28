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
          <el-step title="Pick problem & match newcomer" description="这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="Communicate with the newcomers" description="这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字">
          </el-step>
          <el-step title="Quote & Comfirm" description="这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字">
          </el-step>
          <el-step title="Helping" description="这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字">
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
