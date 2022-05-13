<template>
    <div class="product__page-list">
      <div class="product__page-top">
          <div class="product__page-image" v-if="product.regularChildSkus !== undefined">
              <img :src="product.regularChildSkus[this.numObj].skuImages.image450">
          </div>
          <div class="product__page-image" v-else>
                <img :src="product.ancillarySkus[this.numObj].skuImages.image450">
          </div>
          <div class="product__page-info">
              <div class="product__page-brand">
                  {{product.brand.displayName}}
              </div>
              <div class="product__page-name">
                  {{product.displayName}}
              </div>
              <div class="product__page-reviews">
                  <a class="product__page-comments" href="#comments">
                      ★ {{product.reviews}}
                  </a>
                  <div class="product__page-rating">
                      {{product.rating}}
                  </div>
              </div>
              <div class="product__page-price" v-if="product.regularChildSkus !== undefined">
                  {{product.regularChildSkus[this.numObj].listPrice}}
              </div>
              <div class="product__page-price" v-else>
                  {{product.ancillarySkus[this.numObj].listPrice}}
              </div>
              <div class="product__page-size">
                  {{product.variationType}}: 
                  <span v-if="product.regularChildSkus !== undefined" style="font-weight: bold;">
                      {{product.regularChildSkus[this.numObj].variationValue}}
                  </span>
                  <span v-else>
                        {{product.ancillarySkus[this.numObj].variationValue}}
                  </span>
              </div>
                    <div class="choice__name">
                      Standart size
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
                  />
                <AddFav
                :product="product"
                class="product__page-fav"
                />
              </div>
          </div>
                  <div class="product__close-quicklook" @click="closeProductInfo">
                  <b-icon icon="x-octagon"></b-icon>
                  </div>

      </div>
  </div>
</template>

<script>
import AddFav from '../quicklook/AddFav.vue'
import AddButtonToBasket from '../quicklook/AddButtonToBasket.vue'
export default {
    components:{AddFav, AddButtonToBasket},
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
        closeProductInfo(){
            this.$root.$emit('closeInfo')
        }
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
}
.product__page-rating {
}
.product__page-price {
    margin-bottom: 15px;
    font-weight: bold;
}
.product__page-size {
    margin-bottom: 15px;
}
.product__page-choice {
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    width: 450px;
    justify-content: flex-start;
    max-height: 200px;
    overflow: scroll;
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
.product__page-mini {
}
.product__page-fav{
    position: sticky;
}
.product__close-quicklook{
    position: absolute;
    cursor: pointer;
    z-index: 20;
    left: 958px;
    top: 7px;
    font-size: 20px;
}
.product__close-quicklook:hover{
    color: rgb(233, 29, 39);
}
</style>