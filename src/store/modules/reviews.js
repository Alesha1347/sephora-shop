import api from '../../api'

const reviews = {
    state:{
        reviews: [],
        limit: 10,
        page: 1,
        ratingValue: '',
        productId: '',
        totalReviews: 0,
    },
    mutations:{
        SET_REVIEWS(state, reviews){
            state.reviews = reviews
        },
        SET_TOTAL(state, totalReviews){
            state.totalReviews = totalReviews
        },
        CHANGE_PAGE_REVIEWS(state, page){
            state.page = page
        },
        SET_RATING(state, rating){
            state.ratingValue = rating
        },
        SET_PRODUCT_ID(state, productId){
            state.productId = productId
        }
    },
    actions:{
        GET_REVIEWS_FROM_API({commit}){
            const queryParams = {
                Limit: this.state.reviews.limit,
                Offset: this.state.reviews.page,
                ProductId: this.state.reviews.productId || JSON.parse(localStorage.getItem('productId')),
            }
            if(this.state.reviews.ratingValue){
                queryParams.RatingValue = this.state.reviews.ratingValue
            }
            api.get('reviews/list/', queryParams)
            .then(reviews =>{
                commit('SET_REVIEWS', reviews.data.Results)
                commit('SET_TOTAL', reviews.data.TotalResults)
            })
        },
        CHANGE_PAGE_REVIEWS({commit, dispatch}, page){
            console.log(page)
            commit('CHANGE_PAGE_REVIEWS', page)
            dispatch('GET_REVIEWS_FROM_API')
        },
        SET_RATING({commit, dispatch}, rating){
            commit('SET_RATING', rating)
            dispatch('GET_REVIEWS_FROM_API')
        },
        SET_PRODUCT_ID({commit, dispatch}, productId){
            commit('SET_PRODUCT_ID', productId)
            dispatch('GET_REVIEWS_FROM_API')
            console.log(productId)
        }
    },
    getters:{
        REVIEWS: state => state.reviews,
        totalReviews: state => state.totalReviews
    },
    namespaced: true
}

export default reviews