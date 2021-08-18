import { createApp } from 'vue';
import 'normalize.css'
import './assets/css/index.less'
//import './service/axios-demo'
//全局引入
// import ElementPlus from 'element-plus'
// import "element-plus/lib/theme-chalk/index.css"

//import 'element-plus/lib/theme-chalk/base.css'
import App from './App.vue';
import router from './router';
import store from './store';
import { globalRegister } from './global'

const app = createApp(App)
//globalRegister(app)
app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app');



// Request.request({
//   url: "/home/multidata",
//   method: 'GET',
//   interceptors: {
//     requestInterceptors: config => {
//       console.log("单独的拦截请求")
//       return config
//     },
//     responseInterceptors: res => {
//       console.log("单独的响应请求")
//       return res
//     }
//   },
//   showLoading: false
// })

