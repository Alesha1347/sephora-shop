import axios from "axios"

const promo = {
    state:{
        gifts: []
    },
    mutations:{
        SET_GIFTS(state, gifts){
            state.gifts = gifts
        }
    },
    actions:{
        GET_GIFTS_FROM_API({commit}){
            axios.get('https://sephora.p.rapidapi.com/products/list/?currentPage=1&pageSize=20', {
                params:{categoryId: 'cat60270'},
                headers:{
        'x-rapidapi-host': 'sephora.p.rapidapi.com',
        'x-rapidapi-key': '446337a16dmshcd6301d94564933p13a1a5jsnbef0bf013d03'
                }
            })
            .then(gifts =>{
                commit('SET_GIFTS', gifts.data.products)
                console.log(gifts.data.products)
            })
            .catch(err => console.log(err))
        }
    },
    getters:{
        GIFTS: state => state.gifts
    },
    namespaced: true
}
export default promo