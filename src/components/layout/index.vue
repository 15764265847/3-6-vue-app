<template>
  <el-container>
    <el-aside width="200px">
      <Sidebar></Sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Vue from 'vue';
import Header from './src/Header.vue';
import Sidebar from './src/Sidebar.vue';

export default Vue.extend({
  components: {
    Header,
    Sidebar
  },
  name: 'layout'
});
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  min-width: 900px;
}
.el-header {
  background: #fff;
}
</style>
