import api from '@/api'

const stores = {
    state:{
        stores: [],
        latitude: 38.8951,
        longitude: -77.0364,
        radius: 25,
        isLoaded: false
    },
    mutations:{
        SET_STORES(state, stores){
            state.stores = stores.slice(1)
        },
        SET_LAT_LNG(state, city){
            state.latitude = city.lat
            state.longitude = city.lng
        }
    },
    actions:{
        GET_STORES_FROM_API({commit}){
            this.state.stores.isLoaded = true
            const queryParams = {
                latitude: this.state.stores.latitude,
                longitude:  this.state.stores.longitude,
                radius: this.state.stores.radius
            }
            api.get(`stores/list/`, queryParams)
            .then((data) => {
                commit('SET_STORES', data.data.stores)
            })
            .catch(err => console.log(err))
            .finally(() => this.state.stores.isLoaded = false)
        },
        SET_LAT_LNG({commit, dispatch}, city){
            commit('SET_LAT_LNG', city)
            dispatch('GET_STORES_FROM_API')
        }
    },
    getters:{
        STORES: state => state.stores,
        isLoaded: state => state.isLoaded
    },
    namespaced: true
}
export default stores