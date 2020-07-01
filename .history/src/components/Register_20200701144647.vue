<template>
  <el-dialog title="注册" :visible.sync="dialogVisible">
    <el-form model="form" ref="form">

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="sure">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Register extends Vue {
  private dialogVisible = false;
  private form = {
    username: '',
    password: '',
    email: '',
    introduce: '',
    type: 1
  };
  @Emit()
  public sure () {
    this.$refs.form.validate((valid: boolean | any) => {
      if (valid) {
        return this.form;
      }
    });
  }
}
</script>

<style scoped>

</style>