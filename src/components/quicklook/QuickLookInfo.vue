<template>
        <div class="quicklook__info"
      >
        <div class="quicklook__brand">{{products.brand.displayName}}</div>
        <div class="quicklook__name">{{products.displayName}}</div>
        <div class="quicklook__size"></div>
        <div class="quicklook__descr">{{products.quickLookDescription}}</div>
        <div class="quicklook__color"
          v-for="productInfo in products.regularChildSkus"
      :key="productInfo.skuId"
        >
          Color: {{productInfo.variationValue}}
          <div class="color__image">
          <img :src="productInfo.skuImages.image42">
          </div>
        </div>
        <div class="quicklook__add">
          <!-- <div class="quicklook__price">{{products.regularChildSkus.listPrice}}</div> -->
          <div class="quicklook__btns">
            <div class="quicklook__basket"></div>
            <div class="quicklook__fav"></div>
          </div>
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
.quicklook__info {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.quicklook__brand {
  font-weight: bold;
}
.quicklook__name {
  font-size: 18px;
  margin-bottom: 10px;
}
.quicklook__size {
}
.quicklook__descr {
}
.quicklook__color {
}
.color__image{
  display: flex;
}
.quicklook__add {
}
.quicklook__price {
}
.quicklook__btns {
}
.quicklook__basket {
}
.quicklook__fav {
}
</style>