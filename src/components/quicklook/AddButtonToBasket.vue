<template>
  <div class="button__basket">
      <button class="basket__btn"
      @click="ADD_TO_BASKET(product)"
      >
          Add to Basket
      </button>
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
      ADD_TO_BASKET: 'cart/ADD_TO_BASKET'
    })
  }
}
</script>

<style>
.basket__btn{
  border-radius: 30px;
  padding: 10px 25px;
  color: white;
  font-weight: bold;
  border: none;
  background-color: rgb(207, 17, 44);
  cursor: pointer;
}
.basket__btn:hover{
  background-color: rgb(233, 29, 39);
}
</style>