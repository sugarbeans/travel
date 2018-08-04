<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名和拼音">
    </div>
    <div class="search-content">
      <ul>
        <li v-for="item of list">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data: function () {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    watch: {
      keyword: function () {
        if(this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(()=>{
          const result = [];
          for(let i in this.cities) {
            this.cities[i].foreach((value)=>{
              if (value.spell.indexof(this.keyword)>-1 ||
              value.name.indexOf(this.keyword)>-1 ){
                result.push(value);
              }
            })
          }
          this.list = result;
        },100)
      }
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
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    right: 0
    left: 0
    bottom: 0
    background: green
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
</style>
