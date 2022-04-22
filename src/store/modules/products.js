// import axios from 'axios'
import api from '../../api'
const products = {
    state:{
        products: [],
        category: '',
        currentPage: 1,
        pageSize: 60,
        maxPrice: 0,
        pl: null,
        ph: null,
        totalCounts: 0,
        categoryName: ''
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
        },
        SET_CATEGORY_NAME(state, categoryName){
            state.categoryName = categoryName
        },
    },
    actions:{
        GET_PRODUCTS_FROM_API({commit}){
            const queryParams = {
                currentPage: this.state.products.currentPage,
                pageSize:  this.state.products.pageSize,
                categoryId: this.state.products.category
            }
            if(this.state.products.pl){
                queryParams.pl = this.state.products.pl
            } if(this.state.products.ph){
                queryParams.ph = this.state.products.ph
            }

            api.get('products/list/', queryParams)
            .then(products =>{
                commit('SET_PRODUCTS', products.data.products)
                commit('TOTAL_COUNTS', products.data.totalProducts)
                commit('SET_MAX_PRICE', products.data.refinements[products.data.refinements.length - 1].values[0].high)
                commit('SET_CATEGORY_NAME', products.data.displayName)
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
        totalCounts: state => state.totalCounts,
        CATEGORY_NAME: state => state.categoryName,
        pageSize: state => state.pageSize
    },
    namespaced: true
}
export default products