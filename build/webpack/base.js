var Path = require('path');
var webpack = require('webpack');
var _ = require('underscore');

var baseConfig = {
  entry: "./client/index",
  output: {
      path: Path.join(process.cwd(), 'dist', 'js'),
      filename: "[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.coffee', '.json']
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee?bare' },
	    { test: /angularfire\.js$/, loader: 'imports?Firebase=firebase' },
	    { test: /angular\.js$/, loader: 'imports?jQuery=jquery!exports?window.angular' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      FIREBASE_URL: JSON.stringify(process.env.FIREBASE_URL)
    }),
    // new webpack.UglifyPlugin(),
    new webpack.ProvidePlugin({
        angular: 'angular',
        jQuery: 'jquery',
	      Firebase : 'firebase',
        'window.jQuery': 'jquery'
    }),
  ],
	devtool:  'source-map'
};

// var config = require('./base');
// var Path = require('path');
// var StringReplacePlugin = require("string-replace-webpack-plugin");
//
// var prodBuildConfig = config.utils.extendConfig(config.base, {
//   module: {
//     loaders: [{
//       test: /.js$/,
//       loader: StringReplacePlugin.replace({
//         replacements: [{
//           pattern: /https:\/\/ari-firepoker-reclus.firebaseio.com/ig,
//           replacement: function(match, p1, offset, string) {
//             return "https://ari-fire-comm-dev.firebaseio.com/";
//           }
//         }]
//       })
//     }]
//   },
//   plugins: [
//     new StringReplacePlugin()
//   ],
// });
//
// module.exports = prodBuildConfig;

module.exports =  baseConfig;

function resolveFolder(folder) {
  return function(memo, file, key) {
    memo[key] = Path.join(process.cwd(), folder, file);
    return memo;
  }
}
