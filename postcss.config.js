import autoprefixer from 'autoprefixer'
import px2rem from 'postcss-pxtorem'
import tailwindcss from 'tailwindcss'
import path from 'path'

export default {
  plugins: [
    autoprefixer(),
    tailwindcss(path.join(__dirname, '.', 'tailwind.config.js')),
    px2rem({
      rootValue: 50,
      propList: ['*'],
      selectorBlackList: ['transform', 'rotate', 'background', 'background-color'],
      exclude:  '/src/plugins',
    }),
  ]
  }