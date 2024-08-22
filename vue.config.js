const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/Cyberpank/' : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`
      },
    },
  },
})