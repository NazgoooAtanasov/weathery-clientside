<template>
  <div class="w-weather">
    <div class="w-degree">{{ props.degree }}°</div>
    <div class="w-status">{{ props.status }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    degree: Number,
    status: String,
  },
  setup(props) {
    return { props };
  },
});
</script>

<style scoped>
.w-weather {
  text-align: center;
}

.w-weather .w-degree {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.w-weather .w-status {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>