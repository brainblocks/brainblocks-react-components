var path = require('path')
const glob = require('glob')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const entries = glob
  .sync('./src/components/**/[A-Z]*.js')
  .reduce((acc, item) => {
    let name = item.replace('./src/components/', '')
    let segments = name.split('/')
    name = segments[1]
    name = name.replace('.js', '')
    acc[name] = item
    return acc
  }, {})
entries.index = './src/index.js'

module.exports = {
  mode: 'production',
  entry: entries,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
    destyle: 'commonjs destyle'
  },
  plugins: [
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      statsFilename: '../stats.json',
      openAnalyzer: false,
      analyzerMode: 'disabled'
    })
  ]
}
