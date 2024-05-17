import axios from 'axios'

const api = axios.create({
    baseURL: "https://6647ca722bb946cf2f9ee11c.mockapi.io"
})

export default api