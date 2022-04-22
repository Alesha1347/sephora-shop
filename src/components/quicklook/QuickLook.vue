<template>
  <div class="quicklook">
    <div class="quicklook__content">

      <QuickLookRating 
      :products="products"
      :skuId="skuId"
      />

      <QuickLookInfo :products="products"/>

    </div>
  </div>
</template>

<script>
import QuickLookRating from './QuickLookRating.vue'
import QuickLookInfo from './QuickLookInfo.vue'
export default {
  components:{QuickLookRating, QuickLookInfo},
  props: {
    productId:{
      type: String,
      default:() => ''
    },
    skuId:{
      type: String,
      default:() => ''
    }
  },
  data(){
    return{
      products: {}
    }
  },
  methods:{
    getData(){
    const queryParams = {
        productId: this.productId,
        preferedSku:  this.skuId
    }
    this.$api.get('products/detail/', queryParams)
    .then(response =>{
        this.products = response.data
        console.log(this.products)
    })
    },
    getProduct(){
      this.product.find(product =>{
        if(product.skuId === this.skuId){
          this.arr = product
        }
        console.log(product.skuId, this.skuId)
      })
      console.log(this.arr)
    }
  },
  created(){
    this.getData()
  },
}
</script>

<style>
.quicklook{
  height: 1000px;
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid black;
  z-index: 10;
  background-color: gray;
}
.quicklook__content {
  display: flex;
}
</style>