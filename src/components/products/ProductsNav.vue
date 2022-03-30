<template>
  <div class="products__nav">
      <div class="products__nav-name">
      {{ this.CATEGORY_NAME }}
      </div>
      <div class="products__nav-child"
      v-for="category in childCategories"
      :key="category.categoryId"
      >
        {{ category.displayName }}
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            childCategories: []
        }
    },
    computed:{
        ...mapGetters({
            CATEGORY_NAME: 'category/CATEGORY_NAME',
            CATEGORY_ID: 'category/CATEGORY_ID',
            category: 'products/category'
        })
    },
    methods:{
        getChildCategories(){
            this.childCategories = JSON.parse(localStorage.getItem(`${this.CATEGORY_ID}`))
        }
    },
    mounted(){
        this.getChildCategories()
    },
    watch:{
        'category': function(){
            this.getChildCategories()
        }
    }
}
</script>

<style>
.products__nav {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
.products__nav-name {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 10px;
}
.products__nav-child {
    font-size: 18px;
    margin-bottom: 5px;
}
</style>