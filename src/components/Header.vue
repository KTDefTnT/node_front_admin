<template>
  <div class="header-contianer">
    <div class="header-content">
      <div v-if="isLogin"  class="action-btn pull-right" >
        <el-button size="medium" type="primary" @click="logout">退出</el-button>
      </div>
      <!-- <div class="action-btn pull-right" v-else>
        <el-button size="medium" type="primary">登录</el-button>
        <el-button size="medium" class="register">注册</el-button>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { ResponseData } from 'core/types';

  @Component
  export default class Header extends Vue {
    @Prop() private msg!: string;

    get isLogin () {
      return window.sessionStorage.getItem('isLogin') === 'login';
    }

    private async logout () {
      const data: ResponseData = await this.$api.user.logout();
      if (data.type === 'success') {
        window.sessionStorage.removeItem('isLogin');
        this.$router.push({ name: 'login' });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variable';
  .header-contianer {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: linear-gradient(to right, $info-gradient, $background-gradient-light 80%, $primary-gradient-light, $primary-gradient);
    .header-content {
      width: 1200px;
      height: 60px;
      margin: 0 auto;
      color: #fff;
      .action-btn {

      }
    }
  }
</style>