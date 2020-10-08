<template>
  <router-view></router-view>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  components:{
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

.app {
  background-image: url("./assets/cold.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

.app-hot {
  background-image: url("./assets/hot.jpg");
  transition: 0.4s;
}
main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.75)
  );
}
</style>
