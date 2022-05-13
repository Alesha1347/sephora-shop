<template>
        <div class="reviews__info" name="comments">
          <h2 class="reviews__title">
              Ratings & Reviews ({{totalReviews}})
          </h2>
          <div class="reviews__rating-sort">
              <MySelect
              :selected="selected"
              :categories="categories"
              @chooseSelect="SET_RATING"
              />
          </div>
      </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
            selected: 'Sort',
            categories:[
                {name: 'All', value: ''},
                {name: '1 ★', value: '1'},
                {name: '2 ★★', value: '2'},
                {name: '3 ★★★', value: '3'},
                {name: '4 ★★★★', value: '4'},
                {name: '5 ★★★★★', value: '5'},
            ]
        }
    },
    computed:{
        ...mapGetters({
            totalReviews: 'reviews/totalReviews'
        })
    },
    methods:{
        ...mapActions({
            SET_RATING: 'reviews/SET_RATING'
        })
    }
}
</script>

<style scoped>
.reviews__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.reviews__title {
}
.reviews__rating-sort {
}
.select{
    width: 90px;
    font-size: 16px;
}
</style>

