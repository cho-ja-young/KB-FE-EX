import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);

app.use(router);
app.use(createPinia()); // Pinia 플러그인 등록

app.mount('#app');
