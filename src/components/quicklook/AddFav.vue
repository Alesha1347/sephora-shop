<template>
      <div>
      <div 
      v-if="hearthShow" 
      class="add__fav" 
      @click="setFav(product)">
          <b-icon 
          class="product__favourites"
          :icon="hearth"></b-icon>
      </div>
        <div 
        class="remove__fav" 
        @click="removeFav(product)"
        v-else>
          <b-icon 
          class="product__favourites"
          :icon="hearthFill"></b-icon>
      </div>
      </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props:{
        product:{
            type: Object,
            default:() => {}
        }
    },
    data(){
        return{
            hearth: 'heart',
            hearthFill: 'heart-half',
            hearthShow: true
        }
    },
    computed:{
        ...mapGetters({
            FAVOURITES: 'favourites/FAVOURITES'
        })
    },
    methods:{
        ...mapActions({
            SET_FAVOURITES: 'favourites/SET_FAVOURITES',
            REMOVE_FAVOURITES: 'favourites/REMOVE_FAVOURITES',
            SET_FAV_NAME: 'favourites/SET_FAV_NAME',
            CHANGE_FAV_ALERT: 'favourites/CHANGE_FAV_ALERT'
        }),
        setFav(product){
            this.SET_FAVOURITES(product)
            this.SET_FAV_NAME(product.displayName)
            this.CHANGE_FAV_ALERT()
            this.hearthShow = false
        },
        removeFav(product){
            this.REMOVE_FAVOURITES(product)
            this.hearthShow = true
        }
    }
}
</script>

<style>
.product__favourites {
    position: absolute;
    font-size: 25px;
    top: 0;
    right: 0;
    cursor: pointer;
    color: brown;
}
.product__favourites:hover{
    font-size: 30px;
}
.remove__fav{
    color: black;
}
</style>