<template>
  <div class="products__nav">
      <div class="products__nav-name">
      {{ this.CATEGORY_NAME }}
      </div>
      <div class="products__nav-child"
      v-for="category in REQUEST_CATEGORIES"
      :key="category.categoryId"
      @click="getNewChildCategories(category.categoryId)"
      >
        {{ category.displayName }}
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
            childCategories: []
        }
    },
    computed:{
        ...mapGetters({
            CATEGORY_NAME: 'products/CATEGORY_NAME',
            CATEGORY_ID: 'category/CATEGORY_ID',
            category: 'products/category',
            REQUEST_CATEGORIES: 'category/REQUEST_CATEGORIES'
        })
    },
    methods:{
        ...mapActions({
            SET_CATEGORY: 'products/SET_CATEGORY',
            GET_REQUEST_CATEGORIES: 'category/GET_REQUEST_CATEGORIES',
            SET_CATEGORY_ID:'category/SET_CATEGORY_ID'
        }),
        getChildCategories(){
            // if(
            // JSON.parse(localStorage.getItem(`${this.CATEGORY_ID}`)) 
            // ){
            // this.childCategories = JSON.parse(localStorage.getItem(`${this.CATEGORY_ID}`))
            // } else {
            // }
            this.childCategories = this.REQUEST_CATEGORIES
        },
        getNewChildCategories(categoryId){
            this.SET_CATEGORY(categoryId)
            this.SET_CATEGORY_ID(categoryId)
        }
    },
    mounted(){
        this.getChildCategories()
        this.GET_REQUEST_CATEGORIES()
    },
    watch:{
        'category': function(){
            this.getChildCategories()
        },
        // 'CATEGORY_ID': function(){
        //     this.getChildCategories()
        // }
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
    font-size: 16px;
    margin-bottom: 5px;
}
.products__nav-child:hover{
    text-decoration: underline;
    cursor: pointer;
}
</style>