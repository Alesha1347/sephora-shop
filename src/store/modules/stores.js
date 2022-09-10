import api from '@/api'

const stores = {
    state:{
        stores: []
    },
    mutations:{
        SET_STORES(state, stores){
            state.stores = stores
        }
    },
    actions:{
        GET_STORES_FROM_API({commit}){
            api.get(`stores/list/?latitude=33.9733&longitude=-118.2487&radius=25`)
            .then((data) => {
                commit('SET_STORES', data.data.stores)
                console.log(data.data.stores)
            })
        }
    },
    getters:{
        STORES: state => state.stores
    },
    namespaced: true
}
export default stores