<template>
  <div>
    <div class="banner" @click="handleShowGallary">
      <img src="//img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_600x330_3b1186e2.jpg"
           class="banner-img" alt="">
      <div class="banner-info">
        <div class="banner-title">深圳欢乐谷(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe606;</span>39</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleNotShow"></common-gallary>
  </div>

</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
    export default {
      name: "DetailBanner",
      data: function () {
        return {
          showGallary: false,
          imgs: []
        }
      },
      components: {
        CommonGallary
      },
      methods: {
        handleShowGallary: function () {
          this.showGallary =  true
        },
        handleNotShow: function () {
          this.showGallary = false
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
  .banner-info
    display: flex
    position: absolute
    line-height: .6rem
    left: 0
    right: 0
    bottom: 0
    color: #fff
    background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    .banner-number
      height: .32rem
      line-height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      font-size: .24rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      .banner-icon
        font-size: .24rem
</style>
