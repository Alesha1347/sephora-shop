<template>
    <div class="product__page-list">
      <div class="product__page-top">
          <div class="product__page-image" v-if="product.regularChildSkus !== undefined">
              <img :src="product.regularChildSkus[numObj].skuImages.image450">
          </div>
          <div class="product__page-image" v-else>
                <img :src="product.ancillarySkus[numObj].skuImages.image450">
          </div>
          <div class="product__page-info">
              <div class="product__page-brand">
                  {{product.brand.displayName}}
              </div>
              <div class="product__page-name">
                  {{product.displayName}}
              </div>
              <div class="product__page-reviews">
                    <div class="product__page-rating">
                      ★{{product.rating.toFixed()}}
                  </div>
                  <a class="product__page-comments" href="#reviews__info">
                      reviews
                  </a>

              </div>
              <div class="product__page-price" v-if="product.regularChildSkus !== undefined">
                  {{product.regularChildSkus[numObj].listPrice}}
              </div>
              <div class="product__page-price" v-else>
                  {{product.ancillarySkus[numObj].listPrice}}
              </div>
              <div class="product__page-size">
                  {{product.variationType}}: 
                  <span v-if="product.regularChildSkus !== undefined" style="font-weight: bold;">
                      {{product.regularChildSkus[numObj].variationValue}}
                  </span>
                  <span v-else>
                        {{product.ancillarySkus[numObj].variationValue}}
                  </span>
              </div>
                    <div class="choice__name">
                      Standart size:
                  </div>
              <div class="product__page-choice"
              v-if="product.regularChildSkus !== undefined"
              >
                  <div class="choice__size"
                    v-for="(productSize, index) in product.regularChildSkus"
                    :key="index"
                    :class="{active:`${index === numObj ? 'active': ''}`}"
                    @click="changeInfo(index)"
                    >
                    <img v-if="product.variationType === 'Color'" class="choice__image" 
                    :src="productSize.smallImage"
                    >
                      <img v-else class="choice__image" :src="productSize.skuImages.image42">
                  </div>
              </div>
              <div class="product__page-choice" v-else>
                    <div class="choice__size"
                    v-for="(productSize, index) in product.ancillarySkus"
                    :key="index"
                    :class="{active:`${index === numObj ? 'active': ''}`}"
                    @click="changeInfo(index)"
                    >
                      <img class="choice__image" :src="productSize.skuImages.image42">
                  </div>
              </div>
              <div class="product__page-mini"></div>
              <div class="product__page-add">
                  <AddButtonToBasket
                  :product="product.regularChildSkus[numObj]"
                  :skuId="product.regularChildSkus[numObj].skuId"
                  />
              </div>
          </div>

      </div>
  </div>
</template>

<script>
import AddButtonToBasket from '../quicklook/AddButtonToBasket.vue'
export default {
    components:{ AddButtonToBasket},
    props:{
        product:{
            type: Object,
            default: () => {}
        }
    },
    data(){
        return{
            numObj: 0,
        }
    },
    methods:{
        changeInfo(index){
            this.numObj = index
        },
    }
}
</script>

<style>
.product__page-list {
}
.product__page-top {
    display: flex;
    align-items: flex-start;
    padding: 10px;
}
.product__page-image {
    margin-right: 40px;
}
.product__page-info {
    display: flex;
    flex-direction: column;
    margin-right: 40px;
}
.product__page-brand {
    font-weight: bold;
}
.product__page-name {
    margin-bottom: 15px;
}
.product__page-reviews {
    display: flex;
    margin-bottom: 15px;
}
.product__page-comments {
    color: black;
    text-decoration-color: black;
}
.product__page-comments:hover{
    color: rgb(233, 29, 39);
}
.product__page-rating {
    margin-right: 20px;
}
.product__page-price {
    margin-bottom: 15px;
    font-weight: bold;
}
.product__page-size {
    margin-bottom: 15px;
}
.product__page-choice {
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    width: 450px;
    justify-content: flex-start;
    max-height: 200px;
    overflow: auto;
}
.choice__name {
    margin-bottom: 10px;
}
.choice__size {
    cursor: pointer;
    margin: 5px;
    font-size: 15px;
    border: 2px solid lightgray;
    padding: 5px 10px;
    border-radius: 5px;
}
.choice__size.active{
    border: 2px solid black;
}
.product__page-add {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.product__page-fav{
    position: sticky;
}

</style>