const cart = {
    state:{
        cart: [],
        isShowAlertCart: false,
        alertBasketName: ''
    },
    mutations:{
        SET_CART(state, product){
            const addItem = state.cart.find(item => item.skuId === product.skuId)
            addItem ? addItem.qty++ : state.cart.push({...product, qty: 1})
        },
        PLUS_QTY(state, skuId){
            const currentQty = state.cart.find(item => item.skuId === skuId)
            if(currentQty) currentQty.qty++
        },
        MINUS_QTY(state, skuId){
            const currentQty = state.cart.find(item => item.skuId === skuId)
            if(currentQty.qty > 1) currentQty.qty--
        },
        CART_REMOVE(state, skuId){
            state.cart = state.cart.filter(item => item.skuId !== skuId)
        },
        SET_CART_NAME(state, name){
            state.alertBasketName = name
        },
        CHANGE_CART_ALERT(state){
            state.isShowAlertCart = true
            setTimeout(() => state.isShowAlertCart = false, 1500)
        }
    },
    actions:{
        ADD_TO_BASKET({commit}, product){
            commit('SET_CART', product)
        },
        PLUS_QTY({commit}, skuId){
            commit('PLUS_QTY', skuId)
        },
        MINUS_QTY({commit}, skuId){
            commit('MINUS_QTY', skuId)
        },
        CART_REMOVE({commit}, skuId){
            commit('CART_REMOVE', skuId)
        },
        SET_CART_NAME({commit}, name){
            commit('SET_CART_NAME', name)
        },
        CHANGE_CART_ALERT({commit}){
            commit('CHANGE_CART_ALERT')
        }
    },
    getters:{
        CART: state => state.cart,
        isShowAlertCart: state => state.isShowAlertCart,
        alertBasketName: state => state.alertBasketName
    },
    namespaced: true
}
export default cart