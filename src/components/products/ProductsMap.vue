<template>
  <div class="products__nav-map">
      <div class="map__info">
      <div class="map__name">
      {{ this.CATEGORY_NAME }}
      </div>
      <div class="map__sort-products">
          <div class="map__select-title">
              Сортировать по 
          </div>
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
import { mapActions, mapGetters } from 'vuex'
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
            CATEGORY_NAME: 'products/CATEGORY_NAME',
        })
    },
    methods:{
        ...mapActions({
            SORT_BY: 'products/SORT_BY'
        })
    }
}
</script>

<style>
.products__nav-map {
    margin-top: 30px;
    border-bottom: 1px solid lightgray;
}
.map__info{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
}
.map__name{
    color: gray;
}
.map__sort-products{
    display: flex;
    align-items: center;
}
.map__select-title{
    font-weight: bold;
    color: gray;
    font-size: 18px;
}
</style>