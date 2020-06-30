<template>
  <div class="home">
    <div>
      <mavon-editor 
        v-model="content" 
        ref="md" 
        @change="change" 
        style="min-height: 600px"
        :ishljs="true"
      />

      <!-- <button @click="submit">提交</button> -->
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  content = ''

  change (val: string, html) {
    console.log('change', html);
  }
}
</script>
<style lang="scss" scoped>

</style>
