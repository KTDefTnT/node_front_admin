<template>
  <el-dialog title="注册" :visible.sync="dialogVisible">
    <el-form model="form" ref="form">
      <el-form-item label="用户名" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" :rules="[{ required: true, message: '请确认密码', trigger: 'blur' }, { validator: passwordValidator, trigger: '' }]">
        <el-input type="password" v-model="form.comPassword" placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :rules="[{ required: true, message: '请输入邮箱', trigger: 'blur' }, { validator: emailValidator, trigger: '' }]">
        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="个人介绍">
        <el-input type="textarea" row="4" v-model="form.introduce" placeholder="请输入您的个人介绍"></el-input>
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
// import validator from 'core/validator';

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

  private passwordValidator (rule: Array<object> | object, value: string, callback: Function) {
    if (this.form.password !== value) {
      callback(new Error('两次密码不一致，请重新输入'));
    }
    callback();
  }

  @Emit()
  public sure () {
    this.$refs.form.validate((valid: boolean) => {
      if (valid) {
        return this.form;
      }
    });
  }
}
</script>

<style scoped>

</style>