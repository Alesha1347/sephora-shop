<template>
  <div class="products">
      <ProductsList
      v-for="product in PRODUCTS"
      :key="product.productId"
      :product="product"
      />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductsList from '../components/products/ProductsList.vue'
export default {
    components:{ProductsList},
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters({
            PRODUCTS: 'products/PRODUCTS'
        })
    },
    methods:{
        ...mapActions({
            GET_PRODUCTS_FROM_API: 'products/GET_PRODUCTS_FROM_API'
        })
    },
    mounted(){
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style>
.products {
    display: flex;
    flex-wrap: wrap;
}
</style>