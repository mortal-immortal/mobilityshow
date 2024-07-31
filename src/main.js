import { createApp } from 'vue'
import App from './App.vue'
import './css/main.css'
import './css/sub.css'
import router from './router.js'

createApp(App).use(router).mount('#app')
