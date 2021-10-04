import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HOST}/v1`
})

axios.interceptors.request.use((config) => {
  // Do something before request is sent
  console.log(config)
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

export default api
