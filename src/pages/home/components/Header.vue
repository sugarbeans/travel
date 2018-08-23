<template>
    <div class="header">
      <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
      <div class="header-input"><span class="iconfont">&#xe632;</span>输入景点,城市或者国家</div>
      <router-link to="/city">
        <div class="header-right">{{this.doubleCity}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
      </router-link>
    </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
    export default {
        name: "HomeHeader",
      computed: {
        ...mapState(['city','country']), //vuex的数据映射
          ...mapGetters(['doubleCity']) //mapGetters
      }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
.header
  display: flex
  line-height: .88rem
  background-color: $bgColor
  color: #fff
  .header-left
    width: .80rem
    float: left
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    height: .6rem
    line-height: .6rem
    margin-top: .12rem
    background: #fff
    padding-left: .2rem
    border-radius: .08rem
    color: #ccc
  .header-right
    min-width: 1.08rem
    padding: 0 .1rem
    float: right
    color: #fff
    text-align: center
    .arrow-icon
      font-size: .24rem
</style>
