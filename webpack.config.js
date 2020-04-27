'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    // entry: {
    //     app: './src/js/script.js',
    //     appData: './src/js/script2.js'
    // },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/js'
    }, // по умолчанию фал попадает в папку dist
    watch: true,
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader?optional[]=runetime',
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            targets: {
                                edge: "17",
                                firefox: "60",
                                chrome: "67",
                                safari: "11.1",
                                ie: "11"
                            },
                            useBuiltIns: "usage"
                        }]
                    ],

                    plugins: ["es6-promise"]
                }
            }
        }]
    },

};