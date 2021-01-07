import axios from 'axios'

export default function(config) {
  const axiosInstance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 2000
  })

  axiosInstance.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    console.log(err)
  })

  axiosInstance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })

  return axiosInstance(config)
}
