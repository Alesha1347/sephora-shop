<template>
<div class="products__wrap">
    <ProductsMap/>
    <div class="products">
        <FilterProducts/>
    <div class="products__content">
        <MyPaginate
        :counts="totalCounts"
        @changePage="SET_PAGE"
        :currentPage.sync="currentPage"
        />
  <div class="products__list">
      <ProductsList
      v-for="product in PRODUCTS"
      :key="product.productId"
      :product="product"
      />
  </div>
        <MyPaginate 
        style="margin-top: 50px"
        :counts="totalCounts"
        @changePage="SET_PAGE"
        :currentPage.sync="currentPage"
        />
    </div>

    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductsList from '../components/products/ProductsList.vue'
import FilterProducts from '../components/products/FilterProducts.vue'
import ProductsMap from '../components/products/ProductsMap.vue'
export default {
    components:{ProductsList, FilterProducts, ProductsMap},
    data(){
        return{
            currentPage: 1
        }
    },
    computed:{
        ...mapGetters({
            PRODUCTS: 'products/PRODUCTS',
            totalCounts: 'products/totalCounts'
        })
    },
    methods:{
        ...mapActions({
            GET_PRODUCTS_FROM_API: 'products/GET_PRODUCTS_FROM_API',
            SET_PAGE: 'products/SET_PAGE'
        }),
        // getProd(){
        //     this.PRODUCTS = JSON.parse(localStorage.getItem('arr'))
        // }
    },
    mounted(){
        // this.getProd()
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style>
.products__wrap {
    display: flex;
    flex-direction: column;
}
.products{
    display: flex;
}
.products__list {
    display: flex;
    flex-wrap: wrap;
}
</style>