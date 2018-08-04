<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="keyChange"></city-list>
    <city-alphabet @change="getKey" :cities="cities"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'

  import axios from 'axios'
  export default {
    name: "City",
    data: function () {
      return {
        cities: {},
        hotCities: [],
        keyChange: ""
      }
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
   /* mounted: function () {
      axios.get("/api/city.json")
        .then(this.getCity)
    },
    methods: {
      getCity: function (res) {
        res = res.data;
        this.cities = res.data.cities;
        this.hotCities = res.data.hotCities;
      }
    }*/
    methods: {
      getCityInfo: function () {
        axios.get('/api/city.json')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc(res){
        res = res.data;
        if(res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      },
      getKey: function (key) {
        this.keyChange = key
      }
    },
    mounted: function () {
      this.getCityInfo()
    }
  }
</script>

<style lang="stylus" scoped>

</style>
