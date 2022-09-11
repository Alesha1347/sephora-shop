<template>
  <div class="header__content">
      <div class="header__content-nav">
        <router-link class="header__link" :to="{name: 'products'}">
      <div 
      class="header__bath-body" 
      @click="setCategory('cat1910034')"
      ><div class="header__link-name">Bath & Body <b-icon icon="arrow-right-circle"></b-icon></div>
      </div>
      </router-link>
      <router-link class="header__link" :to="{name: 'products'}">
      <div class="header__sets"
      @click="setCategory('cat1940030')"
      ><div class="header__link-name">Value & Gift Sets <b-icon icon="arrow-right-circle"></b-icon></div></div>
      </router-link>
      <router-link class="header__link" :to="{name: 'products'}">
      <div class="header__hair"
      @click="setCategory('cat1910033')"
      ><div class="header__link-name">Hair <b-icon icon="arrow-right-circle"></b-icon></div></div>
      </router-link>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods:{
        ...mapActions({
            GET_PRODUCTS_FROM_API: 'products/GET_PRODUCTS_FROM_API'
        }),
            setCategory(categoryId){
            // this.SET_CATEGORY(categoryId)
            // this.SET_CATEGORY_ID(categoryId)
            this.$store.state.products.ph = null
            this.$store.state.products.pl = null
            localStorage.setItem('categoryId', JSON.stringify(categoryId))
            this.GET_PRODUCTS_FROM_API()
        },
    }
}
</script>

<style>
.header__content {
    background-image: url('../../assets/minis.png');
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    display: flex;
    flex-direction: column;
    color: black;
    margin-bottom: 70px;
}
.header__content-nav {
    display: flex;
    font-size: 30px;
    font-weight: bold;
}
.header__link{
    color: black;
    text-decoration: none;
}
.header__link:hover{
    color: black;
}
.header__bath-body,
.header__sets,
.header__hair {
    cursor: pointer;
    height: 500px;
    width: 500px;
    opacity: 0.6;
    display: flex;
    justify-content: flex-end;
}
.header__bath-body:hover{
    opacity: 1;
    box-shadow: 0px 19px 23px 10px rgba(0, 0, 0, 0.2);
}
.header__link-name{
    padding-top: 450px
}

.header__sets:hover{
    opacity: 1;
    box-shadow: 0px 19px 23px 10px rgba(0, 0, 0, 0.2);
}
.header__hair:hover{
    opacity: 1;
    box-shadow: 0px 19px 23px 10px rgba(0, 0, 0, 0.2);
}
</style>