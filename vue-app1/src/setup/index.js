let app = null
let createApp = null
let appEmitIns = null

/**
 * @description:  监测数据变化
 */
function Monitor (props) {
  appEmitIns = props
  appEmitIns.onGlobalStateChange((value, prev) => {
    console.log(`[vue应用接收到值变化 - ${props.name}]:`, value, prev)
  }, true)
}

/**
 * @description:  修改应用的值，注意：子应用中只能修改已存在的一级属性
 */

export function appEmit (obj) {
  if (appEmitIns) {
    appEmitIns.setGlobalState(obj)
  }
}
/**
 * @description:  子应用初始化
 */
export async function bootstrap () {
  console.log('[vue应用] bootstrap')
}

/**
 * @description:  子应用挂载
 */
export async function mount (props) {
  console.log('[vue应用] mount', props)
  if (!app) {
    const { container } = props
    app = createApp()
    app.$mount(container ? container.querySelector('#app') : '#app')
  }
  Monitor(props)
}

/**
 * @description:  子应用卸载
 */
export async function unmount () {
  console.log('[vue应用] unmount')
  app.$destroy()
  app.$el.innerHTML = ''
  app = null
  appEmitIns = null
}

/**
 * @description:  挂载乾坤子应用
 */
function setupQk (_createApp) {
  // qiankun 将会在微应用 bootstrap 之前注入一个运行时的 publicPath 变量，你需要做的是在微应用的 entry js 的顶部添加
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  createApp = _createApp
}
export default setupQk
