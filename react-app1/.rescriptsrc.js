const { name } = require('./package');

module.exports = {
  webpack: config => {
    config.output.library = 'appReact';
    config.output.libraryTarget = 'umd';
    config.output.globalObject = 'window';
    config.output.jsonpFunction = `webpackJsonp_appReact`;
    return config;
  },

  devServer: _ => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = true;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
