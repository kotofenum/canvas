const path = require("path");

module.exports = {
  mode: "development",
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              exclude: /node_modules/,
          },
      ]
  },
  resolve: {
      extensions: [".tsx", ".ts", ".js"]
  },
  node: {
    console: true,
    fs: false,
    net: false,
    tls: false
  },
  devServer: {
    writeToDisk: true
  }
};
