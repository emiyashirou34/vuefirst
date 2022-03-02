<template>
  <el-menu default-active="1-1"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
           :collapse="isCollapse"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
  >
    <h3 v-show="!isCollapse">疫情趋势查询系统</h3>
    <h3 v-show="isCollapse">查询</h3>
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.
    path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu :index="item.label" v-for="item in hasChildren" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in
        item.children" :key="subIndex"
                      @click="clickMenu(item)">
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{subItem.label}}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  data () {
    return {
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '历史信息',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/focast',
          name: 'focast',
          label: '趋势预测',
          icon: 'video-play',
          url: 'Focast/Focast'
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu (item) {
      this.$router.push({ name: item.name })
    }
  },
  computed: {
    noChildren () {
      return this.menu.filter((item) => !item.children)
    },
    hasChildren () {
      return this.menu.filter((item) => item.children)
    },
    isCollapse () {
      return this.$store.state.tab.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
  border: none;
  h3 {
    color: aliceblue;
    text-align: center;
    line-height: 48px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
