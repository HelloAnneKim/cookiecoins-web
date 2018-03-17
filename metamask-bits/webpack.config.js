var path = require('path');
var webpack = require('webpack');

// Based on template from:
// https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
module.exports = {
    context: __dirname,
    entry : {
        loadUserData: path.join(__dirname,'/loadUserData.js')
    },
    output: {
        path: path.join(__dirname,'/public/js'),
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /.jsx?$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    presets : ['es2015']
                }
            },
            { test : /\.css$/, loader : 'css-loader' },
            { test: /\.(svg|png|ttf|woff|eot|woff2)(\?.*)?$/, loader: 'file' },
        ]
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};