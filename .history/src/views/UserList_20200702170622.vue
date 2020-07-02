<template>
  <div>
    <div class="search-contianer">
      
    </div>
    <el-table ref="Table" :data="tableData" highlight-current-row>
      <el-table-column property="username" label="用户名称"></el-table-column>
      <el-table-column property="email" label="邮箱"></el-table-column>
      <el-table-column property="phone" label="手机号码"></el-table-column>
      <el-table-column property="createTime" label="创建时间"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UserList extends Vue {
  
}
</script>

<style scoped>

</style>