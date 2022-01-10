<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <el-input
            placeholder="请输入想要搜索的地区以获取地区信息"
            v-model="input">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <div class="login-info">
          <el-button type="primary" round>确认</el-button>
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
      <el-card shadow="hover" style="height: 400px" header="上周感染人数">
        <div style="height: 300px" ref="echart"></div>
      </el-card>
      <el-card shadow="hover" style="height: 400px" header="下周感染人数预测">
        <div style="height: 300px" ref="echart1"></div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover" style="height: 260px">
          <div style="height: 260px" ref="userEchart"></div>
        </el-card>
        <el-card shadow="hover" style="height: 260px">
          <div style="height: 260px" ref="vedioEchart"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getHome } from '../../api/data'
import * as echarts from 'echarts'
export default {
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
          value: 44876,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日疑似病例数',
          value: 22842,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日死亡数',
          value: 527,
          icon: 's-goods',
          color: '#ffb980'
        },
        {
          name: '本月确诊数',
          value: 208911,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月疑似病例',
          value: 52227,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月死亡数',
          value: 3420,
          icon: 's-goods',
          color: '#ffb980'
        }
      ],
      echartsData: {
        order: {
          legend: {
            // tuliwenzi
            textStyle: {
              color: '#333'
            }
          },
          grid: {
            left: '20%'
          },
          // tishikuang
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: [],
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            },
            axisLabel: {
              show: true,
              interval: 0,
              color: '#333'
            }
          },
          yAxis: [
            {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#17b3a3'
                }
              }
            }
          ],
          color: ['#2ec7c9', '#17b3a3', '#2ec7c9', '#17b3a3', '#2ec7c9', '#17b3a3'],
          series: []
        },
        user: {
          legend: {
            // tuliwenzi
            textStyle: {
              color: '#333'
            }
          },
          grid: {
            left: '20%'
          },
          // tishikuang
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: [],
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            },
            axisLabel: {
              interval: 0,
              color: '#333'
            }
          },
          yAxis: [
            {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#17b3a3'
                }
              }
            }
          ],
          color: ['#2ec7c9', '#17b3a3'],
          series: []
        },
        vedio: {
          tooltip: {
            trigger: 'item'
          },
          color: [
            '#0f78f4',
            '#dd536b',
            '#9462e5',
            '#a6a6a6',
            '#e1bb22',
            '#39c362',
            '#3ed1cf'
          ],
          series: []
        }
      },
      echartsData1: {
        order: {
          legend: {
            // tuliwenzi
            textStyle: {
              color: '#333'
            }
          },
          grid: {
            left: '20%'
          },
          // tishikuang
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: [],
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            },
            axisLabel: {
              show: true,
              interval: 0,
              color: '#333'
            }
          },
          yAxis: [
            {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#17b3a3'
                }
              }
            }
          ],
          color: ['#2ec7c9', '#17b3a3', '#2ec7c9', '#17b3a3', '#2ec7c9', '#17b3a3'],
          series: []
        },
        user: {
          legend: {
            // tuliwenzi
            textStyle: {
              color: '#333'
            }
          },
          grid: {
            left: '20%'
          },
          // tishikuang
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: [],
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            },
            axisLabel: {
              interval: 0,
              color: '#333'
            }
          },
          yAxis: [
            {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#17b3a3'
                }
              }
            }
          ],
          color: ['#2ec7c9', '#17b3a3'],
          series: []
        },
        vedio: {
          tooltip: {
            trigger: 'item'
          },
          color: [
            '#0f78f4',
            '#dd536b',
            '#9462e5',
            '#a6a6a6',
            '#e1bb22',
            '#39c362',
            '#3ed1cf'
          ],
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

        // 折线图的展示
        // 折线图的展示
        const order = res.data.forkData
        console.log(order)
        // const myEchartsOrder = echarts.init(this.$refs.echart)
        // myEchartsOrder.setOption(this.echartsData.order)

        // 传给组件的值
        this.echartsData.order.xAxis.data = order.date
        const keyArray = Object.keys(order.data[0])
        keyArray.forEach((key) => {
          this.echartsData.order.series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: 'line'
          })
        })
        const myEchartsOrder = echarts.init(this.$refs.echart)
        myEchartsOrder.setOption(this.echartsData.order)

        const future = res.data.futureData
        console.log(future)
        // 传给组件的值
        this.echartsData1.order.xAxis.data = future.date

        const keyArray1 = Object.keys(future.data[0])
        keyArray1.forEach((key) => {
          this.echartsData1.order.series.push({
            name: key,
            data: future.data.map((item) => item[key]),
            type: 'line'
          })
        })
        const myEchartsOrder1 = echarts.init(this.$refs.echart1)
        myEchartsOrder1.setOption(this.echartsData1.order)

        // 用户图
        this.echartsData.user.xAxis.data = res.data.userData.map((item) => item.date)
        this.echartsData.user.series.push({
          name: '今日死亡',
          data: res.data.userData.map((item) => item.new),
          type: 'bar'
        })
        this.echartsData.user.series.push({
          name: '今日新增',
          data: res.data.userData.map((item) => item.active),
          type: 'bar'
        })
        const myEchartsUser = echarts.init(this.$refs.userEchart)
        myEchartsUser.setOption(this.echartsData.user)

        this.echartsData.vedio.series.push({
          data: res.data.videoData1,
          type: 'pie'
        })
        const myEchartsVedio = echarts.init(this.$refs.vedioEchart)
        myEchartsVedio.setOption(this.echartsData.vedio)
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
