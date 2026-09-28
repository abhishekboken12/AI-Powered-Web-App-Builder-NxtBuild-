import axios from 'axios'
import Cookies from 'js-cookie'
import "dotenv/config"


const baseUrl = process.env.BASE_URL

const getHeaders = () => {
    const token = Cookies.get('token')
    return token ? {Authorization : `Bearer ${token}`} : {}
}

const api = {
    get : async (url) => {
        const response = await axios.get(`${baseUrl}${url}`, {headers: getHeaders()});
        return response
    },
    post : async (url, data) => {
        const response = await axios.post(`${baseUrl}${url}`, {headers: getHeaders()})
    },
    put: async (url, data) => {
        const response = await axios.post(`${baseUrl}${url}`, {headers : getHeaders()})
    },
    delete: async (url) => {
        const response = await axios.delete(`${baseUrl}${url}`, {headers:getHeaders()})
    }
}

export default api