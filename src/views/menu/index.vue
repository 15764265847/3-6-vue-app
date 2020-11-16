<template>
  <div>
    <el-card class="box-card">
      <el-button @click="$router.push({name: 'addMenu'})" size="small">添加菜单</el-button>
      <el-table
        :data="allMenu"
        style="width: 100%">
        <el-table-column
          label="编号"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="菜单名称">
        </el-table-column>
        <el-table-column
          prop="level"
          label="菜单级数">
          <template slot-scope="scope">
            {{ scope.row.level ? '一级' : '二级' }}
          </template>
        </el-table-column>
        <el-table-column
          prop="icon"
          label="前端图标">
        </el-table-column>
        <el-table-column
          prop="orderNum"
          label="排序">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="editMenu(scope.row)">编辑</el-button>
            <el-button @click="deleteMenu(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import Vue from 'vue';
import { getAllMenu, deleteMenu } from '@/services/menu';

export default Vue.extend({
  name: 'Menus',
  data () {
    return {
      allMenu: []
    };
  },
  beforeMount () {
    this.getAllMenu();
  },
  methods: {
    async getAllMenu () {
      const { data } = await getAllMenu();
      data.code === '000000' && (this.allMenu = data.data);
    },
    editMenu (item) {
      console.log(item);
    },
    async deleteMenu (item) {
      const { data } = await deleteMenu(item.id);
      console.log(item);
      if (data.code === '000000') {
        this.getAllMenu();
        this.$message.success(data.mesg);
      }
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
