<template>
  <div class="basket">
      <BasketList
      v-for="product in CART"
      :key="product.productId"
      :product="product"
      />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BasketList from '../components/basket/BasketList.vue'
export default {
    components:{BasketList},
    computed:{
        ...mapGetters({
            CART: 'cart/CART'
        })
    }
}
</script>

<style>

</style>