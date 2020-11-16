<template>
  <div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="菜单名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="菜单路径">
          <el-input v-model="form.href"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单">
          <el-select v-model="form.parentId" placeholder="请选择活动区域">
            <el-option label="无上级菜单" :value="-1"></el-option>
            <el-option v-for="item in parentMenu" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="前端图标">
          <el-input v-model="form.icon"></el-input>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-radio-group v-model="form.shown">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.orderNum"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="onSubmit">保存</el-button>
    </el-card>
  </div>
</template>

<script>
import Vue from 'vue';
import { addOrUpdateMenu, getParentMenu } from '@/services/menu';

export default Vue.extend({
  name: 'addMenu',
  data () {
    return {
      parentMenu: [],
      form: {
        name: '',
        href: '',
        parentId: -1,
        description: '',
        shown: false,
        icon: '',
        orderNum: ''
      }
    };
  },
  beforeMount () {
    this.getParentMenu();
  },
  methods: {
    async getParentMenu () {
      const { data } = await getParentMenu();
      data.code === '000000' && (this.parentMenu = data.data.parentMenuList);
    },
    async onSubmit () {
      const { data } = await addOrUpdateMenu(this.form);
      if (data.code === '000000') {
        this.$message.success(data.mesg);
        this.$router.push({ name: 'menu' });
      }
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
