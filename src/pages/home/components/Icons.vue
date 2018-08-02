<template>
  <div class="icons">
    <swiper>
      <swiper-slide  v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
      name: "HomeIcons",
      data: function () {
        return {
          swiperList: [{
            id: 1001,
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc: '景点门票游玩项目票'
          },{
          id: 1002,
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
            desc: '水上乐园'
        }, {
            id: 1003,
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
            desc: '游乐场'
          },{
            id: 1004,
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
            desc: '海洋馆'
          },{
            id: 1005,
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
            desc: '动植物园'
          },{
            id: 1006,
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
            desc: '玩转长隆'
          },{
            id: 1007,
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
            desc: '城市观光'
          },{
            id: 1008,
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png",
            desc: '海滨沙滩'
          },{
            id: 1009,
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png",
            desc: '汽车票'
          },{
            id: 1010,
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
            desc: '全部玩乐'
          }]
        }
      },
/*      computed: {
        pages: function () {
          let pages = [];
          for(let i=0; i<this.swiperList.length; i++) {
            let page = Math.floor(i/8);
            if(!pages[page]){
              pages[page] = []
            }
            pages[page].push(this.swiperList[i]);
          }
          return pages
        }
      }*/
      computed: {
        pages: function () {
          const pages = [];
          this.swiperList.forEach(function (item,index) {
            const page = Math.floor(index/8);
            if(!pages[page]){
              pages[page] = [];
            }
            pages[page].push(item)
          });
          return pages
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
    .icon-img
      position: absolute
      box-sizing: border-box
      padding: .1rem
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
</style>
