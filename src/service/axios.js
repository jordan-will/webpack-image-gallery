import axios from 'axios'
const baseURL = 'https://api.pexels.com/v1/'

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: { 'Authorization': process.env.API_KEY }
})

const getImages = (search, page=1) => {
    return axiosInstance.get('search', {
        params: {
            query: search,
            page: page,
            per_page: '9',
            next_page: "https://api.pexels.com/v1/curated/?page=2&per_page=1"
        },
    })
}

export {
    getImages
}