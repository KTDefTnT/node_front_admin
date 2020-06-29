<template>
  <div class="layout">
    <el-menu
      class="layout-left"
      :default-active="activeIndex"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#a61b29">
      <el-submenu v-for="item in menus" :key="item.router" index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          {{ item.desc }}
        </template>
        <el-menu-item v-for="subItem in item.children" :key="subItem.router" index="index">
          <router-link :to="subItem.router">{{ subItem.desc }}</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="layout-right">
      <slot name="right" />
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Menus } from './core/menus';

@Component
export default class HelloWorld extends Vue {
  activeIndex = '1';
  menus: Array<object> = Menus;
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 60px);
  .layout-left {
    flex-basis: 220px;
  }
  
  .layout-right {
    flex: 1;
  }
}
  
</style>