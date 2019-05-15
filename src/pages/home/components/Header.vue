<template>
  <div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Cycbis</el-menu-item>
    <el-submenu index="2">
    <template slot="title">Our company</template>
      <el-menu-item index="2-1">Team</el-menu-item>
      <el-menu-item index="2-2">About Us</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">Help</el-menu-item>
  </el-menu>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
