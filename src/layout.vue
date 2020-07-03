<template>
  <div class="layout">
    <el-menu
      class="layout-left"
      :default-active="activeIndex">
      <el-submenu v-for="(item, index) in menus" :key="item.router" :index="index + ''">
        <template slot="title">
          <i class="el-icon-menu"></i>
          {{ item.desc }}
        </template>
        <el-menu-item v-for="(subItem, subIndex) in item.children" :key="subItem.router" :index="`${index + ''}-${subIndex}`">
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
  min-height: calc(100vh - 60px);
  .layout-left {
    flex-basis: 220px;
  }
  
  .layout-right {
    flex: 1;
    padding: 20px;
  }
}
  
</style>