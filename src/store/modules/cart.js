const cart = {
    state:{
        cart: []
    },
    mutations:{
        SET_CART(state, product){
            const addItem = state.cart.find(item => item.productId === product.productId)
            addItem ? addItem.qty++ : state.cart.push({...product, qty: 1})
        }
    },
    actions:{
        ADD_TO_BASKET({commit}, product){
            commit('SET_CART', product)
        }
    },
    getters:{
        CART: state => state.cart
    },
    namespaced: true
}
export default cart