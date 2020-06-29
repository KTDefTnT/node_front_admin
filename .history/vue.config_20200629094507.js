const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias:{
        'src': path.resolve('./src'),
        'core': path.resolve('./src/core'),
        'components': path.resolve('./src/components')
      }
    }
  }
};