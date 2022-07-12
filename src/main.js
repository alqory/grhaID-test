import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { Router } from  './router/index.js'

createApp(App)
    .use(Router)
    .mount('#app')
