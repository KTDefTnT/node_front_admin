<template>
  <div class="login-container">
    <Header />
    <div class="login-content">
      <el-form>
        <el-form-item>
          
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header';

@Component
export default class Login extends Vue {
  components: {
    Header
  }
}
</script>
