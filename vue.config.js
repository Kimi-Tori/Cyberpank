const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: `/home/`,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`
      },
    },
  },
})