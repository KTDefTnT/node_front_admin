<template>
  <div class="header-contianer">
    <div>这是一个header啦~~~</div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Header extends Vue {
    @Prop() private msg!: string;
  }
</script>

<style scoped>

</style>