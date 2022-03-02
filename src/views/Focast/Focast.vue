<template>
  <el-row class="home" :gutter="20">
    <el-card shadow="hover">
      <div class="divcss5">
        <el-input
          placeholder="请输入想要搜索的地区以获取地区信息"
          v-model="input">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="divcss5">
        <el-button type="primary" round>确认</el-button>
      </div>
    </el-card>
    <el-col :span="16" style="margin-top: 40px">
      <el-card shadow="hover" style="height: 300px">
        <echart :chartData="echartData.order" style="height: 300px"></echart>
      </el-card>
      <div class="graph">
        <el-card shadow="hover" style="height: 260px">
          <echart :chartData="echartData.order2" style="height: 260px"></echart>
        </el-card>
        <el-card shadow="hover" style="height: 300px">
          <echart :chartData="echartData.vedio" style="height: 260px"></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getHome } from '../../api/data'
import Echart from '@/components/ECharts'
export default {
  components: {
    Echart
  },
  data () {
    return {
      userImg: require('../../assets/images/user.png'),
      tableData: [],
      echartData: {
        order: {
          xData: [],
          series: []
        },
        order2: {
          xData: [],
          series: []
        },
        vedio: {
          xData: [],
          series: []
        }
      },
      input: ''
    }
  },
  methods: {
    getTableData () {
      getHome().then((res) => {
        this.tableData = res.data.tableData

        // 确诊病例折线图的展示
        const futureQZ = res.data.futureQZ
        console.log(futureQZ)
        const keyArray = Object.keys(futureQZ.data[0])

        // 传给组件的值
        this.echartData.order.xData = futureQZ.date
        keyArray.forEach((key) => {
          this.echartData.order.series.push({
            name: key,
            data: futureQZ.data.map((item) => item[key]),
            type: 'line'
          })
        })

        // 死亡病例折线图的展示
        const futureSW = res.data.futureSW
        console.log(futureSW)
        const keyArray1 = Object.keys(futureSW.data[0])

        // 传给组件的值
        this.echartData.order2.xData = futureSW.date
        keyArray1.forEach((key) => {
          this.echartData.order2.series.push({
            name: key,
            data: futureSW.data.map((item) => item[key]),
            type: 'line'
          })
        })
        // 治愈病例折线图的展示
        const futureZY = res.data.futureZY
        console.log(futureSW)
        const keyArray2 = Object.keys(futureZY.data[0])

        // 传给组件的值
        this.echartData.vedio.xData = futureZY.date
        keyArray2.forEach((key) => {
          this.echartData.vedio.series.push({
            name: key,
            data: futureZY.data.map((item) => item[key]),
            type: 'line'
          })
        })

        // //  柱状图封装
        // this.echartData.user.xData = res.data.userData.map((item) => item.date)
        // this.echartData.user.series.push({
        //   name: '今日新增',
        //   data: res.data.userData.map((item) => item.new),
        //   type: 'bar'
        // })
        // this.echartData.user.series.push({
        //   name: '今日死亡',
        //   data: res.data.userData.map((item) => item.active),
        //   type: 'bar'
        // })

        // this.echartData.vedio.series.push({
        //   data: res.data.videoData,
        //   type: 'pie'
        // })
      })
    }
  },
  mounted () {
    this.getTableData()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home.scss";
</style>
