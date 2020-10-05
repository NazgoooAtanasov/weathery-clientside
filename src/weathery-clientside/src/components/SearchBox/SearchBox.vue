<template>
  <InputField
      type="text"
      placeholder="search..."
      @return-value="getQuery"
      @keypress="(e) => e.key == 'Enter' ? $emit('return-query', query) : ''"
  />
</template>

<script lang="ts">
import { ref,defineComponent  } from 'vue'
import InputField from "../InputField/InputField.vue";

    export default defineComponent({
      components:{
        InputField
      },
        setup(){
            const query = ref('');
            const getQuery = (value: string) : void =>{
              query.value = value;
            }
            return {query, getQuery}
        }
    });
</script>

<style scoped>
</style>