import MRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const mRequest = new MRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showLoading: true,
  intercepiors: {
    requestInterceptor: (config) => {
      console.log('请求拦截成功')
      console.log(config)
      return config
    }
  }
})
export default mRequest
