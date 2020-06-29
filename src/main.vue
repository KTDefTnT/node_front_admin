<template>
  <div>
    <Header />
    <layout>
      <router-view slot="right"></router-view>
    </layout>
  </div>
</template>

<script lang="ts">
  import layout from './layout.vue'
  import Header from 'components/Header';
  import Vue from 'vue'

  export default Vue.extend({
    components: {
      layout,
      Header
    }
  })
</script>

<style scoped>

</style>