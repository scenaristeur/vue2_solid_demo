const publicPath = process.env.NODE_ENV === 'production' ? '/vue2_solid_demo/' : '/'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: publicPath,
  transpileDependencies: true
})
