<template>
  <div class="container" @click="handleNone" >
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--    <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>
    </div>

  </div>
</template>

<script>
    export default {
      name: "CommonGallary",
      props: {
        imgs: {
          type: Array,
          default: function () {
            return []
          }
        }
      },
      data: function () {
        return {
/*          isShow: true,*/
          swiperOption: {
            pagination: '.swiper-pagination',
            paginatonType: 'fraction',
            observeParents: true,
            observer: true
          }
        }
      },
      methods: {
        handleNone: function () {
/*          this.isShow = false*/
          this.$emit('close')
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
