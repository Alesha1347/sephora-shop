import api from '../../api'

const reviews = {
    state:{
        reviews: [],
        limit: 10,
        page: 1,
        ratingValue: '',
        productId: 'P454378',
        totalReviews: 0
    },
    mutations:{
        SET_REVIEWS(state, reviews){
            state.reviews = reviews
        },
        SET_TOTAL(state, totalReviews){
            state.totalReviews = totalReviews
        }
    },
    actions:{
        GET_REVIEWS_FROM_API({commit}){
            const queryParams = {
                Limit: this.state.reviews.limit,
                Offset: this.state.reviews.page,
                ProductId: this.state.reviews.productId
            }
            api.get('reviews/list/', queryParams)
            .then(reviews =>{
                commit('SET_REVIEWS', reviews.data.Results)
                commit('SET_TOTAL', reviews.data.TotalResults)
                console.log(reviews.data.Results)
            })
        }
    },
    getters:{
        REVIEWS: state => state.reviews,
        totalReviews: state => state.totalReviews
    },
    namespaced: true
}

export default reviews