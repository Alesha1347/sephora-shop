import axios from 'axios'
// import api from '../../api'
const products = {
    state:{
        products: [],
        category: '',
        currentPage: 1,
        pageSize: 60,
        maxPrice: 0,
        pl: 0,
        ph: 0,
        totalCounts: 0
    },
    mutations:{
        SET_CATEGORY(state, category){
            state.category = category
        },
        SET_PRODUCTS(state, products){
            state.products = products
        },
        SET_MAX_PRICE(state, maxPrice){
            state.maxPrice = maxPrice
        },
        CHANGE_MIN_PRICE(state, minPrice){
            state.pl = minPrice
        },
        CHANGE_MAX_PRICE(state, maxPrice){
            state.ph = maxPrice
        },
        TOTAL_COUNTS(state, totalCounts){
            state.totalCounts = totalCounts
        },
        SET_PAGE(state, currentPage){
            state.currentPage = currentPage
        }
    },
    actions:{
        GET_PRODUCTS_FROM_API({commit}){
            let query = 'https://sephora.p.rapidapi.com/products/list/'
            if(this.state.products.currentPage){
                query += '?currentPage=' + this.state.products.currentPage
            } if(this.state.products.pageSize){
                query += '&pageSize=' + this.state.products.pageSize
            } if(this.state.products.category){
                query += '&categoryId=' + this.state.products.category
            } if(this.state.products.pl){
                query += '&pl=' + this.state.products.pl
            } if(this.state.products.ph){
                query += '&ph=' + this.state.products.ph
            }
            axios.get(query, {
                headers:{
                    'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
                    'X-RapidAPI-Key': 'e222442e7amsha8e8848b5e264d9p178111jsn1f91a31ea5f9'
                }
            })
            .then(products =>{
                commit('SET_PRODUCTS', products.data.products)
                commit('TOTAL_COUNTS', products.data.totalProducts)
                console.log(products.data.totalProducts)
                // commit('SET_MAX_PRICE', products.data.refinements[products.data.refinements.length - 1].values[0].high)
            })
            .catch(err => console.log(err))
        },
        SET_CATEGORY({dispatch, commit}, category){
            commit('SET_CATEGORY', category)
            dispatch('GET_PRODUCTS_FROM_API')
        },
        CHANGE_MIN_PRICE({commit, }, minPrice){
            commit('CHANGE_MIN_PRICE', minPrice)
            // dispatch('GET_PRODUCTS_FROM_API')
        },
        CHANGE_MAX_PRICE({commit, }, maxPrice){
            commit('CHANGE_MAX_PRICE', maxPrice)
            // dispatch('GET_PRODUCTS_FROM_API')
        },
        SET_PAGE({dispatch, commit}, currentPage){
            commit('SET_PAGE', currentPage)
            dispatch('GET_PRODUCTS_FROM_API')
        }
    },
    getters:{
        PRODUCTS: state => state.products,
        category: state => state.category,
        maxPrice: state => state.maxPrice,
        totalCounts: state => state.totalCounts
    },
    namespaced: true
}
export default products