<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'
  import {mapState} from 'vuex'
    export default {
      name: "Home",
      data: function () {
        return {
          lastCity: '',
          swiperList: [],
          iconList: [],
          recommendList: [],
          weekendList: []
        }
      },
      computed: {
        ...mapState(['city'])
      },
      components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
      },
      methods: {
        getHomeInfo: function () {
          axios.get('/api/index.json?city=' + this.city)
            .then(this.getHomeSucc);
        },
        getHomeSucc: function (res) {
          res = res.data;
          if(res.ret && res.data){
            const data = res.data;
            this.swiperList = data.swiperList;
            this.iconList = data.iconList;
            this.recommendList = data.recommendList;
            this.weekendList = data.weekendList;
          }
        }
      },
      mounted: function () {
        this.lastCity = this.city
        this.getHomeInfo();
      },
      activated: function () {
        if(this.lastCity !== this.city ) {
          this.lastCity = this.city
          this.getHomeInfo()
        }
      }
    }
</script>

<style scoped>

</style>
