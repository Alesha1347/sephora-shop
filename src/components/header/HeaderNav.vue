<template>
        <div class="navigation">
      <div class="header__inner-content"
      v-for="(category, index) in CATEGORIES"
        :key="index"
      >
      <router-link :to="{name: 'products'}">
      <div 
      @click="SET_CATEGORY(category.categoryId)">
          {{ category.displayName }}
          </div>
          <div></div>
      </router-link>
      <!-- {{category}} -->
      </div>
      </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
//             CATEGORIES: [
//                 'Brands',
// 'Makeup',
// 'Skincare',
// 'Hair',
// 'Fragrance',
// 'Tools',
// 'Bath',
// 'Mini', 
// 'Gifts',
// 'Sale'
// ]
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
            SET_CATEGORY: 'products/SET_CATEGORY'
        })
    },
    mounted(){
        this.GET_CATEGORIES()
    }
}
</script>

<style>
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
</style>