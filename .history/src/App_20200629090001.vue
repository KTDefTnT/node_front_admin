<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <layout />
  </div>
</template>

<script>
import layout from './layout.vue'

export default {
  name: 'app',
  components: {
    layout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
