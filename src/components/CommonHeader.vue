<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini"
      @click="handleMenu">
      </el-button>
      <h3 style="color: aliceblue">首页</h3>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleMenu () {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-left: 20px;
  }
}
</style>
