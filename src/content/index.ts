import 'virtual:uno.css'
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import FloatingBall from './components/FloatingBall.vue'

// 创建并挂载悬浮球组件
function initFloatingBall() {
  // 检查是否已经存在悬浮球，避免重复创建
  if (document.getElementById('extension-floating-ball')) {
    return
  }

  // 创建容器元素
  const container = document.createElement('div')
  container.id = 'extension-floating-ball'
  container.style.cssText = `
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 0 !important;
    height: 0 !important;
    z-index: 2147483647 !important;
  `
  
  // 添加到页面
  document.body.appendChild(container)

  // 创建 Vue 应用
  const app = createApp(FloatingBall)
  app.use(ArcoVue)
  app.mount(container)
  console.log('【Extension 】', '悬浮球已成功加载')
}

// 确保 DOM 加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFloatingBall)
} else {
  initFloatingBall()
}