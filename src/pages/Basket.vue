<template>
  <div class="basket">
      <div class="basket__list" v-if="CART.length">
          <h3 class="basket__heading">My Basket</h3>
      <BasketList
      v-for="product in CART"
      :key="product.productId"
      :product="product"
      />
      <TotalPrice/>
      </div>
      <div class="basket__background" v-else>
          <img class="basket__background-img" src="../assets/cart_empty_message.png">
          <div class="basket__background-title">
          Вернуться <span
          class="basket__background-link"
          @click="backPage"
          >назад</span>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BasketList from '../components/basket/BasketList.vue'
import TotalPrice from '../components/basket/TotalPrice.vue'
export default {
    components:{BasketList, TotalPrice},
    computed:{
        ...mapGetters({
            CART: 'cart/CART'
        })
    },
    methods:{
        backPage(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.basket {
}
.basket__heading{
    font-size: 30px;
    font-weight: bold;
    margin: 60px 0 30px;
}
.basket__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
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
.basket__background-title{
    font-size: 25px;
}
.basket__background-link{
    color: brown;
    font-weight: bold;
    cursor: pointer;
    font-size: 30px;
}
.basket__background-link:hover{
    text-decoration: none;
    color: rgb(207, 17, 44);
}
</style>