const favourites = {
    state:{
        favourites: [],
        alertFavName: '',
        isShowAlertFav: false
    },
    mutations:{
        SET_FAVOURITES(state, product){
            state.favourites.push(product)
        },
        REMOVE_FAVOURITES(state, product){
            state.favourites = state.favourites.filter(item => item.productId !== product.productId)
        },
        SET_FAV_NAME(state, name){
            state.alertFavName = name
        },
        CHANGE_FAV_ALERT(state){
            state.isShowAlertFav = true
            setTimeout(() => state.isShowAlertFav = false, 1500)
        }
    },
    actions:{
        SET_FAVOURITES({commit}, product){
            commit('SET_FAVOURITES', product)
        },
        REMOVE_FAVOURITES({commit}, product){
            commit('REMOVE_FAVOURITES', product)
        },
        SET_FAV_NAME({commit}, name){
            commit('SET_FAV_NAME', name)
        },
        CHANGE_FAV_ALERT({commit}){
            commit('CHANGE_FAV_ALERT')
        }
    },
    getters:{
        FAVOURITES: state => state.favourites,
        alertFavName: state => state.alertFavName,
        isShowAlertFav: state => state.isShowAlertFav
    },
    namespaced: true
}
export default favourites