const getActiveRule = path => location => location.pathname.startsWith(path)
export default [
  {
    name: 'appReact',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: getActiveRule('/app-react')
  },
  {
    name: 'appVue',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: getActiveRule('/app-vue')
  }
]
