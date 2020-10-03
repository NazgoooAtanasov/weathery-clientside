<template>
    <div class="w-searchbox">
        <input class="w-searchbar" 
        placeholder="search..." 
        v-model="query" 
        @keypress="(e) => e.key == 'Enter' ? $emit('return-query', query) : ''"
        />
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        setup(){
            const query = ref('');
            return {query}
        }
    }
</script>

<style>
.w-searchbox {
    width: 100%;
    margin-bottom: 30px;
  }

  .w-searchbox .w-searchbar {
    display: block;
    width: 100%;
    padding: 15px;

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
  }
  
  .w-searchbox .w-searchbar:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
  }

</style>