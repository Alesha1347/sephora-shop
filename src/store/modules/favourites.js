const favourites = {
    state:{
        favourites: []
    },
    mutations:{
        SET_FAVOURITES(state, product){
            state.favourites.push(product)
        }
    },
    actions:{
        SET_FAVOURITES({commit}, product){
            commit('SET_FAVOURITES', product)
        }
    },
    getters:{
        FAVOURITES: state => state.favourites
    },
    namespaced: true
}
export default favourites