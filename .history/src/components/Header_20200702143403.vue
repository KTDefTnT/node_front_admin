<template>
  <div class="header-contianer">
    <div class="header-content">
      这是一个header啦~~~
      <div class="action-btn">
        <el-button size="medium" type="primary">登录</el-button>
        <el-button size="medium" class="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Header extends Vue {
    @Prop() private msg!: string;

    get isLogin () {
      return window.sessionStorage.getItem('isLogin');
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
      margin: 0 auto;
      color: #fff;
    }
  }
</style>