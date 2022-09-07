<template>
  <div class="button__basket">
      <button 
      v-if="changeBtn"
      class="basket__btn"
      @click="addToBasket(product)"
      >
          Add to Basket
      </button>

      <button 
      v-else
      class="basket__btn"
      @click="cartRemove(product.skuId)"
      >
          Remove from Basket
      </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props:{
    product:{
      type: Object,
      default: () => {}
    },
    skuId:{
      type: String,
      default:() => ''
    }
  },
  data(){
    return{
      changeBtn: true,
      skuIdArr: []
    }
  },
  computed:{
    ...mapGetters({
      CART: 'cart/CART'
    })
  },
  methods:{
    ...mapActions({
      ADD_TO_BASKET: 'cart/ADD_TO_BASKET',
      CART_REMOVE: 'cart/CART_REMOVE',
      SET_CART_NAME: 'cart/SET_CART_NAME',
      CHANGE_CART_ALERT: 'cart/CHANGE_CART_ALERT'
    }),
    addToBasket(product){
      this.ADD_TO_BASKET(product)
      this.SET_CART_NAME(product.displayName)
      this.CHANGE_CART_ALERT()
      this.CART.find(item => {
        if(item.skuId === product.skuId){
          this.changeBtn = false
        } else {
          this.changeBtn = true
        }
      })
    },
    cartRemove(product){
      this.CART_REMOVE(product)
      this.changeBtn = true
    }
  },
  watch:{
    'skuId': function(){
      this.CART.find(item => {
        if(item.skuId === this.skuId){
          this.skuIdArr = this.skuId
          this.changeBtn = false
        } else if(this.skuIdArr.includes(this.skuId)){
        this.changeBtn = false
      } else {
        this.changeBtn = true
      }
      })
    }
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