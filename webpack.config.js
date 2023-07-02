const CopyPlugin = require("copy-webpack-plugin");


/** @type { import("webpack").Configuration } */
module.exports = (env) => ({
  entry: "./src/index.tsx",

  devServer: {
    hot: true,
    historyApiFallback: true
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index.html" },

        { from: `src/assets/manifests/${env.target}.manifest.json`, to: "manifest.json" }
      ]
    })
  ],

  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag"
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        loader: "@svgr/webpack",
      },
      {
        test: /\.woff2/,
        type: "asset/resource"
      }
    ]
  }
});
