// var path = require('path')
module.exports = {
  // proxyTable: {
  //   '/api': {
  //     // target:'http://jsonplaceholder.typicode.com',
  //     target: 'http://localhost:8080',
  //     changeOrigin: true,

  //     pathRewrite: {
  //       '/api': ''
  //     }
  //   },
    css: {
      sourceMap: true,

      loaderOptions: {
        scss: {
          prependData: `@import "~@/styles/main.scss";`
        },
      }
    }
  }