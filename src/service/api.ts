import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://marvel.api.abnerborgonha.com/v1'
})
