<template>
  <el-container style="height: 100%">
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header>
        <CommonHeader></CommonHeader>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>
<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import axios from 'axios'

// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:5554/zndz/'
export default {
  name: 'Main',
  components: { CommonAside, CommonHeader }
}
</script>

<style lang="scss" scoped>
.el-header {
  background: #333;
}
.el-main {
  padding-top: 0;
}
</style>
