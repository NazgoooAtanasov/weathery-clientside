<template>
  <div class="app" :class="typeof data.main != 'undefined' && data.main.temp > 16 ? 'app-hot' : ''">
    <main>
      <div class="w-header">Wheatery</div>
      <!--Todo: Separate in component -->
      <div class="w-searchbox">
        <input 
        class="w-searchbar" 
        placeholder="search..." 
        v-model="query" 
        @keypress="fetchInfo"
        />
      </div>
      <!-- Todo: Separate in component -->
      <div class="w-search-result" v-if="typeof data.main != 'undefined'">
      <!-- Todo: Separate in component -->
        <div class="w-location">
          <div class="w-cityname">{{ data.name }}</div>
          <div class="w-datetime">03 / 10 / 2020</div>
        </div>
        <!-- Todo: Separate in component -->
        <div class="w-weather">
          <div class="w-degree">{{ Math.round(data.main.temp) }}°</div>
          <div class="w-status">{{ data.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import {
    ref
  } from 'vue';

  export default {
    setup() {
      const apiKey= "fdd073bae48e03a92fe528f5058876c0";
      const apiUrl= "https://api.openweathermap.org/data/2.5/";

      const query = ref('');
      const data = ref({});

      const fetchInfo = (event) => {
        if(event.key == "Enter"){
          fetch(`${apiUrl}weather?q=${query.value}&units=metric&appid=${apiKey}`)
          .then(res => {return res.json()})
          .then(setData);
        }
      }

      const setData = (results) =>{
        data.value = results;
      }

      return {
        query,
        fetchInfo,
        data
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

  .w-header {
    padding: 25px 0px 25px 0px;
    text-align: center;
    color: #FFF;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }

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

  .w-location .w-cityname {
    color: #FFF;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }

  .w-location .w-datetime {
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
  }

  .w-weather {
    text-align: center;
  }

  .w-weather .w-degree {
    display: inline-block;
    padding: 10px 25px;
    color: #FFF;
    font-size: 102px;
    font-weight: 900;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0px;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }

  .w-weather .w-status {
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }
</style>