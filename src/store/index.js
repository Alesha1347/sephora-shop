import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import products from './modules/products'
// import promo from './modules/promo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category: category,
    products: products,
    // promo: promo
  }
})
