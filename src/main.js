import app from './vue.entry'
import { createPinia } from 'pinia'
import router from './router'

const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
