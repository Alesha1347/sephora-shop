<template>
  <div class="filter__products">
      <ProductsNav/>
      <div class="filter__products-name">Filters</div>
      <div class="filter__products-params">
          <div class="filter__price" @click="isShowPrice = !isShowPrice">Price</div>
          <MyRangeSlider
          v-if="isShowPrice"
          :minPrice="this.MINPRICE"
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
            minPrice: this.MINPRICE,
            maxPrice: this.MAXPRICE,
            isShowPrice: false
        }
    },
    computed:{
        ...mapGetters({
            MAXPRICE: 'products/maxPrice',
            MINPRICE: 'products/minPrice'
        })
    },
    methods:{
        ...mapActions({
            CHANGE_MIN_PRICE: 'products/CHANGE_MIN_PRICE',
            CHANGE_MAX_PRICE: 'products/CHANGE_MAX_PRICE'
        })
    },
    watch:{
        'MAXPRICE': function(){
            this.maxPrice = this.MAXPRICE
            this.minPrice = this.MINPRICE
        }
    }
}
</script>

<style>
.filter__products {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-top: 20px;
}
.filter__products-name {
    color: grey;
    margin-right: 200px;
}
.filter__products-params {
    font-weight: bold;
}
.filter__price{
    cursor: pointer;
}
</style>