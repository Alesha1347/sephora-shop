<template>
  <div class="products__item">
      <img class="product__img" :src="product.heroImage">
      <div class="product__info">
        <div class="product__brand">{{ product.brandName }}</div>
          <div class="product__name">{{ product.displayName }}</div>
        <div class="product__price">{{ product.currentSku.listPrice }}</div>
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
    height: 400px;
    margin: 20px;
}
.product__img {
    width: 100%;
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
.product__brand {
    font-weight: bold;
    margin: 5px;
}
.product__name {
    text-align: center;
    margin-bottom: 10px;
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>