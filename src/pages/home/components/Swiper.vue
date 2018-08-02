<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--    <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
  import swiper1 from '@/assets/images/swiper_01.jpg'
  import swiper2 from '@/assets/images/swiper_02.jpg'
  import swiper3 from '@/assets/images/swiper_03.jpg'
  import swiper4 from '@/assets/images/swiper_04.jpg'
  import swiper5 from '@/assets/images/swiper_05.jpg'
  export default {
    name: "HomeSwiper",
    data: function () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
        },
        swiperList: [
          /*{id: 1001, imgUrl: "http://img1.qunarzz.com/piao/fusion/1807/e8/ad9398da40eb6402.jpg_750x200_f9e744db.jpg"},
          {id: 1002, imgUrl: "http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg"},
          {id: 1003, imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/e8/14b75b1c81fbe702.jpg_750x200_e6d4f1f1.jpg"},
          */
          {id: 1001, imgUrl: swiper1},
          {id: 1002, imgUrl: swiper2},
          {id: 1003, imgUrl: swiper3},
          {id: 1004, imgUrl: swiper4},
          {id: 1005, imgUrl: swiper5}
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>>.swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom:26.67%
    background: #666
    .swiper-img
      width: 100%
</style>
