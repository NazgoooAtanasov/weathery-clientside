<template>
    <ResultLocation 
    :cityName = "cityName"
    :givenDate = "givenDate"
    />
    <ResultWeather 
    :givenDegree = "givenDegree"
    :givenStatus = "givenStatus"
    />
</template>

<script>
    import ResultLocation from './ResultLocation.vue';
    import ResultWeather from './ResultWeather.vue';
    export default {
        props: {
            cityName: String,
            givenDate: String,
            givenDegree: Number,
            givenStatus: String
        },
        setup(props) {
            return {
                props,
                ResultLocation,
                ResultWeather
            };
        }
    }
</script>

<style>
</style>