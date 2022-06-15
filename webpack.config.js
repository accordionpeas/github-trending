const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => {
  return {
    mode:  env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'cheap-module-source-map',

    name: 'client',
    target: 'web',

    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json'],
    },

    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    },

    watchOptions: {
      ignored: ['node_modules', 'build'],
    },
    
    entry: {
      app: './src/index.tsx',
    },
  
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].js',
      publicPath: '/',
    },

    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/index.html' }
        ]
      })
    ],
  }
}
