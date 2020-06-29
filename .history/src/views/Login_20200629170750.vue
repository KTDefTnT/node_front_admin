<template>
  <div class="login-container">
    <Header />
    <div class="login-content">
      <el-form :model="form">
        <el-form-item  prop="userName">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from 'components/Header.vue';

@Component({
  components: {
    Header
  }
})
export default class Login extends Vue {
  form = {
    username: '',
    password: ''
  }
}
</script>
