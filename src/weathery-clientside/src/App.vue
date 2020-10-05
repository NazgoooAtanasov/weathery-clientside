<template>
  <div
    class="app"
    :class="
      typeof dataFromReq.main != 'undefined' && dataFromReq.main.temp > 16
        ? 'app-hot'
        : ''
    "
  >
    <main>
      <Header title="Weathery" />
      <SearchBox @return-query="getQuery" @keypress="fetchInfo" />
      <ResultBox
        v-if="typeof dataFromReq.main != 'undefined'"
        :cityName="dataFromReq.name"
        :date="date"
        :degree="Math.round(dataFromReq.main.temp)"
        :status="dataFromReq.weather[0].main"
      />
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Axios from "axios";

import Header from "./components/Header/Header.vue";
import SearchBox from "./components/SearchBox/SearchBox.vue";
import ResultBox from "./components/ResultBox/ResultBox.vue";

export default defineComponent({
  components: {
    Header,
    SearchBox,
    ResultBox,
  },

  setup() {
    const apiKey = process.env.VUE_APP_OWMKEY;
    const apiUrl = "https://api.openweathermap.org/data/2.5/";

    const queryFromSearchBox = ref("");
    const dataFromReq = ref({});
    const date = ref("");
    const dateNow = new Date();

    const fetchInfo = async (event: any): Promise<void> => {
      if (event.key == "Enter") {
        const { data } = await Axios.get(
          `${apiUrl}weather?q=${queryFromSearchBox.value}&units=metric&appid=${apiKey}`
        );

        date.value = `${dateNow.getDate()} / ${dateNow.getMonth()} / ${dateNow.getFullYear()}`;
        dataFromReq.value = data;
      }
    };

    const getQuery = (value: string): void => {
      queryFromSearchBox.value = value;
    };

    return {
      dataFromReq,
      date,
      fetchInfo,
      getQuery,
    };
  },
});
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
