<template>
    <div class="products__content-show">
        <div class="products__content-name">
                Выводить по: 
        </div>
        <ul class="products__content-showQ" @click="showQ">
            <li 
            class="show__quantity"
            :class="{'active': quant.active}"
            v-for="quant in showBtns"
            :key="quant.id"
            @click="showQ($event)"
            >
            {{ quant.value }}
            </li>

        </ul>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            showBtns: [
                {value: 60, id: 1, active: true},
                {value: 90, id: 2, active: false},
                {value: 120, id: 3, active: false}
            ]
        }
    },
    methods:{
        ...mapActions({
            CHANGE_PAGE_SIZE: 'products/CHANGE_PAGE_SIZE'
        }),
        showQ(event){
            // this.CHANGE_PAGE_SIZE(value)
            this.showBtns.map(item =>{
                if(item.value === +event.target.innerHTML){
                    item.active = true
                } else {
                    item.active = false
                }
            })
        }
    }
}
</script>

<style>
.products__content-show{
    margin-right: 200px;
    font-size: 18px;
    color: gray;
    font-weight: bold;
    display: flex;
    align-items: center;
}
.products__content-showQ {
    display: flex;
    list-style: none;
    cursor: pointer;
    width: 120px;
    margin-left: -25px;
}
.show__quantity {
    margin-right: 10px;
    margin-top: 20px;
}
.show__quantity:last-child{
    margin-right: 0;
}
.show__quantity.active{
    color: black;
}
</style>