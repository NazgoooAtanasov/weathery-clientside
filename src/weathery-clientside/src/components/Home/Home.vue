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

import Header from "../Header/Header.vue";
import SearchBox from "../SearchBox/SearchBox.vue";
import ResultBox from "../ResultBox/ResultBox.vue";

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
</style>
