import api from '@/api'

const category = {
    state:{
        categories: [],
        childCategories: [],
        requestChilCategories: [],
        categoryId: ''
    },
    mutations:{
        SET_CATEGORIES(state, categories){
            state.categories = categories
        },
        // SET_CATEGORY_ID(state, categoryId){
        //     state.categoryId = categoryId
        // },
        SET_REQUEST_CATEGORIES(state, requestChilCategories){
            state.requestChilCategories = requestChilCategories
        }
    },
    actions:{
        GET_CATEGORIES({commit, dispatch}){
            api.get('categories/v2/list-root')
            .then(categories =>{
                commit('SET_CATEGORIES', categories.data.rootCategories)
                localStorage.setItem(`categories`, JSON.stringify(categories.data.rootCategories))
                dispatch('GET_CHILD_CATEGORIES')
                console.log(categories.data.rootCategories)
            })
            .catch(err => console.log(err))
        },
        GET_CHILD_CATEGORIES(){
            this.state.category.categories.forEach((item, i) =>{
                setTimeout(() =>{
                    api.get('categories/list/?categoryId=' + item.categoryId)
                    .then(category =>{
                        localStorage.setItem(`${item.categoryId}`, JSON.stringify(category.data.childCategories))
                        console.log(category.data)
                    })
                    .catch(err => console.log(err))        
                }, i * 1000)
            })
        },
        GET_REQUEST_CATEGORIES({commit}){
                api.get('categories/list/?categoryId=' + JSON.parse(localStorage.getItem('categoruId')))
                .then(categories =>{
                    commit('SET_REQUEST_CATEGORIES', categories.data.childCategories)
                    console.log(categories.data.childCategories)
                })
                .catch(err => console.log(err))    
        },
        // SET_CATEGORY_ID({commit, dispatch}, categoryId){
        //     commit('SET_CATEGORY_ID', categoryId)
        //     dispatch('GET_REQUEST_CATEGORIES', categoryId)
        // }
    },
    getters:{
        CATEGORIES: state => state.categories,
        CATEGORY_ID: state => state.categoryId,
        REQUEST_CATEGORIES: state => state.requestChilCategories
    },
    namespaced: true
}
export default category