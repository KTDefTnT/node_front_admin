<template>
  <div class="layout">
    <el-menu>

    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() menus!: Array;
}
</script>

<style lang="scss" scoped>

</style