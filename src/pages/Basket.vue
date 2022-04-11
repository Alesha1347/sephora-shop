<template>
  <div class="basket">
      <div class="basket__list" v-if="CART.length">
      <BasketList
      v-for="product in CART"
      :key="product.productId"
      :product="product"
      />
      </div>
      <div class="basket__background" v-else>
          <img class="basket__background-img" src="../assets/cart_empty_message.png">
          <div class="basket__background-title">
          Добавить товары в корзину из <router-link to="/" class="basket__background-link">нашего каталога</router-link>
          </div>
      </div>
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
.basket__background{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
}
.basket__background-img {
    height: 130px;
    width: 400px;
    margin-bottom: 30px;
}
.basket__background-link{
    color: black;
    font-weight: bold;
}
.basket__background-link:hover{
    text-decoration: none;
    color: rgb(207, 17, 44);
}
</style>