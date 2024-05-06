// webpack.config.js
module.exports = {
    devServer: {
      client: {
        overlay: {
          warnings: false, // Désactive l'affichage des avertissements sur le navigateur
          errors: true
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /node_modules\/@react-aria\/ssr/ // Exclure le package problématique
        }
      ]
    }
  };
  