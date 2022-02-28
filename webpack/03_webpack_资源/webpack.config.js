const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {DefinePlugin} = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       outputPath: "img",
      //       name: "[name]-[hash:6].[ext]",
      //       esModule: false,
      //     },
      //   },
      //   type: "javascript/auto",
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       limit:120*1024,
      //       outputPath: "img",
      //       name: "[name]-[hash:6].[ext]",
      //       esModule: false,
      //     },
      //   },
      //   type: "javascript/auto",
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 120 * 1024,
          },
        },
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        }
      },
      // {
      //   test: /\.(eot|ttf|woff2?)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       outputPath: "font",
      //       name: "[name]-[hash:6].[ext]",
      //       esModule: false,
      //     }
      //   },
      //   type: "javascript/auto",
      // }
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      }

    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: "webpack wwk"
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: "public",
        to: "./",
        globOptions: {
          ignore: ["**/index.html"]
        }
      }]
    })
  ]
}
