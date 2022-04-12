<template>
  <div class="product__page">
      <ProductPageList
      :product="product"
      style="margin-bottom: 60px"
      />
      <ProductPageInfo
      :product="product"
      style="margin-bottom: 60px"
      />
      <div class="product__page-similar">
          <div class="page__info-about"
          style="margin-bottom: 20px"
          >
              Similar Products
          </div>
          <MyCarousel
          :array="this.similar"
          />
      </div>
  </div>
</template>

<script>
import ProductPageList from '../components/productPage/ProductPageList.vue'
import ProductPageInfo from '../components/productPage/ProductPageInfo.vue'
export default {
    components:{ProductPageList, ProductPageInfo},
    data(){
        return{
            product: {},
            similar: [],
            categoryId: ''
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
                this.categoryId = response.data.parentCategory.categoryId
            })
            }
            
        },
        getSimilar(){
            const queryParams = {
                categoryId: this.categoryId,
                pageSize: '20',
                currentPage: '1'
            }
            if(!localStorage.getItem('productPage')){
            this.$api.get('products/list/', queryParams)
            .then(products =>{
                localStorage.setItem('productPageSimilar', JSON.stringify(products.data.products))
                this.similar = JSON.parse(localStorage.getItem('productPageSimilar'))
                console.log(this.similar)
            })
            }
        }
    },
    created(){
        this.getData()
        // this.similar = JSON.parse(localStorage.getItem('productPageSimilar'))
        this.product = JSON.parse(localStorage.getItem('productPage'))
    },
    // watch:{
    //     'categoryId': function(){
    //         this.getSimilar()
    //     }
    // }
}
</script>

<style>

</style>