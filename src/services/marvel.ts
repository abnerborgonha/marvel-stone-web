import axios from 'axios'
import 'dotenv/config'

export const marvel = axios.create({
  baseURL: process.env.API_HOST_MARVEL
})

marvel.defaults.params = {
  ts: 'thesoer',
  apikey: process.env.API_KEY_MARVEL,
  hash: process.env.API_HASH_MARVEL,
  limit: 100,
}