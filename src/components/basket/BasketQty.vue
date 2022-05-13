<template>
  <div class="basket__qty">
      <div class="qty__minus" @click="MINUS_QTY(product.skuId)">
          <b-icon icon="patch-minus"></b-icon>
      </div>
      <div class="qty__x">{{ product.qty }}</div>
      <div class="qty__plus" @click="PLUS_QTY(product.skuId)">
          <b-icon icon="patch-plus"></b-icon>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props:{
        product:{
            type: Object,
            default: () => {}
        }
    },
    methods:{
        ...mapActions({
            MINUS_QTY: 'cart/MINUS_QTY',
            PLUS_QTY: 'cart/PLUS_QTY'
        })
    }
}
</script>

<style>
.basket__qty {
    display: flex;
    text-align: center;
    align-items: center;
}
.qty__minus {
    font-size: 25px;
    cursor: pointer;
}
.qty__x {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
}
.qty__plus {
    font-size: 25px;
    cursor: pointer;
}
</style>