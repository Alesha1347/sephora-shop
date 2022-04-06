<template>
<div class="wrap__fav">
  <div class="products__item"
  v-for="product in FAVOURITES"
  :key="product.productId"
  >
      <img class="product__img" :src="product.heroImage">
      <div class="product__info">
        <div class="product__brand">{{ product.brandName }}</div>
          <div class="product__name">{{ product.displayName }}</div>
        <!-- <div class="product__price">{{ product.currentSku.listPrice }}</div> -->
      </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters({
            FAVOURITES: 'favourites/FAVOURITES'
        })
    }
}
</script>

<style>

</style>