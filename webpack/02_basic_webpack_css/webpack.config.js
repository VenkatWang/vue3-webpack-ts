const path = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./bu ild"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader","css-loader"],
      },
    ],
  },
}
