const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: 'raw-loader'
      }
    ]
  }
}
