import axios from 'axios'
import 'dotenv/config'

const api = axios.create({
  baseURL: `${process.env.API_HOST}/v1`
})


export default api