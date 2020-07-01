<template>
  <el-dialog title="注册" :visible.sync="dialogVisible">
    <el-form model="form" ref="form">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password" v-model="form.comPassword"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="个人介绍">
        <el-input type="textarea" row="4" v-model="form.introduce"></el-input>
      </el-form-item>
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
    comPassword: '',
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