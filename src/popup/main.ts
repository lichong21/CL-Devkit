
import 'virtual:uno.css'

import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './index.vue';
import '@arco-design/web-vue/dist/arco.css';

// 引入Pinia
import pinia from '@/stores';

import { Message } from '@arco-design/web-vue'

const app = createApp(App);
app.use(ArcoVue);
app.use(pinia);
Message._context = app._context

app.mount('#app');

