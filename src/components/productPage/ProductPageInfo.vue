<template>
  <div class="page__info">
      <div class="page__info-brand"
      @click="isShowBrand = !isShowBrand"
      >
          <div>
            <div class="page__info-about">About the Brand</div>
            <transition name="bounce">
          <div class="page__info-decr" v-if="isShowBrand">
              {{product.brand.longDescription}}
          </div>
            </transition>
          </div>
          <div class="page__info-open">{{this.isShowBrand ? '-' : '+'}}</div>
      </div>
            <div class="page__info-ingredient"
            @click="isShowIngredietn = !isShowIngredietn"
            >
                <div>
          <div class="page__info-about">Ingredients</div>
                      <transition name="bounce">
          <div class="page__info-decr" v-if="isShowIngredietn">
              {{ product.currentSku.ingredientDesc }}
          </div>
                      </transition>
                </div>
            <div class="page__info-open">{{this.isShowIngredietn ? '-' : '+'}}</div>
      </div>
      <div class="page__info-product"
        @click="isShowProduct = !isShowProduct"
      >
          <div>
          <div class="page__info-about">About the Ptoduct</div>
                      <transition name="bounce">
          <div class="page__info-decr" v-if="isShowProduct">
              {{ product.longDescription }}
          </div>
                      </transition>
          </div>
            <div class="page__info-open">{{this.isShowProduct ? '-' : '+'}}</div>
      </div>

  </div>
</template>

<script>
export default {
    props:{
        product:{
            type: Object,
            default:() => {}
        }
    },
    data(){
        return{
            isShowBrand: false,
            isShowIngredietn: false,
            isShowProduct: false
        }
    }
}
</script>

<style>
.page__info {
    display: flex;
    flex-direction: column;
}
.page__info-brand {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.page__info-about {
    font-weight: bold;
    font-size: 25px;
    cursor: pointer;
}
.page__info-decr {
    padding: 30px;
}
.page__info-ingredient {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.page__info-product {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.page__info-open{
    font-size: 35px;
    color: gray;
    cursor: pointer;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>