<template>
  <div class="login">
    <el-form class="login-form" ref="form" :label-position="'top'" :model="form" label-width="80px">
      <el-form-item prop="phone" label="手机号">
        <el-input size="small" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input size="small" prop="password" type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" class="login-btn" type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
      <!-- <p>{{ errMsg }}</p> -->
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue';
import { login } from '@/services/user.ts';

export default Vue.extend({
  name: 'login',
  data () {
    return {
      form: {
        phone: '',
        password: ''
        // errMsg: ''
      }
    };
  },
  methods: {
    async onSubmit () {
      // console.log('submit!');
      // await this.$refs.form.validate();
      const { data } = await login(this.form);
      console.log(data);
      if (data.state !== 1) {
        this.$message.error(data.message);
        // this.errMsg = data.message;
      } else {
        const { redirect } = this.$route.query;
        this.$store.commit('setUser', JSON.parse(data.content));
        const router = redirect ? { path: redirect } : { name: 'home' };
        this.$router.push(router);
        this.$message.success('登录成功');
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  padding: 20px;
  width: 300px;
  background: #fff;
  border-radius: 5px;
}
.login-btn {
  width: 100%;
}
</style>
