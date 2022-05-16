<template>
    <div class="basket__product-info">
  <div class="basket__item">
      <img class="basket__img" :src="product.skuImages.image135">
      <div class="basket__info">
        <div class="basket__brand">{{ product.displayName }}</div>
          <div class="basket__variation">
        <div class="basket__type">{{product.variationType}}: </div>
          <div class="basket__size">{{product.size}}</div>
        </div>

          <BasketQty
      :product="product"
      />
      </div>
      <div class="basket__right">
        <div class="remove__cart" @click="CART_REMOVE(product.skuId)">
          <b-icon icon="x-circle"></b-icon>
        </div>
        <div class="basket__price">{{product.listPrice}}</div>
      </div>
  </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex'
import BasketQty from './BasketQty.vue'
export default {
    components:{BasketQty},
    props:{
      product:{
        type:Object,
        default: () => {}
      }
    },
    methods:{
      ...mapActions({
        CART_REMOVE: 'cart/CART_REMOVE'
      })
    },
    mounted(){
      console.log(this.product)
    }
}
</script>

<style>
.basket__product-info {
  background-color: whitesmoke;
  width: 700px;
  height: auto;
  padding: 0px 30px;
}
.basket__item {
  display: flex;
  background-color: white;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 20px 0px;
}
.basket__info {
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
}
.basket__brand {
  font-weight: bold;
  font-size: 14px;
  flex: 0 1 100%;
}
.basket__variation {
  flex: 0 1 100%;
  display: flex;
  align-items: center;
  text-align: center;
}
.basket__type {
  margin-right: 5px;
}
.basket__size {
  font-size: 15px;
  font-weight: bold;
}
.basket__right {
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
}
.remove__cart {
  flex: 0 1 100%;
  cursor: pointer;
  font-size: 25px;
  display: flex;
  justify-content: flex-end;
}
.remove__cart:hover{
  color: brown;
}
.basket__price {
  font-weight: bold;
}
</style>