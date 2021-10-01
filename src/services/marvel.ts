import axios from 'axios'

export const marvel = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST_MARVEL
})

marvel.defaults.params = {
  ts: 'thesoer',
  apikey: process.env.NEXT_PUBLIC_API_KEY_MARVEL,
  hash: process.env.NEXT_PUBLIC_API_HASH_MARVEL,
  limit: 100
}
