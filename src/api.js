import axios from "axios"

const transformRequest = (jsonData = {}) => Object.entries(jsonData)
    .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join('&');

const api = {
    url: 'https://sephora.p.rapidapi.com/',
    token: null,
    utm: localStorage.getItem('utm'),

    async get(url, data) {

        return axios.get(this.url + url + `?${transformRequest(data)}`, {
            headers:{
                'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
                'X-RapidAPI-Key': 'ff7bd83116msh5e61b91468aafaap13f98ajsnc24a4e5febc7'}
        })
            .then((response) => {
                return response;
            })
            // .catch((error) => {
            //     //
            // })
            .finally(() => {
                // always executed
            });
    },
};

export default api