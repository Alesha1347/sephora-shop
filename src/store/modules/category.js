import axios from "axios"

const category = {
    state:{
        categories: [],
        childCategories: []
    },
    mutations:{
        SET_CATEGORIES(state, categories){
            state.categories = categories
        }
    },
    actions:{
        GET_CATEGORIES({commit}){
            axios.get('https://sephora.p.rapidapi.com/categories/v2/list-root', {
                headers:{
                    'x-rapidapi-host': 'sephora.p.rapidapi.com',
                    'x-rapidapi-key': '446337a16dmshcd6301d94564933p13a1a5jsnbef0bf013d03'                
                }
            })
            .then(categories =>{
                commit('SET_CATEGORIES', categories.data.rootCategories)
                // console.log(categories.data.rootCategories)
            })
            .catch(err => console.log(err))
        }
    },
    getters:{
        CATEGORIES: state => state.categories
    },
    namespaced: true
}
export default category