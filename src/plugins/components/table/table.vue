<template>
  <div class="hl-table__container" v-loading="loading">
    <div class="empty" v-if="tableData.length === 0">
      <img src="../../../assets/img/empty.png" alt="没信息啦">
      <div class="empty-title">当前没有数据啦~</div>
    </div>
    <el-table v-if="tableData.length > 0" ref="table" :data="tableData">
      <el-table-column
        v-if="showNumber"
        fixed="left"
        width="70"
        label="序号"
        align="center"
        header-align="center"
      >
        <template v-slot="scope">
          <span>{{ scope.$index + (currentPage - 1) * currentPageSize + 1 }}</span>
        </template>
      </el-table-column>
      <slot></slot>
    </el-table>
    <el-pagination
      v-if="tableData.length > 0"
      class="text-right pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="currentPageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
 import { ResponseData } from 'core/types';

@Component
export default class HlTable extends Vue {
  @Prop() dataFun!: Function; // 外部调用列表接口
  @Prop() params: object; // 外部请求参数
  @Prop({ default: 10 }) pageSize: number; // 列表分页参数
  @Prop({ default: 1 }) pageNo: number;
  @Prop({ default: () => [5,10,15,20,25] }) pageSizes: Array<number>; // pagination
  @Prop({ default: false }) showNumber: boolean; // 是否展示序号

  private tableData = [];
  private total = 0;
  private currentPageSize = 10;
  private currentPage = 1;
  private loading = false;

  public reload () {
    this.init();
  }

  private async init () {
    const params = {
      pageSize: this.currentPageSize,
      pageNo: this.currentPage,
      ...this.params
    };
    this.loading = true;
    const respData: ResponseData = await this.dataFun(params);
    this.loading = false;
    if (respData.type === 'success') {
      this.tableData = respData.data.list;
      this.total = respData.data.total;
    }
  }

  @Emit('size-change')
  private handleSizeChange (pageSize) {
    this.currentPageSize = pageSize;
    this.init();
    return pageSize;
  }

  @Emit('current-change')
  private handleCurrentChange (page) {
    this.currentPage = page;
    this.init();
    return page;
  }

  created () {
    this.init();
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/scss/variable';

.hl-table__container {
  ::v-deep {
    .el-table {
      border: 1px solid $border-color;
    }
  }
  .pagination {
    margin-top: 10px;
  }

  .empty {
    margin-top: 100px;
    img {
      width: 243px;
      height: 213px;
    }
    .empty-title {
      margin-top: 20px;
      font-size: 16px;
      color: $primary-color;
      text-align: center;
    }
  }
}
</style>