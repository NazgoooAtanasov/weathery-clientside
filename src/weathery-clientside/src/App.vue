<template>
  <div class="app" :class="typeof data.main != 'undefined' && data.main.temp > 16 ? 'app-hot' : ''">
    <main>
      <Header title = "Weathery"/>
      <SearchBox 
        @return-query="getQuery" 
        @keypress="fetchInfo"
      />
      <ResultBox v-if="typeof data.main != 'undefined'"
      :cityName = "data.name"
      :givenDate = "date"
      :givenDegree = "Math.round(data.main.temp)"
      :givenStatus = "data.weather[0].main"
      />
    </main>
  </div>
</template>

<script>
  import {ref} from 'vue';

  import Header from './components/Header/Header.vue';
  import SearchBox from './components/SearchBox/SearchBox.vue';
  import ResultBox from './components/ResultBox/ResultBox.vue';

  export default {

    setup() {
      const apiKey= process.env.VUE_APP_OPENWEATHERMAPAPIKEY;
      const apiUrl= "https://api.openweathermap.org/data/2.5/";

      const queryFromSearchBox = ref('');
      const data = ref({});
      const date = ref('');
      const dateNow = new Date();

      const fetchInfo = (event) => {
        if(event.key == "Enter"){
          fetch(`${apiUrl}weather?q=${queryFromSearchBox.value}&units=metric&appid=${apiKey}`)
          .then(res => {return res.json()})
          .then(setData);
          date.value = `${dateNow.getDate()} / ${dateNow.getMonth()} / ${dateNow.getFullYear()}`;
        }
      }
      const setData = (results) =>{
        data.value = results;
      }

      const getQuery = (value) =>{
        queryFromSearchBox.value = value;
      }

      return {
        data,
        date,
        fetchInfo,
        getQuery,
        SearchBox,
        ResultBox,
        Header,
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'montserrat', sans-serif;
  }

  .app {
     background-image: url('./assets/cold.jpg');
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
  }

  .app-hot{
    background-image: url('./assets/hot.jpg');
    transition: 0.4s;
  }
  main {
    min-height: 100vh;
    padding: 25px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
  }
</style>