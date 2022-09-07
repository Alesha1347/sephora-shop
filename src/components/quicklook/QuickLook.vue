<template>
  <div class="quicklook" @click="closeProduct">

    <MySpinner v-if="this.isLoaded"/>

    <div class="quicklook__content">
    <ProductPageList
    class="quicklook__modal"
    :product="products"
    />
    <div class="product__close-quicklook" @click="closeProductInfo">
      <b-icon icon="x-octagon"></b-icon>
    </div>

                  <div class="open__product" @click="removeScroll(productId)">
              <router-link :to="{name: 'productPage', params:{id: productId, skuId: skuId}}" class="show__more"
              >
                  show more 
                  <b-icon icon="arrow-right-circle"></b-icon>
                  </router-link>
          </div>

    </div>
  </div>

</template>

<script>
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
      products: {},
      isLoaded: false
    }
  },
  methods:{
    getData(){
      this.isLoaded = true
      
    const queryParams = {
        productId: this.productId,
        preferedSku:  this.skuId
    }
    this.$api.get('products/detail/', queryParams)
    .then(response =>{
        this.products = response.data
    })
    .catch(err => console.log(err))
    .finally(() => { this.isLoaded = false })
    },
    getProduct(){
      this.product.find(product =>{
        if(product.skuId === this.skuId){
          this.arr = product
        }
      })
    },
    closeProduct(e){
      if(e.target.className === e.currentTarget.className){
        this.$root.$emit('closeInfo')
      }
    },
    closeProductInfo(){
      this.$root.$emit('closeInfo')
    },
    removeScroll(productId){
      document.documentElement.style.overflow = 'auto'
      localStorage.setItem('productId', JSON.stringify(productId))
    },
  },
  created(){
    this.getData()
  },
}
</script>

<style>
.quicklook{
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.quicklook__content{
  position: relative;
  display: flex;
}
.quicklook__modal{
  display: block;
  background-color: white;
  box-shadow: 0px 5px 10px 17px rgba(34, 60, 80, 0.35);
  border: 2px solid black;
  width: 1000px;
}
.open__product {
    position: absolute;
    bottom: 10px;
    right: 20px;
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
.show__more{
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
    align-items: center;
    color: black;
    text-decoration: none;
}
.show__more:hover{
    color: rgb(233, 29, 39);
    cursor: pointer;
}
</style>