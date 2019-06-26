<template>
    <section class="container">
      <div class="row mb-5" id="signup">
        <div class="col-lg mt-5" id="right">
          <div class="col-10 ">
              <h2 class="text-dark">Invest us</h2>
            <h3>Become our partner, help billion of people, make the world better.</h3>
          </div>
      </div>
    </div>
    </section>
</template>

<script>
    export default {
        name: "section",
      data() {
        return {
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://s3-us-west-1.amazonaws.com/image.cycbis.com/Test/tokyo05-2-1447803.jpg',
          currentDate: new Date(),
        }
      }
    }
</script>

<style scoped>
  #signup {
  }
  #right{

  }
  #left{

  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  h2{
    color: #666666;
  }
  h4{
    font-size: 18px;
    color: #717171;
  }
  h3{
    font-size: 22px;
    color: #555555;
  }
  p{
    font-family: "Arial";
    font-size: 16px;
    color: #717171;
  }
  .bgColor{
    background: #F4F4F4;
  }
</style>
