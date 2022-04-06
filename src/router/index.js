import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../pages/Header'
import Products from '../pages/Products'
import Main from '../pages/Main'
import Favourites from '../pages/Favourites'
import Basket from '../pages/Basket'

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
