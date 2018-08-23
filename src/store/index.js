import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
} catch(e){}

export default new Vuex.Store({
  state: {
    city: localStorage.city ||'上海',
    country: 'england'
  },
/*  actions: {
    changeCity: function (ctx, childCity) {
      ctx.commit('cityChange', childCity)
    }
  },*/
  mutations: {
    cityChange: function (state, childCity) {
      state.city = childCity
      try{
        localStorage.city = childCity
      }catch(e){}
    }
  },
  getters: {
    doubleCity: function(state){
      return state.city+"市"
    }
  }
})
