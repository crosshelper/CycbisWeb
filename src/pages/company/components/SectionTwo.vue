<template>
  <section>
    <div class="demo-image">
        <el-image
          :src="url"
          :fit="fit">
        </el-image>
    </div>
  </section>
</template>

<script>
    export default {
        name: "section-two",
      data() {
        return {
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://s3-us-west-1.amazonaws.com/image.cycbis.com/Test/14970.jpg'
        }
      }
    }
</script>

<style scoped>

</style>
