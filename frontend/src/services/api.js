import axios from 'axios';

import Userfront from '@userfront/react';

Userfront.init('xbr4x4bw');

const accessToken = Userfront.accessToken();

const api = axios.create({
    baseURL: '/api'
})

export default api;

export const deleteItem = (slug) => {
    axios
        .delete(`api/portfolio/${slug}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(res => res)
        .catch(e => e)
}

export const editItem = (slug, {title, description, longDescription, image, technologies}) => {
    axios
        .patch(`api/portfolio/${slug}`, {
            title, description, longDescription, image, technologies
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(res => res)
        .catch(e => e)
}

export const addItem = ({title, description, longDescription, image, technologies}) => {
    axios
        .post('api/portfolio', {
            title, description, longDescription, image, technologies
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(res => res)
        .catch(e => e)
}