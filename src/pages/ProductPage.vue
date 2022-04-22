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
        <ReviewsInfo/>
      <ProductPageReviews
      v-for="review in REVIEWS"
      :key="review.Id"
      :review="review"
      />
      <MyPaginate
      :currentPage.sync="currentPage"
      :counts="totalReviews"
      :pageSize="10"
      @changePage="CHANGE_PAGE_REVIEWS"
      />
  </div>
</template>

<script>
import ProductPageList from '../components/productPage/ProductPageList.vue'
import ProductPageInfo from '../components/productPage/ProductPageInfo.vue'
import ProductPageReviews from '../components/productPage/ProductPageReviews.vue'
import ReviewsInfo from '../components/productPageReviews/ReviewsInfo.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    components:{ProductPageList, ProductPageInfo, ProductPageReviews, ReviewsInfo},
    data(){
        return{
            product: {},
            similar: [],
            categoryId: '',
            currentPage: 1,
        }
    },
    computed:{
        ...mapGetters({
            REVIEWS: 'reviews/REVIEWS',
            totalReviews: 'reviews/totalReviews'
        })
    },
    methods:{
        ...mapActions({
            GET_REVIEWS_FROM_API: 'reviews/GET_REVIEWS_FROM_API',
            CHANGE_PAGE_REVIEWS: 'reviews/CHANGE_PAGE_REVIEWS'
        }),
        getData(){
            const queryParams = {
                productId: this.$route.params.id,
                preferedSku:  this.$route.params.skuId
            }
            // if(!localStorage.getItem('productPage')){
            this.$api.get('products/detail/', queryParams)
            .then(response =>{
                // localStorage.setItem('productPage', JSON.stringify(response.data))
                // this.product = JSON.parse(localStorage.getItem('productPage'))
                this.categoryId = response.data.parentCategory.categoryId
                this.product = response.data
                console.log(response.data)
            })
            // }
            
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
        // this.product = JSON.parse(localStorage.getItem('productPage'))
    },
    mounted(){
        this.GET_REVIEWS_FROM_API()
    }
    // watch:{
    //     'categoryId': function(){
    //         this.getSimilar()
    //     }
    // }
}
</script>

<style>

</style>