const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
module.exports = {
    mode,
    target,
    devtool,
    devServer: {
      hot: true,
    },
    entry: path.resolve(__dirname, 'src/js/', 'index.js'),
    output: {
        filename: '[name].[contenthash].bundle.js', 
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src', 'index.html'),
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css', 
        })

      ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader:'html-loader',
        },
        {
          test: /\.(c|sa|sc)ss$/i,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
             'css-loader',
             'sass-loader',
             {
               loader: 'postcss-loader',
               options: {
                postcssOptions: {
                  plugins: [require('postcss-preset-env')]
                } 
               }
             }]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          type: 'asset/resource',
          generator: {
              filename: 'static/fonts/[name][ext]'
          }
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/img/[name][ext]'
            }
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          generator: {
              filename: 'static/icons/[name][ext]'
          }
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'dist'),
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-env'],
            }
          }
        }
      ]
    }
    
};
