<template>
  <div class="login-container">
    <Header />
    <h1>This is an login page</h1>
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
