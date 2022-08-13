const path = require('path')

const publicPath = process.env.NODE_ENV === 'production' ? '/vue2_solid_demo/' : '/'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: publicPath,
  transpileDependencies: true,
  chainWebpack: config => {
    // https://bootstrap-vue.org/docs#aliasing-vue-import
    config.resolve.alias.set(
      'vue$',
      // If using the runtime only build
      path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
      // Or if using full build of Vue (runtime + compiler)
      // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    )
  }
})
