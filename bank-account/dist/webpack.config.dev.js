"use strict";

var path = require("path");

var slsw = require("serverless-webpack");

var TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  entry: slsw.lib.entries,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".json", ".ts"],
    plugins: [new TSConfigPathsPlugin()]
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  target: "node",
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "ts-loader",
      options: {
        transpileOnly: true
      }
    }]
  },
  plugins: [new ForkTsCheckerWebpackPlugin({
    async: false
  })]
};