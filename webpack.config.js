const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebPackPlugin = require("clean-webpack-plugin");
const build = "build";
module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: path.resolve(__dirname, build),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader"
      },
      { test: /\.(css)$/, use: ["style-loader", "css-loader"] }
    ]
  },
  mode: "development",
  plugins: [
    new CleanWebPackPlugin([build]),
    new HtmlWebpackPlugin({ template: "./src/app/index.html" })
  ]
};
