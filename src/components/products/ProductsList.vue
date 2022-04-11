<template>
  <div class="products__item"
  @mouseleave="isShowQuicklook = false">
  <router-link :to="{name: 'productPage', params:{id: product.productId, skuId: product.currentSku.skuId}}">
      <img class="product__img" 
      :src="product.heroImage"
      @mouseenter="isShowQuicklook = true">
  </router-link>
      <div class="product__info"
      @mouseenter="isShowQuicklook = false">
        <router-link class="product__brand-link" :to="{name: 'productPage', params:{id: product.productId, skuId: product.currentSku.skuId}}">
        <div class="product__brand">{{ product.brandName }}</div>
        </router-link>
          <router-link class="product__name-link" :to="{name: 'productPage', params:{id: product.productId, skuId: product.currentSku.skuId}}">
          <div class="product__name">{{ product.displayName }}</div>
          </router-link>
        <div class="product__price">{{ product.currentSku.listPrice }}</div>
      </div>
      <div v-if="isShowQuicklook" 
      class="product__quicklook"
      @click="this.isShowProductInfo = !this.isShowProductInfo">
        Quicklook
      </div>
      <div @click="setFav(product)"
      >
          <b-icon 
          class="product__favourites"
          :icon="hearth"></b-icon>
      </div>
      <AddButtonToBasket
      :product="product"
      />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddButtonToBasket from '../quicklook/AddButtonToBasket.vue'
export default {
    components:{AddButtonToBasket},
    props:{
        product:{
            type: Object,
            default: () => {}
        }
    },
    data(){
        return{
            isShowQuicklook: false,
            hearth: 'heart',
            isShowProductInfo: false
        }
    },
    computed:{
        ...mapGetters({
            FAVOURITES: 'favourites/FAVOURITES'
        })
    },
    methods:{
        ...mapActions({
            SET_FAVOURITES: 'favourites/SET_FAVOURITES',
        }),
        setFav(product){
            this.SET_FAVOURITES(product)
            return this.FAVOURITES.find(item =>{
                if(item.productId === product.productId){
                    this.hearth = 'heart-fill'
                } else {
                    this.hearth = 'hearth'
                }
            })
        },
    }
}
</script>

<style>
.products__item {
    width: 250px;
    height: 400px;
    margin: 20px;
    position: relative;
}
.product__img {
    width: 100%;
    margin-bottom: 15px;
    cursor: pointer;
}
.product__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.product__price {
    font-weight: bold;
}
.product__brand-link{
    color: black;
    text-decoration: none;
}
.product__brand {
    font-weight: bold;
    margin: 5px;
    cursor: pointer;
}
.product__brand-link:hover{
    text-decoration: underline;
    color: black;
}
.product__name-link{
    color: black;
    text-decoration: none;
}
.product__name {
    text-align: center;
    margin-bottom: 10px;
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
}
.product__name-link:hover{
    text-decoration: underline;
    color: black;
}
.product__quicklook {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 245px;
    color: white;
    font-weight: bold;
    background-color: black;
    border-radius: 5px;
    opacity: 0.6;
    cursor: pointer;
}
.product__quicklook:hover{
    opacity: 1;
}
.product__favourites {
    position: absolute;
    font-size: 25px;
    top: 0;
    right: 0;
    cursor: pointer;
    color: brown;
}
.product__favourites:hover{
    font-size: 30px;
}
</style>