<template>
  <div class="products__item"
  @mouseleave="isShowQuicklook = false">
  <router-link :to="{name: 'productPage', params:{id: product.productId, skuId: product.currentSku.skuId}}"
  >
      <img class="product__img" 
      @click="setProductId(product.productId)"
      :src="product.heroImage"
      @mouseenter="isShowQuicklook = true">
  </router-link>
      <div class="product__info"
      @click="setProductId(product.productId)"
      @mouseenter="isShowQuicklook = false">
        <router-link class="product__brand-link" :to="{name: 'productPage', params:{id: product.productId, skuId: product.currentSku.skuId}}">
        <div class="product__brand">{{ product.brandName }}</div>
        </router-link>
          <router-link class="product__name-link" :to="{name: 'productPage', params:{id: product.productId, skuId: product.currentSku.skuId}}">
          <div class="product__name">{{ product.displayName }}</div>
          </router-link>
        <div class="product__price">{{ product.currentSku.listPrice }}</div>
      </div>
      <div v-if="isShowQuicklook" 
      class="product__quicklook"
      @click="showProductInfo(product.productId, product.currentSku.skuId)"
      >
        Quicklook
      </div>
      <AddFav
      :product="product"
      />
      <div class="product__quicklook-open"
        v-if="isShowProductInfo">
      <QuickLook
      :productId="productId"
      :skuId="skuId"
      />
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddFav from '../quicklook/AddFav.vue'
import QuickLook from '../quicklook/QuickLook.vue'
export default {
    components:{AddFav, QuickLook},
    props:{
        product:{
            type: Object,
            default: () => {}
        }
    },
    data(){
        return{
            isShowQuicklook: false,
            isShowProductInfo: false,
            productId: '',
            skuId: ''
        }
    },
    computed:{
        ...mapGetters({
            maxPrice: 'products/maxPrice',
            minPrice: 'products/minPrice'
        })
    },
    methods:{
        ...mapActions({
            SET_PRODUCT_ID: 'reviews/SET_PRODUCT_ID'
        }),
        showProductInfo(id, skuId){
            this.isShowProductInfo = true
            this.productId = id
            this.skuId = skuId
        },
        setProductId(productId){
            this.SET_PRODUCT_ID(productId)
            localStorage.setItem('productId', JSON.stringify(productId))
        }
    },
    watch:{
        'isShowProductInfo': function(){
            if(this.isShowProductInfo){
            document.documentElement.style.overflow = 'hidden'
            let paddingOffset = 19 + 'px'
            document.body.style.paddingRight = paddingOffset
            return
            }
            document.documentElement.style.overflow = 'auto'
            document.body.style.paddingRight = 0
        }
    },
    mounted(){
        var vm = this
        this.$root.$on('closeInfo', function(){
            vm.isShowProductInfo = false
        })
    }
}
</script>

<style>
.products__item {
    width: 250px;
    height: 400px;
    margin: 20px;
    position: relative;
}
.product__img {
    width: 100%;
    margin-bottom: 15px;
    cursor: pointer;
}
.product__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.product__price {
    font-weight: bold;
}
.product__brand-link{
    color: black;
    text-decoration: none;
}
.product__brand {
    font-weight: bold;
    margin: 5px;
    cursor: pointer;
}
.product__brand-link:hover{
    text-decoration: underline;
    color: black;
}
.product__name-link{
    color: black;
    text-decoration: none;
}
.product__name {
    text-align: center;
    margin-bottom: 10px;
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
}
.product__name-link:hover{
    text-decoration: underline;
    color: black;
}
.product__quicklook {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 245px;
    color: white;
    font-weight: bold;
    background-color: black;
    border-radius: 5px;
    opacity: 0.6;
    cursor: pointer;
}
.product__quicklook:hover{
    opacity: 1;
}
</style>