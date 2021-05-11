module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/assets/images/icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"d96c50c5315328fe077f4f4883d3ad1c"},
    },{
      plugin: require('../node_modules/gatsby-plugin-anchor-links/gatsby-browser.js'),
      options: {"plugins":[],"offset":-100},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1920},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
