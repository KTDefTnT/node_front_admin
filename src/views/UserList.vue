<template>
  <div>
    <div class="search-contianer">
      <el-form :model="params" label-width="100px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="用户名称">
              <el-input maxlength="100" v-model="params.username" placeholder="请输入用户名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <!-- <el-form-item label="注册日期">
              <el-date-picker v-model="params.createTime" type="date" placeholder="请选择注册日期" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item> -->
            <el-form-item label="邮箱">
              <el-input maxlength="100" v-model="params.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" class="text-right">
            <el-button type="primary" size="medium" icon="el-icon-search" @click="reload">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <hl-table ref="table" :data-fun="getDataFun" :params="params" highlight-current-row>
      <el-table-column property="username" label="用户名称" header-align="center" align="center"></el-table-column>
      <el-table-column property="email" label="邮箱" header-align="center" align="center"></el-table-column>
      <el-table-column property="phone" label="手机号码" header-align="center" align="center"></el-table-column>
      <el-table-column property="chu" label="注册日期" header-align="center" align="center">
        <template scope="scope">
          {{ scope.row.create_time | date('YYYY-MM-DD') }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="80" header-align="center" align="center">
        <template scope="scope">
          <el-button size="mini" type="danger" plain @click="handleDelete(scope.row.id, scope.row.username)">删除</el-button>
        </template>
      </el-table-column>
    </hl-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ResponseData } from 'core/types';

@Component
export default class UserList extends Vue {
  private getDataFun = this.$api.user.getUserList;
  private params = {
    email: '',
    username: ''
  };

  private reload () {
    this.$refs.table.reload();
  }

  private async handleDelete (id: number, username: string) {
    this.$confirm(`您确定要删除用户<${username}>吗`, '提示', {
      type: 'warning'
    }).then(async () => {
      const respData: ResponseData = await this.$api.user.deleteUser({ id });
      if (respData.type === 'success') {
        this.reload();
      }
    }).catch(() => {
      console.log('取消了');
    });
  }
}
</script>

<style scoped>

</style>nc 