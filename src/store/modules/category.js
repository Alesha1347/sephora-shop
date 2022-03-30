import api from '@/api'

const category = {
    state:{
        categories: [],
        childCategories: [],
        categoryName: '',
        categoryId: ''
    },
    mutations:{
        SET_CATEGORIES(state, categories){
            state.categories = categories
        },
        SET_CATEGORY_NAME(state, categoryName){
            state.categoryName = categoryName
        },
        SET_CATEGORY_ID(state, categoryId){
            state.categoryId = categoryId
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
        SET_CATEGORY_NAME({commit}, categoryName){
            commit('SET_CATEGORY_NAME', categoryName)
        },
        SET_CATEGORY_ID({commit}, categoryId){
            commit('SET_CATEGORY_ID', categoryId)
        }
    },
    getters:{
        CATEGORIES: state => state.categories,
        CATEGORY_NAME: state => state.categoryName,
        CATEGORY_ID: state => state.categoryId
    },
    namespaced: true
}
export default category