<template>
    <section class="container my-5">
      <div class="my-5">
        <h2>We are hiring</h2>
        <h6>Joining us help billion of people and change the world.</h6>
      </div>
      <template>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="Role"
            prop="role">
          </el-table-column>
          <el-table-column
            label="Department"
            prop="department">
          </el-table-column>
          <el-table-column
            label="Location"
            prop="location">
          </el-table-column>
        </el-table>
      </template>
    </section>
</template>

<script>
    export default {
        name: "section",
      data() {
        return {
          tableData: [{
            role: 'Software Engineer - Xamarin, C#, .NET',
            department: 'Engineering',
            location: 'San Jose, CA',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            role: 'Front-End Developer - Vue.js',
            department: 'Engineering',
            location: 'San Jose, CA',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            role: 'Front-End Developer - Vue.js',
            department: 'Engineering',
            location: 'Nan Jing & Bei Jing, China',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            role: 'Sales',
            department: 'Marketing',
            location: 'San Jose, CA',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            role: 'Sales',
            department: 'Marketing',
            location: 'Los Angeles, CA',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            role: 'UI & UX Designer',
            department: 'Design',
            location: 'San Jose, CA',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }]
        }
      }
    }
</script>

<style scoped>
h2{
  color: #ff4e17;
}
</style>
