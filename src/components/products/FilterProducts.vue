<template>
  <div class="filter__products">
      <ProductsNav/>
      <div class="filter__products-name">Filters</div>
      <div class="filter__products-params">
          <div class="">Sale</div>
          <div class="">Sort By</div>
          <div class="" @click="isShowPrice = !isShowPrice">Price</div>
          <MyRangeSlider
          v-if="isShowPrice"
          :minPrice="0"
          :maxPrice="this.MAXPRICE"
          :myMinPrice.sync="minPrice"
          :myMaxPrice.sync="maxPrice"
          @sliderOne="CHANGE_MIN_PRICE"
          @sliderTwo="CHANGE_MAX_PRICE"
          />
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductsNav from './ProductsNav.vue'
export default {
    components:{ProductsNav},
    data(){
        return{
            minPrice: 0,
            maxPrice: this.$store.state.products.maxPrice,
            isShowPrice: false
        }
    },
    computed:{
        ...mapGetters({
            MAXPRICE: 'products/maxPrice'
        })
    },
    methods:{
        ...mapActions({
            CHANGE_MIN_PRICE: 'products/CHANGE_MIN_PRICE',
            CHANGE_MAX_PRICE: 'products/CHANGE_MAX_PRICE'
        })
    }
}
</script>

<style>
.filter__products {
    display: flex;
    flex-direction: column;
    width: 500px;
}
.filter__products-name {
    color: grey;
    margin-right: 200px;
}
.filter__products-params {
    font-weight: bold;
}
</style>