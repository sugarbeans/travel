<template>
  <ul class="list">
    <li class="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="alphaClick(item)"
        v-for="(item) of letters" :key="item" :ref="item">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object
    },
    computed: {
      letters: function () {
        const letters = [];
        for(let i in this.cities){
          letters.push(i)
        }
        return letters
      }
    }
    ,
    data: function () {
      return {
        touchStatus: false,
        startY: 0,
        timer: 0
      }
    },
    updated(){
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      alphaClick: function (key) {
        this.$emit("change",key)
      },
      /*alphaClick: function (e) {
        this.$emit("change",e.target.innerText)
      }*/
      handleTouchStart: function () {
        this.touchStatus = true
      },
      handleTouchMove: function (e) {
        if(this.touchStatus) {
          if(this.timer) {
            clearTimeout(this.timer);
          }

          //setTimeout中的this需要定义,如使用箭头函数就不需要定义this
          /*const that_ = this;
          this.timer = setTimeout(function(){
            const touchY = e.touches[0].clientY-79;
            const index = Math.floor((touchY-that_.startY)/20);
            console.log("aaaaa"+that_.startY);
            if(index>0 && index<that_.letters.length) {
              that_.$emit('change', that_.letters[index]);
              console.log("aaaaa");
            }
          },16);*/

          this.timer = setTimeout(()=>{
            const touchY = e.touches[0].clientY-79;
            const index = Math.floor((touchY-this.startY)/20);
            if(index>=0 && index<this.letters.length) {
              this.$emit('change', this.letters[index]);
            }
          },16)
        }
      },
      handleTouchEnd: function () {
        this.touchStatus = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    bottom: 0
    width: .4rem
    right:0
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
