import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

axios.defaults.baseURL="http://127.0.0.1:8000"
createApp(App).use(router).use(store).mount('#app')
