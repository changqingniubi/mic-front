import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'
Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'appReact',
    entry: '//localhost:3000',
    container: '#react',
    activeRule: '/app-react'
  },
  {
    name: 'appVue',
    entry: '//localhost:8081',
    container: '#vue',
    activeRule: '/app-vue'
  }
])
// 启动 qiankun
start({
  prefetch: false // 取消预加载
})// 开启
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
