<template>
<div class="wrap__fav">
  <h3 class="fav__heading">My Favourites</h3>

    <div class="fav__product-info">
  <div class="fav__item"
  v-for="product in FAVOURITES"
  :key="product.productId"
  >
      <img class="fav__img" :src="product.heroImage">
      <div class="fav__info">
        <div class="fav__brand">{{ product.brandName }}</div>
          <div class="fav__name">{{ product.displayName }}</div>
        <!-- <div class="product__price">{{ product.currentSku.listPrice }}</div> -->
      </div>
  </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters({
            FAVOURITES: 'favourites/FAVOURITES'
        })
    }
}
</script>

<style>
.wrap__fav{

}
.fav__product-info {
  background-color: whitesmoke;
  width: 700px;
  height: auto;
  padding: 0px 30px;
}
.fav__heading {
    font-size: 30px;
    font-weight: bold;
    margin: 60px 0 30px;
      display: flex;
    justify-content: center;
}
.fav__item {
  display: flex;
  background-color: white;
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 20px 0px;
}
.fav__img {
  margin-right: 10px;
}
.fav__info {
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
}
.fav__brand {
  font-weight: bold;
  font-size: 15px;
  flex: 0 1 100%;
}
.fav__name {
}
</style>