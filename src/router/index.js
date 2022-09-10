import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../pages/Header'
import Products from '../pages/Products'
import Main from '../pages/Main'
import Favourites from '../pages/Favourites'
import Basket from '../pages/Basket'
import ProductPage from '../pages/ProductPage'
import Stores from '../pages/Stores'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Header,
    children:[
      {
        path: '/',
        component: Main
      },
      {
        path: '/products',
        component: Products,
        name: 'products'
      },
      {
        path: '/favourites',
        component: Favourites,
        name: 'favourites'
      },
      {
        path: '/basket',
        component: Basket,
        name: 'basket'
      },
      {
        path: '/product/:id/:skuId',
        component: ProductPage,
        name: 'productPage'
      },
      {
        path: '/stores',
        component: Stores,
        name: 'stores'
      }
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
