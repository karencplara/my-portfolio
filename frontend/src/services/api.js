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

export const editItem = (slug, {title, description, longDescription, image, technologies}) => {
    axios
        .patch(`api/portfolio/${slug}`, {
            title, description, longDescription, image, technologies
        })
        .then(res => res)
        .catch(e => e)
}

export const addItem = ({title, description, longDescription, image, technologies}) => {
    axios
        .post('api/portfolio', {
            title, description, longDescription, image, technologies
        })
        .then(res => res)
        .catch(e => e)
}