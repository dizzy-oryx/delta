import path from 'path'
import devConfig from './webpack.dev.config'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const PATHS = {
  APP: path.join(__dirname, 'src'),
  PUBLIC: path.join(__dirname, 'public')
}

// TODO: Add support for minCssExtractPlugin Later to produce stylesheets for production

// Core configuration shared by all modes
const coreConfig = {
  entry: path.join(PATHS.APP, 'index.js'),
  // default output: path.join(__dirname, 'dist')
  module: {
    rules: [
      // javascript files
      {
        test: /\.jsx?/,
        include: PATHS.APP,
        loader: 'babel-loader'
      },
      // library sass - don't turn into css modules
      {
        test: /\.sass|\.scss/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // global sass - no css modules
      {
        test: /\.global\.sass|\.global\.scss/,
        include: PATHS.APP,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // scoped sass - uses css modules
      {
        test: /\.sass|\.scss/,
        exclude: /\.global\.sass|\.global\.scss/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.PUBLIC, 'index.tmpl.html')
    })
  ]
}

export default (_env, argv) => {
  switch (argv.mode) {
    // where we can add branching config logic for production
    // default to development builds
    default:
      return devConfig(coreConfig)
  }
}
