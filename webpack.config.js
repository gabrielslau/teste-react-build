const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { InjectManifest } = require('workbox-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// carrega as variáveis para usar na configuração do webpack
require('dotenv').config()

const noCaminho = (caminho) => path.join(__dirname, caminho)

const IS_PRODUCTION = process.env.production
// const publicPath = '/'
const publicPath = 'https://d39c1c7uzwppb2.cloudfront.net/'

const plugins = [
  new CleanWebpackPlugin([noCaminho('dist')]),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.$': 'jquery',
    'window.jQuery': 'jquery',
    moment: 'moment',
  }),
  new webpack.DefinePlugin({
    IS_PRODUCTION: JSON.stringify(IS_PRODUCTION),
    // HACK para pegar o caminho público raiz
    STATIC_PATH: JSON.stringify(publicPath.replace('/dist/', '/')),
  }),
  new MiniCssExtractPlugin({
    filename: '[name]-[contenthash].css',
  }),
  new HtmlWebpackPlugin({
    title: 'Sigaweb teste assets',
    template: 'index.template.html',
  }),
  new BundleTracker({
    path: __dirname,
    filename: 'webpack-stats.json',
  }),
  new ForkTsCheckerWebpackPlugin({ async: false }),

  // new BundleAnalyzerPlugin({
  //   analyzerMode: 'static',
  //   generateStatsFile: true
  // }),
]
// TODO: Ativar apenas quando separar o back do front
// if (IS_PRODUCTION) {
//   plugins.push(
//     new InjectManifest({
//       swSrc: noCaminho('frontend/serviceWorker.js'),
//       swDest: noCaminho('public/sw.js'),
//       maximumFileSizeToCacheInBytes: 25 * 1024 * 1024,
//       mode: 'production',
//     })
//   )
// }

module.exports = {
  entry: () => {
    const entries = {
      main: noCaminho('src/index'),
    }

    return entries
  },
  mode: 'development', // Somente ativar o outro quando for feita a mudança para uso de Docker no deploy
  // mode: process.env.SIGA_DEBUG == 'False' ? 'production' : 'development',
  output: {
    path: noCaminho('dist'),
    filename: '[name]-[contenthash].js',
    publicPath,
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|tema)/,
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|tema)/,
        loader: 'babel-loader',
      },
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery',
          },

          {
            loader: 'expose-loader',
            options: '$',
          },
        ],
      },
      {
        test: require.resolve('moment'),
        use: [
          {
            loader: 'expose-loader',
            options: 'moment',
          },
        ],
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,

              postcssOptions: {
                // syntax: 'postcss-scss',
                plugins: [
                  require('autoprefixer')({
                    browsers: ['Chrome >= 13', 'last 3 versions', '> 1%'],
                  }),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                sourceMap: true,
                sourceMapContents: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jfif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        tema: {
          test: /tema/,
          name: 'tema',
          chunks: 'all',
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins,
  resolve: {
    alias: {
      '@root': path.resolve(__dirname),
      '@src': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  stats: 'minimal',
  watchOptions: {
    ignored: ['node_modules'],
  },
}
