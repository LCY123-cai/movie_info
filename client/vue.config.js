module.exports = {
    devServer: {  
      proxy: 'http://localhost:3000'
      // proxy: process.env.VUE_APP_MOCK_SERVER
    }
  }