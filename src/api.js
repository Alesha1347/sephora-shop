import axios from "axios"

const api = {
    url: 'https://asos2.p.rapidapi.com/products/v2/list/',
    async get(url){
        return axios.get(this.url + url, {
            headers:{
    'x-rapidapi-host': 'asos2.p.rapidapi.com',
    'x-rapidapi-key': '446337a16dmshcd6301d94564933p13a1a5jsnbef0bf013d03'
    }
        })
        .then(response =>{
            return response
        })
    }
}
export default api