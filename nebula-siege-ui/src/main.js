import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';


axios.defaults.baseURL="http://127.0.0.1:8000"
const app = createApp(App)
app.use(router)
app.use(store)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')