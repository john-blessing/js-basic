/*
 * @Author: your name
 * @Date: 2021-08-08 15:54:17
 * @LastEditTime: 2021-09-18 17:43:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/webpack/webpack.config.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasureWebpackPlugin();

module.exports = smp.wrap({
  mode: "production",
  entry: {
    app: "./index.js",
  },
  output: {
    filename: "./[name].[chunkhash].js",
    library: {
      type: "umd",
    },
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.md/,
        use: [
          {
            loader: 'str-loader',
          },
        ],
      },
      {
        test: /\.scss/,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader'
        ]
      }
    ],
  },
  resolveLoader:{
    modules: [path.resolve(__dirname, 'loaders'), 'node_modules']
  },
  plugins: [new HtmlWebpackPlugin()]
});
