const path = require('path');
// import path from 'path';

module.exports = {
  devServer: {
    port: 9050,
    open: true,
    index: 'portal.html',
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/api': {
        target: `http://192.168.200.115:3030`,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      },
    }
  },
  configureWebpack: config => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
        alias: {
          vue$: "vue/dist/vue.js",
          "@": path.resolve(__dirname, "./src"),
          views: path.resolve(__dirname, "./src/views"),
          assets: path.resolve(__dirname, "./src/assets"),
          components: path.resolve(__dirname, "./src/components")
        }
      }
    });
  }
};