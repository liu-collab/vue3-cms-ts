//const path = require('path');
module.export = {

  //方法一
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components',
  //   }
  // },
  // devServer: {
  // host:'localhost',
  // port:8080,
  // proxy: {
  //     '^/api': {
  //       target: 'http://152.136.185.210:5000',
  //       pathRewrite: {
  //         '^/api': ''
  //       },
  //       changeOrigin: true
  //     }
  //   }
  // },
   devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {  '^/api': '' },
        changeOrigin: true,
      }
    }
  },
  //方法二
  configureWebpack: {
    resolve: {
      alias: {
        coponents: '@/component',
      },
    },

  },
};
