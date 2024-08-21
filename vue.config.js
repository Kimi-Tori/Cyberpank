const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: `/Cyberpank/`,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`
      },
    },
  },
})