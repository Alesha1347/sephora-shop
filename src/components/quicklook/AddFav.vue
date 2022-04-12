<template>
      <div @click="setFav(product)"
      >
          <b-icon 
          class="product__favourites"
          :icon="hearth"></b-icon>
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
            hearth: 'heart'
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
        }),
        setFav(product){
            this.SET_FAVOURITES(product)
            return this.FAVOURITES.find(item =>{
                if(item.productId === product.productId){
                    this.hearth = 'heart-fill'
                } else {
                    this.hearth = 'hearth'
                }
            })
        },
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
</style>