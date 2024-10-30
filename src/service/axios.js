//import 'dotenv/config'
import axios from 'axios'

const baseURL = 'https://api.pexels.com/v1/'
const API_KEY='BB5hoJa6mTteeQaVADmRt43jjgU2zUGUGfXXmenjzHMvSx3G1rnKKMmc'

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: { 'Authorization': API_KEY }
})

const getImages = (search, page=1) => {
    return axiosInstance.get('search', {
        params: {
            query: search,
            page: page,
            per_page: '8',
            next_page: "https://api.pexels.com/v1/curated/?page=2&per_page=1"
        },
    })
}

export {
    getImages
}