import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
        debug: true,
        devtool: 'source-map',
        noInfo: false,
        entry: {
            vendor: path.resolve(__dirname, 'src/vendor'),
            main: path.resolve(__dirname, 'src/index')
        },
        target: 'web',
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: '[name].[chunkhash].js' // this code generate random number file name
    },
    plugins: [
        // Use CommonsChunkPlugin to create a separate bundle
        // of vendor libraries so that they're cached seprately.
        new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
        }),
        // Generate an external css file with a hash in the filename
        new ExtractTextPlugin('[name].[contenthash].css'),
        // Hash the file using MD5 do that their names change when the content changes
        new WebpackMd5Hash(),
        // Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),
        // Minify JS
        new webpack.optimize.UglifyJsPlugin(),
        // create HTML file that includes referance to bundled JS.
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
  
        inject: true,
        // Properties you define here are available in index.html
        // using htmlWebpackPlugin.option.varName
        trackJSToken: 'a372f6b9c4fc442887286743a57a92c2'
      }),
    ],
    module: {
        loaders: [
        {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
        // {test: /\.css$/, loaders: ['style','css']}
        {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
        ]
     }
}
