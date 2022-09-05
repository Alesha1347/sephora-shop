<template>
<div class="wrap__fav">
  <h3 class="fav__heading">My Favourites</h3>

    <div class="fav__product-info">
  <div class="fav__item"
  v-for="product in FAVOURITES"
  :key="product.productId"
  >
      <router-link :to="{name: 'productPage', params:{id: product.productId, skuId: product.currentSku.skuId}}">
      <img 
      class="fav__img" 
      :src="product.heroImage"
      @click="setProductId(product.productId)"
      >
      </router-link>
        <router-link 
        :to="{name: 'productPage', params:{id: product.productId, skuId: product.currentSku.skuId}}"
        class="fav__info"
        >
      <div 
      @click="setProductId(product.productId)"
      >
        <div class="fav__brand">{{ product.brandName }}</div>
          <div class="fav__name">{{ product.displayName }}</div>
        <div class="product__price">{{ product.currentSku.listPrice }}</div>
      </div>
        </router-link>
      <div 
      class="fav__remove" 
      @click="REMOVE_FAVOURITES(product)">
      <b-icon icon="x-octagon"></b-icon>
    </div>

  </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters({
            FAVOURITES: 'favourites/FAVOURITES',
        })
    },
    methods:{
      ...mapActions({
        REMOVE_FAVOURITES: 'favourites/REMOVE_FAVOURITES',
        SET_PRODUCT_ID: 'reviews/SET_PRODUCT_ID'
      }),
      setProductId(productId){
            this.SET_PRODUCT_ID(productId)
            localStorage.setItem('productId', JSON.stringify(productId))
      }
    },
    mounted(){
      console.log(this.FAVOURITES)
    }
}
</script>

<style>
.wrap__fav{

}
.fav__product-info {
  background-color: whitesmoke;
  width: 700px;
  height: auto;
  padding: 0px 30px;
}
.fav__heading {
  font-size: 30px;
  font-weight: bold;
  margin: 60px 0 30px;
  display: flex;
  justify-content: center;
}
.fav__item {
  display: flex;
  background-color: white;
  border-bottom: 1px solid lightgray;
  padding: 20px 0px;
  margin: 10px;
  position: relative;
}
.fav__item:hover{
  box-shadow: 5px 5px 2px 2px;
}
.fav__img {
  width: 200px;
  height: 200px;
  cursor: pointer;
  margin-right: 100px;
}
.fav__info:hover{
  color: black;
}
.fav__info {
  padding: 10px;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  color: black;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
}
.fav__brand {
  font-weight: bold;
  font-size: 15px;
  flex: 0 1 100%;
}
.fav__remove {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 15px;
  cursor: pointer;
}
.fav__remove:hover{
  color: brown;
}
</style>