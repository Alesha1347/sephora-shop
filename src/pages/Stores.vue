<template>
<div class="stores">
    <h2 class="stores__heading">Find a Sephora</h2>
    <!-- <MyGoogleMap
    v-for="store in STORES"
    :key="store.storeId"
    :latitude="store.latitude"
    :longitude="store.longitude"
    :title="store.displayName"
    /> -->
        <GmapMap
  :center="center"
  :zoom="7"
  style="width: 500px; height: 300px"
>
  <GmapMarker
    v-for="(store, index) in markers"
    :key="index"
    :position="store"
    :title="store.title"
    :clickable="true"
    :draggable="true"
  
  />
    <!-- @click="center=m.position" -->
</GmapMap>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

    data(){
    return{
        center: {lat: 34.0522, lng: -118.244},
        markers: []
        }
    },
    methods:{
        ...mapActions({
            GET_STORES_FROM_API: 'stores/GET_STORES_FROM_API'
        }),
        getStores(){
            this.STORES.map(store =>{
            this.markers.push({lat: store.latitude, lng: store.longitude, title: store.displayName})
        })
        }
    },
    computed:{
        ...mapGetters({
            STORES: 'stores/STORES'
        })
    },
    mounted(){
        this.GET_STORES_FROM_API()
        this.getStores()
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
</style>