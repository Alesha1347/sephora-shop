<template>
  <div class="header__inner">
      <router-link class="header__name" to="/">S E P H O R A</router-link>
      <MySearch
      @searchProducts="SEARCH_TERM"
      />
      <router-link :to="{name: 'stores'}" class="header__store">
      Store
      </router-link>
      <div class="header__reg">Sign In</div>
      <div class="header__chat"><b-icon icon="chat"></b-icon></div>
      <router-link :to="{name: 'favourites'}" class="header__favourites" ><b-icon :icon="favIcon"></b-icon></router-link>
      <router-link :to="{name: 'basket'}" class="header__basket"><b-icon :icon="basketIcon"></b-icon></router-link>
      <MyAlertFav 
      :alertFavName="alertFavName"
      />
    <MyAlertCart 
        :alertBasketName="alertBasketName"
      />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
            basketIcon: 'basket',
            favIcon: 'bookmark-heart'
        }
    },
    computed:{
        ...mapGetters({
            CART: 'cart/CART',
            alertFavName: 'favourites/alertFavName',
            FAVOURITES: 'favourites/FAVOURITES',
            alertBasketName: 'cart/alertBasketName'
        })
    },
    methods:{
        ...mapActions({
            SEARCH_TERM: 'products/SEARCH_TERM'
        })
    },
    watch:{
        'CART': function(){
            if(this.CART.length){
                this.basketIcon = 'basket-fill'
            } else {
            this.basketIcon = 'basket'
        }
        },
        'FAVOURITES': function(){
            if(this.FAVOURITES.length){
                this.favIcon = 'bookmark-heart-fill'
            } else {
            this.favIcon = 'bookmark-heart'
        }
        }
    },
}
</script>

<style>
.header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 20px;
    position: relative;
}
.header__name {
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-size: 25px;
}
.header__name:hover{
    color: black;
}
.header__store {
    cursor: pointer;
    color: black;
    text-decoration: none;
}
.header__store:hover{
    color: black;
}
.header__reg {
    cursor: pointer;
}
.header__chat {
    cursor: pointer;
    font-size: 25px;
}
.header__favourites {
    cursor: pointer;
    font-size: 25px;
    color: black;
}
.header__favourites:hover{
    color: black;
}
.header__basket {
    cursor: pointer;
    font-size: 25px;
    color: black;
}
.header__basket:hover{
    color: black;
}
</style>