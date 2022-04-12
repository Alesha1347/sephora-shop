<template>
    <div class="product__page-list">
      <div class="product__page-top">
          <div class="product__page-image">
              <img :src="product.regularChildSkus[this.numObj].skuImages.image450">
          </div>
          <div class="product__page-info">
              <div class="product__page-brand">
                  {{product.brand.displayName}}
              </div>
              <div class="product__page-name">
                  {{product.displayName}}
              </div>
              <div class="product__page-reviews">
                  <div class="product__page-comments">
                      {{product.reviews}}
                  </div>
                  <div class="product__page-rating">
                      {{product.rating}}
                  </div>
              </div>
              <div class="product__page-price">
                  {{product.regularChildSkus[this.numObj].listPrice}}
              </div>
              <div class="product__page-size">
                  Size: {{product.regularChildSkus[this.numObj].size}}
              </div>
                    <div class="choice__name">
                      Standart size
                  </div>
              <div class="product__page-choice"
              >
                  <div class="choice__size"
                    v-for="(productSize, index) in product.regularChildSkus"
                    :key="index"
                    :class="{active:`${index === numObj ? 'active': ''}`}"
                    @click="changeInfo(index)"
                    >
                      {{productSize.size}}
                  </div>
              </div>
              <div class="product__page-mini"></div>
              <div class="product__page-add">
                <AddButtonToBasket
                :product="product"
                />
                <AddFav
                :product="product"
                class="product__page-fav"
                />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import AddButtonToBasket from '../quicklook/AddButtonToBasket.vue'
import AddFav from '../quicklook/AddFav.vue'
export default {
    components:{AddButtonToBasket, AddFav},
    props:{
        product:{
            type: Object,
            default: () => {}
        }
    },
    data(){
        return{
            numObj: 0,
            isActive: true,
        }
    },
    methods:{
        changeInfo(index){
            this.numObj = index
        }
    }
}
</script>

<style>
.product__page-list {
}
.product__page-top {
    display: flex;
    align-items: center;
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
}
.choice__name {
    margin-bottom: 10px;
}
.choice__size {
    cursor: pointer;
    margin-right: 20px;
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
</style>