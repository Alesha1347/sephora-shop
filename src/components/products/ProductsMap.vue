<template>
  <div class="products__nav-map">
      <div class="map__info">
      <div class="map__name">
      {{ this.CATEGORY_NAME }}
      </div>
      <div class="map__sort-products">
          <MySelect
          :selected="selected"
          @chooseSelect="SORT_BY"
          :categories="categories"
          />
      </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            selected: 'релевантности',
            categories:[
                {name: 'релевантности', value: ''},
                {name: 'популярности', value: 'P_BEST_SELLING:1'},
                {name: 'названию', value: 'P_PROD_NAME:1'},
                {name: 'старту продаж', value: 'P_START_DATE:1'},
                {name: 'возрастанию рейтинга', value: 'P_RATING:0'},
                {name: 'убыванию рейтинга', value: 'P_RATING:1'},
                {name: 'возрастанию цены', value: 'price:0'},
                {name: 'убыванию цены', value: 'price:1'},
            ]
        }
    },
    computed:{
        ...mapGetters({
            CATEGORY_NAME: 'category/CATEGORY_NAME',
        })
    }
}
</script>

<style>
.products__nav-map {
    margin: 30px 0 20px 0;
    border-bottom: 1px solid lightgray;
}
.map__info{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    position: relative;
}
.map__name{
    color: gray;
}
</style>