import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface MRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
export interface MRequestConfig extends AxiosRequestConfig {
  intercepiors?: MRequestInterceptors
  showLoading?: boolean
}
