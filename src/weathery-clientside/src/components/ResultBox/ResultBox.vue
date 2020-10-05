<template>
  <ResultLocation :cityName="cityName" :date="date" />
  <ResultWeather :degree="degree" :status="status" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResultLocation from "./ResultLocation.vue";
import ResultWeather from "./ResultWeather.vue";

export default defineComponent({
  components:{
    ResultLocation,
    ResultWeather
  },
  props: {
    cityName: String,
    date: String,
    degree: Number,
    status: String,
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style>
</style>