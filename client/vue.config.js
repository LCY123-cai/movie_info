const path = require('path')

module.exports = {
    devServer: {
      // proxy: 'http://localhost:3000'
      proxy: {
        '/api': {
          target: process.env.VUE_APP_MOCK_SERVER,
          pathRewrite: { '^/api': '' }
        }
      }
    },
    chainWebpack: config => {
      config.resolve.alias
        .set('services', path.resolve(__dirname, './src/services'))
    }
  }
