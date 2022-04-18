import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/UI/index'
import api from './api'

Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// let StarRating = require('vue-star-rating');
import StarRating from 'vue-star-rating'
Vue.component('star-rating', StarRating);

components.forEach(component =>{
  Vue.component(component.name, component)
})

Vue.prototype.$api = api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
