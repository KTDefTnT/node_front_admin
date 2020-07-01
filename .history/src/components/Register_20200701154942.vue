<template>
  <el-dialog title="注册" width="560px" :visible.sync="dialogVisible" @close="handleClose">
    <el-form :model="form" ref="form" label-width="80px" class="dialog-form">
      <el-form-item label="用户名" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
        <el-input maxlength="100" v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
        <el-input maxlength="20" type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" :rules="[{ required: true, message: '请确认密码', trigger: 'blur' }, { validator: passwordValidator, trigger: '' }]">
        <el-input maxlength="20" type="password" v-model="form.comPassword" placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :rules="[{ required: true, message: '请输入邮箱', trigger: 'blur' }, { validator: emailValidator, trigger: '' }]">
        <el-input maxlength="100" v-model="form.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input maxlength="11" row="4" v-model="form.phone" placeholder="请输入您的手机号码"></el-input>
      </el-form-item>
      <el-form-item label="个人介绍">
        <el-input maxlength="500" type="textarea" row="4" v-model="form.introduce" placeholder="请输入您的个人介绍"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="text-center">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="sure">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ResponseData } from 'core/types';

@Component
export default class Register extends Vue {
  private dialogVisible = true;
  private form = {
    username: '',
    password: '',
    comPassword: '',
    email: '',
    phone: '',
    introduce: '',
    type: 1
  };

  /**
   * 校验两次密码
   */
  private passwordValidator (rule: Array<object> | object, value: string, callback: Function) {
    if (this.form.password !== value) {
      callback(new Error('两次密码不一致，请重新输入'));
    }
    callback();
  }

  /**
   * 校验邮箱地址是否合理
   */
  private emailValidator (rule: Array<object> | object, value: string, callback: Function) {
    if (!value) {
      callback(new Error('请输入邮箱地址'));
    }
    const reg = new RegExp(
      '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
    ); //正则表达式
    if (!reg.test(value)) {
      callback(new Error('请输入正确的邮箱地址'))
    }
    callback();
  }

  private handleClose () {
    this.dialogVisible = false;
  }

  public sure () {
    this.$refs.form.validate(async (valid: boolean) => {
      if (valid) {
        const data: ResponseData = await this.$api.user.register({...this.form});
        console.log('xxx', data);
      }
    });
  }

  public show () {
    this.dialogVisible = true;
  }
}
</script>

<style scoped>

</style>