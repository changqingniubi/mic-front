import './public-path'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import setupQk, { appEmit } from '@/setup/index.js'
Vue.config.productionTip = false
Vue.prototype.$appEmit = appEmit
function createApp () {
  return new Vue({
    router,
    render: h => h(App)
  })
}

if (!window.__POWERED_BY_QIANKUN__) {
  /**
   * @description:  保证非嵌套在乾坤子应用可以独立运行
   */
  createApp().$mount('#app')
} else {
  setupQk(createApp)
}

/**
 * @description:  重点：抛出子应用生命周期
 */
export { bootstrap, mount, unmount } from '@/setup/index.js'
