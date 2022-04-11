<template>
  <div class="product__page">
      <ProductPageList
      :product="product"
      />
  </div>
</template>

<script>
import ProductPageList from '../components/productPage/ProductPageList.vue'
export default {
    components:{ProductPageList},
    data(){
        return{
            product: [],
            skuId: ''
        }
    },
    methods:{
        getData(){
            const queryParams = {
                productId: this.$route.params.id,
                preferedSku:  this.$route.params.skuId
            }
            if(!localStorage.getItem('productPage')){
            this.$api.get('products/detail/', queryParams)
            .then(response =>{
                localStorage.setItem('productPage', JSON.stringify(response.data))
                this.product = JSON.parse(localStorage.getItem('productPage'))
                console.log(response.data)
            })
            }
        }
    },
    created(){
        this.getData(),
        this.product = JSON.parse(localStorage.getItem('productPage'))
        console.log(this.product)
    }
}
</script>

<style>

</style>