//import 'dotenv/config'
import axios from 'axios'

const baseURL = 'https://api.pexels.com/v1/'
const API_KEY='BB5hoJa6mTteeQaVADmRt43jjgU2zUGUGfXXmenjzHMvSx3G1rnKKMmc'

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: { 'Authorization': API_KEY }
})

const getImages = () => {
    return axiosInstance.get('search', {
        params: {
            query: 'animals',
            per_page: '1'
        },
    })
}

export {
    getImages
}