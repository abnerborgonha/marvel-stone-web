import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HOST}/v1`
})

export default api
