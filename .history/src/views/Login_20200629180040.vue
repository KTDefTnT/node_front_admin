<template>
  <div class="login-container">
    <Header />
    <div class="login-content">
      <div class="title">登录</div>
      <el-form :model="form">
        <el-form-item  prop="userName">
          <el-input v-model="form.userName" placeholder="请输入账户名称">
            <i slot="prefix" class="icon yonghudenglu"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码">
            <i slot="prefix" class="icon mima"></i>
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
