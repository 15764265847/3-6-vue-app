<template>
  <div style="height: 100%">
    <el-menu
      style="height: 100%"
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :router="true"
    >
      <template v-for="item in showSidebar">
        <el-menu-item v-if="!item.children" :key="item.path" :index="item.path">
          <i :class="item.classI"></i>
          <span>{{ item.routeName }}</span>
        </el-menu-item>
        <el-submenu v-else :key="item.path" :index="item.path">
          <template slot="title">
            <i :class="item.classI"></i>
            <span slot="title">{{ item.routeName }}</span>
          </template>
          <el-menu-item-group v-if="item.children">
            <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">{{ child.routeName }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import Vue from 'vue';
import { sidebarConfig } from '@/constants/enum.js';

export default Vue.extend({
  name: 'Sidebar',
  data () {
    return {
      isCollapse: false,
      sidebarConfig,
      sidebarFromReq: []
    };
  },
  computed: {
    showSidebar () {
      if (!this.sidebarFromReq.length) {
        return this.sidebarConfig;
      }
      return [];
    },
    defaultActive () {
      return this.$route.path;
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
