<template>

      <div class="quicklook__imagerev">
        <img :src="products.regularChildSkus[0]" class="quicklook__image">
        <div class="quicklook__reviews">
          <div class="quicklook__review">{{products.reviews}} reviews</div>
          <div class="quicklook__rating">{{products.rating}}</div>
        </div>
      </div>
  
</template>

<script>
export default {
    props:{
        products:{
            type: Object,
            default:() => {}
        }
    }
}
</script>

<style>

.quicklook__imagerev {
}
.quicklook__image {
  padding: 10px;
}
.quicklook__reviews {
}
.quicklook__review {
  display: flex;
  justify-content: space-around;
}
.quicklook__rating {
}
</style>