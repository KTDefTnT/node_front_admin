<template>
  <div class="header-contianer">
    <div class="header-content">
      这是一个header啦~~~
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Header extends Vue {
    @Prop() private msg!: string;
  }
</script>

<style lang="scss" scoped>
  .header-contianer {
    width: 100%;
    height: 60px;
    background: #68CEFD;
    .header-content {
      width: 1200px;
      margin: 0 auto;
    }
  }
</style>