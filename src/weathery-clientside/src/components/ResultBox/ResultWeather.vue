<template>
  <div class="w-weather">
        <div class="w-degree">{{ props.givenDegree }}°</div>
        <div class="w-status">{{ props.givenStatus }}</div>
    </div>
</template>

<script>
export default {
    props:{
        givenDegree: Number,
        givenStatus: String
    },
    setup(props){
        return {props};
    }

}
</script>

<style>
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