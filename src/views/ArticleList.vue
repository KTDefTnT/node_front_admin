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
            <!-- <el-form-item label="邮箱">
              <el-input maxlength="100" v-model="params.email" placeholder="请输入邮箱"></el-input>
            </el-form-item> -->
          </el-col>
          <el-col :span="16" class="text-right">
            <el-button size="medium" icon="el-icon-plus" @click="reload">新增</el-button>
            <el-button type="primary" size="medium" icon="el-icon-search" @click="reload">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <hl-table ref="table" :data-fun="getDataFun">
      <el-table-column property="username" label="用户名称" header-align="center" align="center"></el-table-column>
      <el-table-column property="username" label="标题" header-align="center" align="center"></el-table-column>
      <el-table-column property="username" label="类别" header-align="center" align="center"></el-table-column>
    </hl-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ArtileList extends Vue {
  private getDataFun = this.$api.user.getUserList;
  private params = {
    username: ''
  }

  private reload () {
    this.$refs.table.reload();
  }
} 
</script>
