/** https://rollupjs.org/guide/en/ */
export default {
  output: {
    entryFileNames: 'js/[name].[hash].js',
    chunkFileNames: 'js/[name].[hash].js',
    assetFileNames: (assetInfo) => {
      let extType = assetInfo.name.split('.')[1]
      if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
        extType = 'img'
      } 
      if (/ttf|otf/i.test(extType)) {
        extType = 'fonts'
      }
      return `${extType}/[name].[hash].[ext]`
    },
    // format: 'cjs', // common js
  },
}