<template>
<div class="">
    
    <div class="alert__container" v-if="isShowAlertFav">
        <div class="alert__custom"><div class="alert__name">{{alertFavName}}</div> добавлен в избранное</div>
    </div>

    <div class="alert__container" v-if="isShowAlertCart">
        <div class="alert__custom"><div class="alert__name">{{alertBasketName}}</div> добавлен в корзину</div>
    </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'MyAlert',
    props:{
        alertFavName:{
            type: String,
            default:() => ''
        },
        alertBasketName:{
            type: String,
            default:() => ''
        }
    },
    computed:{
        ...mapGetters({
            isShowAlertFav: 'favourites/isShowAlertFav',
            isShowAlertCart: 'cart/isShowAlertCart',
            // alertFavName: 'favourites/alertFavName',
            // alertBasketName: 'cart/alertBasketName'
        })
    },
}
</script>

<style>
.alert__container{
  position: fixed;
  top: 0px;
  right: 300px;
  z-index: 11;
}
.alert__custom{
  font-weight: bold;
  border: 2px solid red;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 10px;
}
.alert__name{
  color: brown;
  width: 200px;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>