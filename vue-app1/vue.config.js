module.exports = {
  devServer: {
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: 'appVue',
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: 'webpackJsonp_appVue',
    }
  },
  publicPath: 'http://localhost:10000/'
}
