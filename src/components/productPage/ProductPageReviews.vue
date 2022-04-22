<template>
  <div class="reviews">
      <ReviewsComments
      :review="review"
      />
  </div>
</template>

<script>
import ReviewsComments from '../productPageReviews/ReviewsCommetns.vue'

export default {
    components:{ReviewsComments},
    props:{
        review:{
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>
.reviews {
}

</style>