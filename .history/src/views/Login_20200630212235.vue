<template>
  <div class="login-container">
    <Header />
    <div class="login-content">
      <div class="title">登录</div>
      <el-form :model="form" ref="form">
        <el-form-item  prop="userName">
          <el-input v-model="form.userName" placeholder="请输入账户名称">
            <i slot="prefix" class="icon iconfont icon-yonghu"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码">
            <i slot="prefix" class="icon iconfont icon-mima"></i>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button class="login-btn" type="primary" @click="handleLogin">登录</el-button>
      <div class="others">第三方登录</div>
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
  };

  handleLogin () {
    this.$refs.form.validate((valid: boolean | string) => {
      if (valid) {
        const resgiter = (obj: object) => {
          return this.axios.post('/api/register', obj).then(res => {
            console.log('xxx', res);
            return res.body;
          });
        }
       resgiter(this.form).then(res => {
         console.log(res);
       })
      }
    });
  }
  created () {
    console.log(this);
  }
}
</script>
<style lang="scss">
@import '../assets/scss/variable.scss';
.login-container {
  height: 100vh;
  position: relative;
  background-image: url('../assets/img/login.png'), radial-gradient(circle at 25% 50%, #a2ceed, #5391d7, #549ddb);
  background-repeat: no-repeat;
  background-position: top 45vh left 10vw, 0px 0px;
  // background-image: ;
  .login-content {
    position: absolute;
    top: 120px;
    right: 120px;
    width: 360px;
    height: 400px;
    padding: 45px 30px;
    border: 1px solid $border-color;
    border-radius: 4px;
    box-shadow: 0px 0px 5px 0px #f6f6f6;
    background-color: #fff;
    .title {
      font-size: 18px;
      font-weight: 700;
      padding-bottom: 35px;
      letter-spacing: 1.2em;
      text-align: center;
      color: $primary-color;
    }

    .login-btn {
      width: 100%;
      margin: 10px 0px 15px;
    }

    .others {
      font-size: 14px;
      color: #666;
    }
    
  }
}
</style>
