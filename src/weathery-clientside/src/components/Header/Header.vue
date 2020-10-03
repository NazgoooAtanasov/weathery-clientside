<template>
  <div class="w-header">{{props.title}}</div>
</template>

<script>
export default {
    props:{
        title:String
    },
    setup(props) {
        return {props};
    }

}
</script>

<style>
 .w-header {
    padding: 25px 0px 25px 0px;
    text-align: center;
    color: #FFF;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }
</style>