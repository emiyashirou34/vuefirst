<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg"/>
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2020-7-9</span></p>
          <p>上次登录地点：<span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="height:470px; margin-top: 20px">
        <el-table :data="tableData">
          <el-table-column
            show-overflow-tooltip v-for="(val,key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >

          </el-table-column>>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
    <div class="num">
      <el-card shadow="hover" v-for="item in countData" :key="item.name"
      :body-style="{display: 'flex', padding: 0 }">
        <i class="icon" :class="`el-icon-${item.icon}`" :style="
          { background: item.color }">
        </i>
        <div class="detail">
          <p class="num">{{ item.value }}例</p>
          <p class="txt">{{ item.name }}例</p>
        </div>
      </el-card>
    </div>
      <el-card shadow="hover" style="height: 300px">
<!--        <div style="height: 300px" ref="echart"></div>-->
        <echart :chartData="echartData.order" style="height: 300px"></echart>
      </el-card>
      <div class="graph">
        <el-card shadow="hover" style="height: 260px">
<!--          <div style="height: 260px" ref="userEchart"></div>-->
          <echart :chartData="echartData.user" style="height: 260px"></echart>
        </el-card>
        <el-card shadow="hover" style="height: 300px">
<!--          <div style="height: 260px" ref="vedioEchart"></div>-->
          <echart :chartData="echartData.vedio" style="height: 260px"
          :isAxisChart="false"></echart>
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
      tableLabel: {
        name: '地区',
        todayBuy: '总人数',
        monthBuy: '感染数',
        totalBuy: '死亡数'
      },
      countData: [
        {
          name: '今日确诊数',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日疑似病例数',
          value: 1234,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日死亡数',
          value: 1234,
          icon: 's-goods',
          color: '#ffb980'
        },
        {
          name: '本月确诊数',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月疑似病例',
          value: 1234,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月死亡数',
          value: 1234,
          icon: 's-goods',
          color: '#ffb980'
        }
      ],
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        vedio: {
          series: []
        }
      }
    }
  },
  methods: {
    getTableData () {
      getHome().then((res) => {
        this.tableData = res.data.tableData

        // 折线图的展示
        const order = res.data.orderData
        console.log(order)
        const keyArray = Object.keys(order.data[0])

        // 传给组件的值
        this.echartData.order.xData = order.date
        keyArray.forEach((key) => {
          this.echartData.order.series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: 'line'
          })
        })

        //  柱状图封装
        this.echartData.user.xData = res.data.userData.map((item) => item.date)
        this.echartData.user.series.push({
          name: '今日新增',
          data: res.data.userData.map((item) => item.new),
          type: 'bar'
        })
        this.echartData.user.series.push({
          name: '今日死亡',
          data: res.data.userData.map((item) => item.active),
          type: 'bar'
        })

        this.echartData.vedio.series.push({
          data: res.data.videoData,
          type: 'pie'
        })
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
