import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mRquest from './service'
import 'normalize.css'
import './assets/css/index.css'
// import './service/axios_demo'
mRquest.request({
  url: '/home/multidata',
  method: 'GET',
  intercepiors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      return config
    },
    responseInterceptor: (res) => {
      console.log(res)
      return res
    }
  }
})
createApp(App).use(store).use(router).mount('#app')
