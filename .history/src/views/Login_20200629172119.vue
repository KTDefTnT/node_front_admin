<template>
  <div class="login-container">
    <Header />
    <div class="login-content">
      <el-form :model="form">
        <el-form-item  prop="userName">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../components/Header.vue';

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
