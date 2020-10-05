<template>
  <div class="w-inputfield">
    <input
        class="w-inputbox"
        :type="props.type"
        :placeholder="props.placeholder"
        v-model="value"
        @keypress="(e) => e.key == 'Enter' ? $emit('return-value', value) : ''"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent,ref} from "vue";

export default defineComponent({
  props:{
    type: String,
    placeholder: String,
  },

  setup(props){
    const value = ref('');
    return{props,value};
  }
});
</script>

<style scoped>
.w-inputfield .w-inputbox{
  display: block;
  width: 100%;
  color: #313131;
  font-size: 20px;

  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
  padding: 15px;
}
.w-inputfield {
  width: 100%;
  margin-bottom: 30px;
}
</style>