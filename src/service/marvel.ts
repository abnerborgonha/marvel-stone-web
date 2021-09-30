import axios from 'axios'

export const marvel = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'
})

marvel.defaults.params = {
  ts: 'thesoer',
  apikey: '001ac6c73378bbfff488a36141458af2',
  hash: '72e5ed53d1398abb831c3ceec263f18b'
}