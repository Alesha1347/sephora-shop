<template>
<div class="">
    
    <div class="alert__container" v-if="isShowAlertCart">
        <div class="alert__custom"><div class="alert__name">{{alertBasketName}}</div> добавлен в корзину</div>
    </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'MyAlertCart',
    props:{
        alertBasketName:{
            type: String,
            default:() => ''
        }
    },
    computed:{
        ...mapGetters({
            isShowAlertCart: 'cart/isShowAlertCart',
        })
    }
}
</script>
