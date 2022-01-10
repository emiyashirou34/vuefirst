// mock数据模拟
import Mock from 'mockjs'

// 图表数据
const List = []
export default {
  getStatisticalData: () => {
    //  Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          纽约: Mock.Random.float(100, 8000, 0, 0),
          加利福尼亚: Mock.Random.float(100, 8000, 0, 0),
          华盛顿: Mock.Random.float(100, 8000, 0, 0),
          德克萨斯: Mock.Random.float(100, 8000, 0, 0),
          北卡罗来纳州: Mock.Random.float(100, 8000, 0, 0),
          佛蒙特州: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: '纽约',
            value: 2999
          },
          {
            name: '加利福尼亚',
            value: 5999
          },
          {
            name: '华盛顿',
            value: 1500
          },
          {
            name: '德克萨斯',
            value: 1999
          },
          {
            name: '北卡罗来纳州',
            value: 2200
          },
          {
            name: '佛蒙特州',
            value: 4500
          }
        ],
        //  饼图具体
        videoData1: [
          {
            name: '确诊人数',
            value: 12999
          },
          {
            name: '疑似病例人数',
            value: 5999
          },
          {
            name: '死亡数',
            value: 150
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: 5,
            active: 200
          },
          {
            date: '周二',
            new: 10,
            active: 500
          },
          {
            date: '周三',
            new: 12,
            active: 550
          },
          {
            date: '周四',
            new: 60,
            active: 800
          },
          {
            date: '周五',
            new: 65,
            active: 550
          },
          {
            date: '周六',
            new: 53,
            active: 770
          },
          {
            date: '周日',
            new: 33,
            active: 170
          }
        ],
        // 折线图
        orderData: {
          date: ['20200320', '20200321', '20200322', '20200323', '20200324', '20200325', '20200326'],
          data: List
        },
        // 折线图具体
        forkData: {
          date: ['20200320', '20200321', '20200322', '20200323', '20200324', '20200325', '20200326'],
          data: [
            {
              纽约: 8310
            },
            {
              纽约: 11710
            },
            {
              纽约: 15800
            },
            {
              纽约: 20884
            },
            {
              纽约: 25681
            },
            {
              纽约: 30841
            },
            {
              纽约: 37877
            }
          ]
        },
        futureData: {
          date: ['20200327', '20200328', '20200329', '20200330', '20200331', '20200401', '20200402'],
          data: [
            {
              纽约: 44876
            },
            {
              纽约: 52410
            },
            {
              纽约: 59648
            },
            {
              纽约: 66663
            },
            {
              纽约: 75833
            },
            {
              纽约: 83948
            },
            {
              纽约: 92506
            }
          ]
        },
        tableData: [
          {
            name: '纽约',
            todayBuy: 500000,
            monthBuy: 35000,
            totalBuy: 220
          },
          {
            name: '加利福尼亚',
            todayBuy: 300000,
            monthBuy: 22000,
            totalBuy: 240
          },
          {
            name: '华盛顿',
            todayBuy: 80000,
            monthBuy: 8000,
            totalBuy: 650
          },
          {
            name: '德克萨斯',
            todayBuy: 120000,
            monthBuy: 6500,
            totalBuy: 450
          },
          {
            name: '北卡罗来纳州',
            todayBuy: 30000,
            monthBuy: 2000,
            totalBuy: 340
          },
          {
            name: '佛蒙特州',
            todayBuy: 35000,
            monthBuy: 3000,
            totalBuy: 220
          }
        ],
        tableData1: [
          {
            name: '纽约',
            todayBuy: 50000,
            monthBuy: 3500,
            totalBuy: 220
          },
          {
            name: '加利福尼亚',
            todayBuy: 30000,
            monthBuy: 2200,
            totalBuy: 240
          },
          {
            name: '华盛顿',
            todayBuy: 80000,
            monthBuy: 8500,
            totalBuy: 650
          },
          {
            name: '德克萨斯',
            todayBuy: 120000,
            monthBuy: 65000,
            totalBuy: 450
          },
          {
            name: '北卡罗来纳州',
            todayBuy: 30000,
            monthBuy: 20000,
            totalBuy: 340
          },
          {
            name: '佛蒙特州',
            todayBuy: 35000,
            monthBuy: 3000,
            totalBuy: 220
          }
        ]
      }
    }
  }
}
