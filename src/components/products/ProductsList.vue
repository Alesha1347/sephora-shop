<template>
  <div class="products__item">
      <img class="product__img" :src="product.heroImage">
      <div class="product__info">
          <div class="product__price">{{ product.currentSku.listPrice }}</div>
          <div class="product__brand">{{ product.brandName }}</div>
          <div class="product__name">{{ product.displayName }}</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        product:{
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>
.products__item {
    width: 250px;
    height: 300px;
    margin: 20px;
}
.product__img {
    width: 100%;
}
.product__info {
    display: flex;
    flex-direction: column;

}
.product__price {
}
.product__brand {
}
.product__name {
}
</style>