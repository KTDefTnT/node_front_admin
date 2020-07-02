<template>
  <div>
    <div class="search-contianer">
      
    </div>
    <el-table ref="Table" :data="tableData" highlight-current-row>
      <el-table-column property="username" label="用户名称"></el-table-column>
      <el-table-column property="email" label="邮箱"></el-table-column>
      <el-table-column property="phone" label="手机号码"></el-table-column>
      <el-table-column property="chu" label="创建时间">
        <template scope="scope">
          {{ getDate(scope.row.create_time) }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="80">
        <template scope="scope">
          <el-button size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';
import { ResponseData } from 'core/types';

@Component
export default class UserList extends Vue {
  private tableData = [];

  private getDate (time: any) {
    return moment(time).format('YYYY-MM-DD hh:mm');
  }

  private async handleDelete (id: number) {
    const respData: ResponseData = await this.$api.user.deleteUser({ id });
    if (respData.type === 'success') {
      this.getUserList();
    }
  }

  private async getUserList () {
    const respData: ResponseData = await this.$api.user.getUserList();
    console.log('respData', respData);
    this.tableData = respData.data;
  }
  
  async created () {
    this.getUserList();
  }
}
</script>

<style scoped>

</style>nc 