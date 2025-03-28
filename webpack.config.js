import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'development', // Switch to 'production' for tree-shaking demo
  entry: [
    'webpack-hot-middleware/client', // Enable HMR
    './src/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // Process CSS for HMR
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  optimization: {
    usedExports: true, // Enable tree-shaking by marking unused exports
    sideEffects: true // Remove side-effect-free modules if unused
  },
  devtool: 'source-map' // For debugging
};