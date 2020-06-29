<template>
  <div class="login-container">
    <Header />
    <div class="login-content">
      <div class="title">登录</div>
      <el-form :model="form">
        <el-form-item  prop="userName">
          <el-input v-model="form.userName" placeholder="请输入账户名称">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" placeholder="请输入密码">
          <el-input type="password" v-model="form.password">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../components/Header.vue';

@Component({
  components: {
    Header
  }
})
export default class Login extends Vue {
  form = {
    username: '',
    password: ''
  }
}
</script>
