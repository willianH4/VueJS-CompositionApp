import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 120, // 2 minutes
                refetchOnReconnect: 'always',
            }
        }
    }
});

app.use(pinia);
app.use(router);

app.mount('#app');
