const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(".", "build"), // folder name
    filename: "bundle.js", // file name
  },
  mode: "development",
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader" , "css-loader"] }],
    rules: [{ test: /\.js$/, use: ["babel-loader"] }],
  },
};