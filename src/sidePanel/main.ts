import 'virtual:uno.css'

import { createApp } from 'vue'
// 添加类型声明以解决模块导入问题
import App from './index.vue';

// 引入Pinia
import pinia from '@/stores';

const app = createApp(App);
app.use(pinia);
app.mount('#app');
