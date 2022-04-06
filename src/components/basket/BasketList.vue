<template>
  <div class="wrap__basket">
  <div class="products__item">
      <img class="product__img" :src="product.heroImage">
      <div class="product__info">
        <div class="product__brand">{{ product.brandName }}</div>
          <div class="product__name">{{ product.displayName }}</div>
        <!-- <div class="product__price">{{ product.currentSku.listPrice }}</div> -->
      </div>
      <BasketQty
      :product="product"
      />
  </div>
</div>

</template>

<script>
import BasketQty from './BasketQty.vue'
export default {
    components:{BasketQty},
    props:{
      product:{
        type:Object,
        default: () => {}
      }
    }
}
</script>

<style>

</style>