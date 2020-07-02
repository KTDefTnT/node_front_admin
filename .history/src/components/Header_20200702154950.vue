<template>
  <div class="header-contianer">
    <div class="header-content">
      <div class="action-btn pull-right" v-if="isLogin">
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

  @Component
  export default class Header extends Vue {
    @Prop() private msg!: string;

    get isLogin () {
      return window.sessionStorage.getItem('isLogin') === 'login';
    }

    private logout () {
      this.$api.user.logout();
    }
  }
</script>

<style lang="scss" scoped>
  .header-contianer {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #545c64;
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