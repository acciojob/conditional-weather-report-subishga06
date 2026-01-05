const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Main entry point

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    clean: true, // Clears old files in dist on build
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"], // So we can import without extensions
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Your HTML template
    }),
  ],

  devServer: {
    static: path.join(__dirname, "dist"), // Serve dist folder
    port: 8080, // Cypress expects 8080
    hot: true, // Enables hot reload
    open: true, // Opens browser automatically
  },

  mode: "development",
};
