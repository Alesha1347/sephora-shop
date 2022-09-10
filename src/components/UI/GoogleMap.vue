<template>
<div>
    <GmapMap
  :center="center"
  :zoom="7"
  style="width: 500px; height: 300px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :title="m.title"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'MyGoogleMap',
    props:{
        latitude: Number,
        longitude: Number,
        title: String
    },
    data(){
        return{
            center: {lat: this.latitude, lng: this.longitude},
            markers: [
                {
                position: {lat: this.latitude, lng: this.longitude},
                title: this.title
                },

            ]
        }
    },
    methods:{
        ...mapActions({
            GET_STORES_FROM_API: 'stores/GET_STORES_FROM_API'
        })
    },
    computed:{
        ...mapGetters({
            STORES: 'stores/STORES'
        })
    },
    mounted(){
        // this.GET_STORES_FROM_API()
    }
}
</script>

<style>

</style>