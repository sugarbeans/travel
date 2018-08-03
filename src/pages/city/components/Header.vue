<template>
  <div>
    <div class="header">
      <router-link to="/"><div class="iconfont back-icon">&#xe624;</div></router-link>
      城市选择</div>
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .back-icon
      float: left
      width: .80rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
