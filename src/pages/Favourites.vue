<template>
<div class="">

    <div v-if="this.FAVOURITES.length" class="favourites">
        <FavouritesList/>
    </div>

    <div class="basket__background" v-else>
          <div class="basket__background-title">
          Список избранного пуст, вернуться <span
          class="basket__background-link"
          @click="backPage"
          >назад</span>
          </div>
      </div>




</div>
</template>

<script>
import { mapGetters } from 'vuex'
import FavouritesList from '../components/favourites/FavouritesList.vue'
export default {
    components:{FavouritesList},
    computed:{
        ...mapGetters({
            FAVOURITES: 'favourites/FAVOURITES'
        })
    },
    methods:{
        backPage(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.favourites{
    display: flex;
    justify-content: center;
}
</style>