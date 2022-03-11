// import axios from "axios"

const products = {
    state:{
        products: [],
        category: ''
    },
    mutations:{
        SET_CATEGORY(state, category){
            state.category = category
        },
        SET_PRODUCTS(state, products){
            state.products = products
        }
    },
    actions:{
        GET_PRODUCTS_FROM_API({commit}){
            // let query = 'https://sephora.p.rapidapi.com/products/list/?currentPage=1&pageSize=60'
            let query = '?currentPage=1&pageSize=60'
            if(this.state.products.category){
                query += '&categoryId=' + this.state.products.category
                console.log(query)
                console.log(this.$api)
            }
            // axios.get(query, {
            //     headers:{
            //         'x-rapidapi-host': 'sephora.p.rapidapi.com',
            //         'x-rapidapi-key': '446337a16dmshcd6301d94564933p13a1a5jsnbef0bf013d03'                
            //     }
            // })
            this.$api.get(query)
            .then(products =>{
                commit('SET_PRODUCTS', products.data.products)
                console.log(products.data.products)
            })
            .catch(err => console.log(err))
        },
        SET_CATEGORY({dispatch, commit}, category){
            commit('SET_CATEGORY', category)
            dispatch('GET_PRODUCTS_FROM_API')
        }
    },
    getters:{
        PRODUCTS: state => state.products,
        category: state => state.category
    },
    namespaced: true
}
export default products