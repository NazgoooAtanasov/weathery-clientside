<template>
  <div class="w-location">
    <div class="w-cityname">{{ props.cityName }}</div>
    <div class="w-datetime">{{ props.givenDate }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    cityName: String,
    givenDate: String,
  },
  setup(props) {
    return { props };
  },
});
</script>

<style>
.w-location .w-cityname {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.w-location .w-datetime {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
</style>