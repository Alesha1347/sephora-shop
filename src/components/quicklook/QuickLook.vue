<template>
  <div class="quicklook" @click="closeProduct">

    <ProductPageList
    class="quicklook__modal"
    :product="products"
    />
  </div>

</template>

<script>
// import QuickLookRating from './QuickLookRating.vue'
// import QuickLookInfo from './QuickLookInfo.vue'
import ProductPageList from '../productPage/ProductPageList.vue'
export default {
  components:{ProductPageList},
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
    },
    closeProduct(e){
      if(e.target.className === e.currentTarget.className){
        this.$root.$emit('closeInfo')
      }
    }
  },
  created(){
    this.getData()
  },
}
</script>

<style>
.quicklook{
  /* height: auto;
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid black;
  z-index: 10;
  background-color: gray; */
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.quicklook__modal{
  display: block;
  background-color: white;
  box-shadow: 0px 5px 10px 17px rgba(34, 60, 80, 0.35);
  border: 2px solid black;
  width: 1000px;
  position: relative;
}
.quicklook__content {
  display: flex;
}
</style>