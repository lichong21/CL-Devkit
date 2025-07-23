
import 'virtual:uno.css'

import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './index.vue';
import '@arco-design/web-vue/dist/arco.css';

import { Message } from '@arco-design/web-vue'

const app = createApp(App);
app.use(ArcoVue);
Message._context = app._context

app.mount('#app');

