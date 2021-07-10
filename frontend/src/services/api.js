import axios from 'axios';

const api = axios.create({
    baseURL: '/api'
})

export default api;

export const deleteItem = (slug) => {
    axios
        .delete(`api/portfolio/${slug}`)
        .then(res => res)
        .catch(e => e)
}

export const editItem = (slug) => {

}