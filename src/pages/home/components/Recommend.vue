<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link :to="'/detail/'+ item.id" tag="li" v-for="(item,index) of recommendList" :key="index" class="item border-bottom">
          <img :src="item.imgUrl" alt="" class="item-img" />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      'recommendList': Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    display: flex
    overflow: hidden
    height: 2rem;
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .15rem
    .item-info
      flex: 1
      padding: .15rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .30rem
        margin-top: .16rem
        background: #ff9300
        padding: .12rem
        border-radius: .06rem
        color: #fff
</style>
