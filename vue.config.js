const path = require('path')

module.exports = {
  // devServer: {
    // before: require('./src/mock/index.ts')
  // },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/variable.less')
      ]
    }
  }
}
