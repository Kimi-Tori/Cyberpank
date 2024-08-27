import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';

import vuetify from '@/plugins/vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import '@/styles/index.scss';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify); // Подключите Vuetify
app.mount('#app');
