<template>
  <div class="wrap__basket">
    <div class="basket__product-info">
  <div class="basket__item">
      <img class="basket__img" :src="product.heroImage">
      <div class="basket__info">
        <div class="basket__brand">{{ product.brandName }}</div>
          <div class="basket__name">{{ product.displayName }}</div>
        <!-- <div class="product__price">{{ product.currentSku.listPrice }}</div> -->
          <BasketQty
      :product="product"
      />
      </div>
  </div>
    </div>
    <div class="basket__product-pay">PAY</div>
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
.wrap__basket {
  display: flex;
}
.basket__product-info {
  background-color: whitesmoke;
  width: 700px;
  height: auto;
  padding: 40px;
}
.basket__item {
  display: flex;
  background-color: white;
  width: 100%;
}
.basket__img {
}
.basket__info {
}
.basket__brand {
}
.basket__name {
}
.basket__product-pay {
}
</style>