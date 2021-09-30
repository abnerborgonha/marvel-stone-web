import axios from 'axios'
const api = axios.create({
  baseURL: 'http://marvel.api.abnerborgonha.com/v1'
})


export default api