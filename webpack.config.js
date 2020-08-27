module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "out.js"
    },
    mode: "development",
    devtool: false,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };