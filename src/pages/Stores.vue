<template>
<div class="stores">
    <h2 class="stores__heading">Find a Sephora</h2>
    <div class="stores__search">
    <input 
    class="store__search" 
    type="text" 
    v-model="city"
    placeholder="search city..."
    >
    <button class="store__btn" @click="getCity(city)">search</button>
    </div>
    <div class="stores__cities">
        <span style="fontWeight: bold">Доступные города</span>: Вашингтон, Нью-Йорк, Лос-Анджелес, Чикаго, Филадельфия, Даллас, Сиэтл, Бостон, Лас-Вегас, Атланта
    </div>
    <MySpinner v-if="isLoaded"/>
    <div class="stores__info">
        <div class="stores__map">
        <GmapMap
        :center="center"
        :zoom="9"
        style="width: 700px; height: 500px"
        >
        <GmapMarker
            v-for="(store, index) in markers"
            :key="index"
            :position="store"
            :title="store.title"
            :clickable="true"
            :draggable="true"
            @click="getStore(store.id)"
            />
        </GmapMap>
        </div>
        <div class="stores__store" v-if="isShowInfoStore">
            <div class="store__name">
                <span style="fontWeight: bold">Store</span>:
                {{store.displayName}}
            </div>
            <div class="store__city">
            <span style="fontWeight: bold">City</span>:{{store.address.city}}
            </div>
            <div class="store__address">
            <span style="fontWeight: bold">Address</span>:{{store.address.address1}}
            </div>
            <div class="store__hours">
            <span style="fontWeight: bold">Opening hours</span>:{{store.storeHours.mondayHours}}
            </div>
            <div class="store__show-all" @click="showAll">show all ➜</div>
        </div>
        <div class="stores__all" v-else>
        <div class="store__info"
        v-for="store in STORES"
        :key="store.storeId"
        >
            <div class="store__name">
            <span style="fontWeight: bold">Store</span>:
                {{store.displayName}}
            </div>
            <div class="store__city">
            <span style="fontWeight: bold">City</span>:{{store.address.city}}
            </div>
            <div class="store__address">
            <span style="fontWeight: bold">Address</span>:{{store.address.address1}}
            </div>
            <div class="store__hours">
            <span style="fontWeight: bold">Opening hours</span>:{{store.storeHours.mondayHours}}
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import {cities} from '../cities'
export default {
    data(){
    return{
        center: {lat: 38.8951, lng: -77.0364},
        markers: [],
        city: '',
        store: {},
        isShowInfoStore: false
        }
    },
    methods:{
        ...mapActions({
            GET_STORES_FROM_API: 'stores/GET_STORES_FROM_API',
            SET_LAT_LNG: 'stores/SET_LAT_LNG'
        }),
        getStores(){
            this.STORES.map(store =>{
            this.markers.push({lat: store.latitude, lng: store.longitude, title: store.displayName, id: store.storeId})
        })
        },
        getCity(city){
            return cities.find(el => {
                if(el.city.toLowerCase() == city.toLowerCase()){
                    this.SET_LAT_LNG(el)
                    this.center.lat = el.lat
                    this.center.lng = el.lng
                }
            })
        },
        getStore(id){
            this.STORES.find(store => {
                if(store.storeId === id){
                    this.store = store
                    this.isShowInfoStore = true
                }
            })
        },
        showAll(){
            this.isShowInfoStore = false
        }
    },
    computed:{
        ...mapGetters({
            STORES: 'stores/STORES',
            isLoaded: 'stores/isLoaded'
        })
    },
    mounted(){
        this.GET_STORES_FROM_API()
        this.getStores()
    },
    watch:{
        'STORES': function(){
            this.isShowInfoStore = false
            this.markers = []
            this.getStores()
        }
    }
}
</script>

<style>
.stores{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.stores__heading{
    font-size: 30px;
    font-weight: bold;
    margin: 60px 0 30px;
}
.stores__search {
    margin-bottom: 10px;
}
.store__search {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    text-align: center;
    outline: none;
}
.store__btn {
    outline: none;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: white;
    border-left: none;
}
.stores__cities{
    margin-bottom: 40px;
    font-size: 13px;
}
.stores__info {
    display: flex;
    justify-content: space-between;
    width: 1000px;
}
.stores__map {
    margin-right: 10px;
}
.stores__store {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    border: 1px solid;
    height: 200px;
    position: relative;
}
.store__show-all{
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    color: brown;
    font-weight: bold;
}
.stores__all{
    width: 300px;
    height: 500px;
    overflow: auto;
}
.store__info{
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin-bottom: 20px;
}
</style>