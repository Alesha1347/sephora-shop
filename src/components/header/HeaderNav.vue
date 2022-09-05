<template>
<div class="d">

        <div class="navigation">
      <div class="header__inner-content"
      v-for="category in getCategories()"
        :key="category.categoryId"
      >
      <router-link class="header__link-category" :to="{name: 'products'}">
      <div 
      @click="setCategory(category.categoryId, category.displayName)"
      @mouseenter="getChildCategories(category.categoryId)"
      >
          {{ category.displayName }}
          </div>
      </router-link>
      </div>
      </div>

    <div class="child__wrap"
    @mouseleave="show=false"
    >
      <div class="child"
      v-for="category in childCategories"
      :key="category.categoryId"
      >
      <div class="child__name" 
      v-if="show"
      >{{ category.displayName }}</div>
      </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{ 
            childCategories: [],
            show: false,
            categoryId: ''
        }
    },
    computed:{
        ...mapGetters({
            CATEGORIES: 'category/CATEGORIES'
        })
    },
    methods:{
        ...mapActions({
            GET_CATEGORIES: 'category/GET_CATEGORIES',
            SET_CATEGORY: 'products/SET_CATEGORY',
            // SET_CATEGORY_ID: 'category/SET_CATEGORY_ID',
            // GET_REQUEST_CATEGORIES: 'category/GET_REQUEST_CATEGORIES',
            GET_PRODUCTS_FROM_API: 'products/GET_PRODUCTS_FROM_API'
        }),
        setCategory(categoryId){
            // this.SET_CATEGORY(categoryId)
            // this.SET_CATEGORY_ID(categoryId)
            this.categoryId = categoryId
            this.$store.state.products.ph = null
            this.$store.state.products.pl = null
            localStorage.setItem('categoryId', JSON.stringify(this.categoryId))
            this.GET_PRODUCTS_FROM_API()
            // this.GET_REQUEST_CATEGORIES()
        },
        getCategories(){
            if(localStorage.getItem('categories')){
                return JSON.parse(localStorage.getItem('categories'))
            } else {
                return this.CATEGORIES
            }
        },
        getChildCategories(categoryId){
            this.show = true
            this.childCategories = JSON.parse(localStorage.getItem(`${categoryId}`))
        }
    },
    mounted(){
        if(!localStorage.getItem('categories')){
        this.GET_CATEGORIES()
        }
    },
    // watch:{
    //     'categoryId': function(){
    //         this.$store.state.products.ph = null
    //         this.$store.state.products.pl = null
    //     }
    // }
}
</script>

<style>
.d{
    margin-bottom: 25px;
}
.navigation {
    display: flex;
    justify-content: space-around;
    background-color: black;
    color: white;
    padding: 10px;
}
.header__inner-content {
    cursor: pointer;
}
.header__link-category{
    text-decoration: none;
    color: white;
    font-weight: bold;
}
.header__link-category:hover{
    color: white;
}
.child__wrap{
    height: auto;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    z-index: 10;
    background-color: white;
    width: 1500px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
}
.child{
    font-size: 25px;
    cursor: pointer;
    margin: 0px 20px;
}
.child:hover{
    transform: scale(1.1);
    color: brown;
}
</style>