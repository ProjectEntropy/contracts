var webpack = require("webpack");

module.exports = {
  entry: './interface.js',
  output: {
    path: "./build",
    filename: 'entropy_interface.js',
    library: 'EntropyLib',
    libraryTarget: 'var'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx|es6)$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.json$/i, loader: "json-loader"},
      { test: /\.sol/, loader: 'truffle-solidity' }
    ]
  },
  devServer: {
    stats: 'errors-only',
  }
};
