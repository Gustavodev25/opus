import './assets/global.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// Rastreia cada mudança de rota no Meta Pixel
router.afterEach(() => {
  if (typeof fbq !== 'undefined') {
    fbq('track', 'PageView')
  }
})

app.mount('#app')
