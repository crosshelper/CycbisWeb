<template>
  <div class="container my-5">
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <h4>What we have.</h4>
          </div>
          <div>
            100+ small business partners.
            <hr>underserviced market and healthy market.
            <hr>Well experienced and strong executive team.
            <hr>Based on San Francisco bay area, cross to everywhere in the world.
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "section-three"
    }
</script>

<style scoped>
img{
  width: 35px;
  height: 35px;
}
</style>
