import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'
import path from 'path'
// import StylelintPlugin from 'vite-plugin-stylelint'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import {
  defineConfig,
} from 'vite'

import PostcssConfig from './postcss.config'
import rollupOptions from './rollup.config'

export default defineConfig({
  root: path.resolve(__dirname, ''),
  plugins: [
    vue(),
    eslint(),
    viteExternalsPlugin(),
    svgLoader({ defaultImport: 'raw' }),
  ],
  css: {
    postcss: PostcssConfig
  },
  build: {
    target: 'esnext',
    outDir: path.resolve(__dirname, 'dist'),
    assetsDir: '.',
    sourcemap: true,
    minify: process.env.MODE === 'development' ? false : 'terser',
    libs: {
      entry: path.resolve(__dirname, 'src/main.js'),
      formats: ['cjs'],
    },
    rollupOptions,
    chunkSizeWarningLimit: 1600,
    modulePreload: {
      polyfill: true
    },
  },
  resolve: {
    alias: {
    }
  },
  base: '',
  define: {
    'process.env': process.env
  },
})
