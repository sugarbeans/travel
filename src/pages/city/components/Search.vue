<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名和拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="border-bottom search-item" @click="handleChangeCity(item.name)"
            :key="item.id" v-for="item of list">{{item.name}}</li>
        <li class="border-bottom search-item" v-show="hasNullData">没有找到匹配的选项</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscorll from 'better-scroll'
  import {mapMutations} from 'vuex'
  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data: function(){
      return {
        list: [],
        keyword: '',
        timer: null
      }
    },
    methods: {
      handleChangeCity: function (city) {
        //this.$store.commit('cityChange', city)

        this.cityChange(city)
        this.$router.push('/')
      },
      ...mapMutations(['cityChange']) //方法映射
    },
    computed: {
      hasNullData: function () {
        return !this.list.length
      }
    },
    watch: {
      keyword: function () {
        if(this.timer) {
          clearTimeout(this.timer)
        }
        if(!this.keyword){
          this.list = [];
          return
        }
        this.timer = setTimeout(()=>{
          const result = [];
          for(let i in this.cities){
            this.cities[i].forEach((item)=>{
              if(item.spell.indexOf(this.keyword)>-1 ||
              item.name.indexOf(this.keyword)>-1){
                result.push(item)
              }
            })
          }
          this.list = result
        },100)
      }
    },
    mounted: function () {
      this.scroll = new Bscorll(this.$refs.search)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      height: .62rem
      line-height: .62rem
      padding: 0 .1rem
      width: 100%
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    position: absolute
    background: #ccc
    z-index: 1
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
</style>
