<template>
  <div class="star__rating">
        <star-rating
          :read-only="true"
          :show-rating="false"
          :rating="rating"
          :star-size="15"
          active-color="black"
          inactive-color="white"
          :border-width="2"
          border-color="black"
          :padding="1"
        ></star-rating>
  </div>
</template>

<script>
export default {
    props:{
        rating:{
            type: Number,
            default: () => 0
        }
    }
}
</script>

<style>

</style>