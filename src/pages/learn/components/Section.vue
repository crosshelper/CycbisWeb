<template>
    <section class="container my-md-5">
      <div class="">
        <h3>Requirement and Rule</h3>
        <p>Currently unavailable Currently unavaila Currently unavailable Currently unavaila Currently unavailable Currently unavailable</p>
      </div>
      <el-tabs class="my-5" v-model="LearnSection" type="card" @tab-click="handleClick">
        <el-tab-pane label="Newcomer" name="first">
          <el-tabs :tab-position="NewcomerLearn" style="height: 200px;">
            <el-tab-pane label="Why Cycbis">Currently unavailable</el-tab-pane>
            <el-tab-pane label="Safety">We are working on it</el-tab-pane>
          </el-tabs>
        </el-tab-pane>

        <el-tab-pane label="Helper" name="second">
          <el-tabs :tab-position="HelperLearn" style="height: 200px;">
            <el-tab-pane label="Rule">We are working on it</el-tab-pane>
            <el-tab-pane label="Behavior">We are working on it</el-tab-pane>
            <el-tab-pane label="Requirement">We are working on it</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
      </el-tabs>
    </section>
</template>

<script>
    export default {
        name: "section",
      data() {
        return {
          LearnSection: 'first',
          NewcomerLearn: 'left',
          HelperLearn:'left'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>

</style>
