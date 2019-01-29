const path = require('path')

module.exports = {
  serverPort: 6061,
  components: 'src/components/**/[A-Z]*.js',
  require: [
    path.join(__dirname, 'node_modules/focus-visible/dist/focus-visible.js'),
    path.join(__dirname, 'src/destyleConfig.js')
    path.join(__dirname, 'src/styles.js')
  ],
  /*styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/Wrapper')
  },*/
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
}
