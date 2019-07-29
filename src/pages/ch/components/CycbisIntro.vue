<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-5 offset-lg-1 d-flex text-center text-md-left">
          <div class="align-self-center">
            <h1 >
              <br>Cycbis是一个连接当地居民和游客,移民,留学生提供即时的帮助的平台。</h1>
            <el-divider></el-divider>
            <p class="g-mb-20 ">所有旅行者都面临各种各样的问题当他们第一次来到一个新的国家,尤其是在前两年。
              <br>
              我们帮你找到最近的合适的帮手立即解决你的问题。
              <br>(基于背景,语言,匹配,地理位置匹配.)
            </p>
            <div>
              <el-row class="mt-2">
                <el-col :span="18" :offset="8">
                  <router-link to="/getStart">
                    <el-button type="primary" round>开始使用</el-button>
                  </router-link>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 g-overflow-hidden mt-5" v-for="(item, index) of Intro" v-bind:key="index">
          <img class="img-fluid" :src="item.imgUrl" alt="Image description"
               data-animation="slideInUp">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'cycbis-intro',
  data () {
    return {
      Intro: [{
        imgUrl: 'https://s3-us-west-1.amazonaws.com/image.cycbis.com/CycbisWeb/HomePrototype.png'
      }]
    }
  }
}
</script>

<style scoped>

</style>
