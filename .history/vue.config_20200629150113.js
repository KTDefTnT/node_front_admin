const path = require('path');
// import path from 'path';

module.exports = {
  configureWebpack: {
    resolve: {
      alias:{
        'src': path.resolve(__dirname, "./src"),
        'core': path.resolve(__dirname, "./src/core"),
        'components': path.resolve(__dirname, "./src/components"),
        'view': path.resolve(__dirname, "./src/view")
      }
    }
  }
};