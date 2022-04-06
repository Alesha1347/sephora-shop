<template>
<div class="products__wrap">
    <ProductsMap/>
    <div class="products">
        <FilterProducts/>
    <div class="products__content">
        <div class="products__content-up">
            <ProductsShowig/>
        <MyPaginate
        :counts="totalCounts"
        @changePage="SET_PAGE"
        :currentPage.sync="currentPage"
        :pageSize="pageSize"
        />
        </div>
  <div class="products__list">
      <ProductsList
      v-for="product in PRODUCTS"
      :key="product.productId"
      :product="product"
      />
  </div>
        <MyPaginate 
        style="border-top: 1px solid lightgray; padding: 10px 0"
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
import ProductsShowig from '../components/products/ProductsShowing.vue'
export default {
    components:{ProductsList, FilterProducts, ProductsMap, ProductsShowig},
    data(){
        return{
            currentPage: 1
        }
    },
    computed:{
        ...mapGetters({
            PRODUCTS: 'products/PRODUCTS',
            totalCounts: 'products/totalCounts',
            pageSize: 'products/pageSize'
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
.products__content{
    border-left: 1px solid lightgray;
}
.products__content-up{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.products__list {
    display: flex;
    flex-wrap: wrap;
}
</style>