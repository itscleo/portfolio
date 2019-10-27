const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./client/src"),
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/react"]
        }
      }
    ]
  },
  mode: "development"
};