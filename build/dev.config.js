module.exports = {
  entry: "./src/index.js",
  module: {
    loaders: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    publicPath: "/assets",
    filename: "bundle.js",
    port: 8080,
    host: "0.0.0.0"
  }
}
