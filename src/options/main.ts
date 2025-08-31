import 'virtual:uno.css'

import { createApp } from 'vue'

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

// 引入Pinia
import pinia from './stores/index.ts';

// 添加类型声明以解决模块导入问题
import App from './index.vue';

const app = createApp(App);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(pinia);
app.mount('#app');
