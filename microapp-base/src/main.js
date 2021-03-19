import Vue from 'vue'
import App from './App.vue'
import router from './router'
import setupQk from '@/setup/index'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
setupQk()
