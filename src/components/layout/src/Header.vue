<template>
  <div class="header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <span class="el-dropdown-link dropdown-avatar">
        <el-avatar size="medium" :src="userInfo.portrait || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" size="medium">
        <el-dropdown-item>{{ userInfo.userName }}</el-dropdown-item>
        <el-dropdown-item @click.native="loginOut" divided>登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Vue from 'vue';
import { getUserInfo } from '@/services/user';

export default Vue.extend({
  name: 'Header',
  data () {
    return {
      userInfo: {}
    };
  },
  created () {
    this.loadUserInfo();
  },
  methods: {
    async loadUserInfo () {
      const { data } = await getUserInfo();
      this.userInfo = data.content;
    },
    loginOut () {
      console.log('登出');
      this.$store.commit('setUser', 'null');
      this.$router.push({
        name: 'login'
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.dropdown-avatar {
  display: flex;
  align-items: center;
}
</style>
