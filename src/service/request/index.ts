import axios, { AxiosInstance } from 'axios'
import type { MRequestConfig, MRequestInterceptors } from './type'
import { ElLoading } from 'element-plus/lib/index'
import 'element-plus/theme-chalk/index.css'
class MRequest {
  instance: AxiosInstance
  interceptors?: MRequestInterceptors
  showLoading: boolean
  loadingInstance1?: any
  constructor(config: MRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.intercepiors
    this.showLoading = config.showLoading ?? true
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        console.log('请求拦截成功23232')
        if (this.showLoading) {
          this.loadingInstance1 = ElLoading.service({
            lock: true,
            text: 'loading...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }

        return config
      },
      (err) => {
        // 将loading移除
        if (this.showLoading) {
          this.loadingInstance1.close()
        }

        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('响应拦截成功1')
        // 将loading移除
        if (this.showLoading) {
          this.loadingInstance1.close()
        }
        return res
      },
      (err) => {
        if (this.showLoading) {
          this.loadingInstance1.close()
        }
        return err
      }
    )
  }
  request(config: MRequestConfig): void {
    if (config.intercepiors?.requestInterceptor) {
      config = config.intercepiors?.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.intercepiors?.responseInterceptor) {
        res = config.intercepiors?.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}
export default MRequest
