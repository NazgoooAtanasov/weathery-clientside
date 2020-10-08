<template>
  <div v-if="errors">
    <ul :key="err" v-for="err in errors">
      <li>{{err}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  props:{
    errors: []
  },
  setup(props){
    return {props};
  }
});
</script>

<style scoped>

</style>