import microAppConfig from './config.js' // 此文件代码在下方
import { start, registerMicroApps, initGlobalState } from 'qiankun'
// 乾坤配置  https://qiankun.umijs.org/zh/api
const qkConfig = {
  sandbox: { strictStyleIsolation: true } // 开启shadow dom沙箱隔离
}
let actions = null
/**
 * @description:  添加监测状态
 */
function addState (state) {
  if (!actions) {
    /**
     * @description:  乾坤初始化全局监听状态
     * @param state要初始化的值
     */
    actions = initGlobalState(state)
    actions.onGlobalStateChange(
      (value, prev) => {
        ;
        console.log(`[主应用接收到值变化 - ${actions}]:`, value, prev)
      }
    )
  } else {
    /**
     * @description:  乾坤设置state值
     * @param state要更新的值
     */
    actions.setGlobalState(state)
  }
}

/**
 * @description:  注册子应用
 */
function registerApp () {
  /**
   * @description:  乾坤注册子应用
   * @param1 子应用配置
   * @param2 打开子应用时候触发的生命周期
   */
  registerMicroApps(microAppConfig, {
    beforeLoad: [
      app => {
        console.log('[主应用] before load %c%s', 'color: green;', app.name)
      }
    ],
    beforeMount: [
      app => {
        console.log('[主应用] before mount %c%s', 'color: green;', app.name)
      }
    ],
    afterMount: [
      app => {
        console.log('[主应用] afterMount mount %c%s', 'color: green;', app.name)
      }
    ],
    afterUnmount: [
      app => {
        console.log('[主应用] after unmount %c%s', 'color: green;', app.name)
      }
    ]
  })
}

/**
 * @description:  挂载乾坤框架
 */
function setupQk () {
  const state = { a: 123 }
  registerApp()
  addState(state)
  /**
   * @description:  乾坤开启服务
   * @param1 全局配置
   */
  start(qkConfig)
}

export default setupQk
