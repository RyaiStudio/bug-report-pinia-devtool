// import myDataHubPlugin from './plugins/datahub.config'
import baseConfig from './base.config'
import { defineConfig, mergeConfig } from 'vite'

const options = mergeConfig(baseConfig, {
  plugins: [],
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false, // auto open browser
    hmr: { // enable hot mmodule replacement
      overlay: false, // disable server error overlay
    },
    base: '/',
    proxy: {},
    fs: {
      strict: false
    }
  },
})
// console.log('>> options >> ', options)
export default defineConfig(options)
