import Vue from 'vue'
import Vuex from 'vuex'
// import category from './modules/category'
import products from './modules/products'
import favourites from './modules/favourites'
// import promo from './modules/promo'
import cart from './modules/cart'
import reviews from './modules/reviews'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // category: category,
    products: products,
    favourites: favourites,
    cart: cart,
    reviews: reviews,
    // promo: promo
  }
})
