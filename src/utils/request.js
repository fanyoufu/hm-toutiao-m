// 对aixos进行封装
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

export default request
