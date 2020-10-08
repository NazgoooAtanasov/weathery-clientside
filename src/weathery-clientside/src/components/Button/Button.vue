<template>
  <button class="w-button">{{props.title}}</button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props:{
    title: String,
  },
  setup(props){
    return{props}
  }
});
</script>

<style scoped>
.w-button {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.05);
}
.w-button:active{
  background-color: rgba(255, 255, 255, 0.50);
}
</style>