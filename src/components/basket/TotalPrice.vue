<template>
  <button class="total__price">$ {{totalPrice()}}</button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters({
            CART: 'cart/CART'
        })
    },
    methods:{
        totalPrice(){
            return this.CART.reduce((a,b) => a + b.qty * +b.listPrice.slice(1), 0)
        }
    }
}
</script>

<style>
.total__price{
    width: 400px;
    height: 60px;
    border-radius: 40px;
    border: none;
    outline: none;
    background-color: rgb(207, 17, 44);
    color: white;
    font-weight: bold;
    font-size: 30px;
}
.total__price:hover{
    background-color: rgb(233, 29, 39);
}
</style>