const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withFonts(withCSS(withSass({
      exportTrailingSlash: true,
      cssModules: true,
      parser: true,
      cssLoaderOptions:{
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
      },
      config: {
        ctx: {
          theme: JSON.stringify(process.env.REACT_APP_THEME)
        }
      },
      devIndicators: {
        autoPrerender: true,
      },
      webpack (config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              publicPath: `/_next/static/images/`,
              outputPath: `${options.isServer ? '../' : ''}static/images/`,
              name: '[name]-[hash].[ext]'
            }
          }
        })
        return config
      }
},
)))
