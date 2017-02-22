var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: {
        app: ['webpack-hot-middleware/client?reload=true', __dirname + "/app/main.js"]
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js"
    },
    devtool: "eval-source-map",
    module:{
        loaders:[{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url?limit=10000&name=[path][name].[ext]'
        }, {
            test: /.js$/,
            exclude: /node_modules/,
            loader:'babel-loader'
        },{
            test: /\.sass$|\.scss$/,
            exclude: /node_modules/,
            loader: 'style!css!sass?sourceMap'
        },{
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url?limit=10000&name=fonts/+[name].[hash:7].[ext]',
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    resolve:{
        extensions:['', '.js', '.jsx']
    }
    // devServer:{
    //     contentBase:"./public",
    //     colors: true,
    //     historyApiFallback: true,
    //     inline: true
    // }
}
