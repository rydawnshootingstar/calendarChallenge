const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('styles.css');
const dotenv = require('dotenv');
const webpack = require('webpack');

//this is "production" on heroku deployment, set to "test" when running test script, so it will be dev otherwise
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//import key values set in config files
if(process.env.NODE_ENV ==='test'){
    dotenv.config({path: '.env.test'});
}else if(process.env.NODE_ENV === 'development'){
    dotenv.config({path: '.env.development'});
};


module.exports = (env)=> {
    const isProduction = env === 'production';

    return {

        entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname,'public','dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:  [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: CSSExtract.extract({
            use: [
                //'style-loader',
                {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }, {
                loader:'sass-loader',
                options: {
                    sourceMap: true
                }
            }],
            })
        }]
    },
    plugins: [
        CSSExtract
      ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    }
    }
}