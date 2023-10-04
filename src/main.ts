import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from "@tanstack/vue-query";
import store from './store/store';

store.startLoadingPokemons(); // call API

const app = createApp(App)

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 120, // 2 minutes
                refetchOnReconnect: 'always',
            }
        }
    }
})
app.use(router)

app.mount('#app')
