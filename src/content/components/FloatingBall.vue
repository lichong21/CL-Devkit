<template>
  <!-- 移除 Teleport，直接渲染在挂载的容器中 -->
  <div
    ref="ballRef"
    class="floating-ball"
    :style="ballStyle"
    @mousedown="startDrag"
    @mouseenter="showMenu = true"
    @mouseleave="hideMenuDelayed"
  >
    <!-- 悬浮球主体 -->
    <div class="ball-body">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#4285f4"/>
        <path d="M8 12h8M12 8v8" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { Message } from '@arco-design/web-vue'

// 响应式状态
const ballRef = ref<HTMLElement>()
const showMenu = ref(false)
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })
const position = ref({ x: 0, y: 0 })

// 定时器引用
let hideTimer: number | null = null
let rafId: number | null = null

// 计算属性
const ballStyle = computed(() => ({
  position: 'fixed' as const,
  left: `${position.value.x}px`,
  top: `${position.value.y}px`,
  zIndex: '2147483647',
  transform: isDragging.value ? 'scale(1.1)' : 'scale(1)',
  transition: isDragging.value ? 'none' : 'transform 0.2s ease',
}))

// 初始化位置
const initializePosition = () => {
  // 从localStorage恢复位置，如果没有则使用默认位置
  const savedPosition = localStorage.getItem('extension-floating-ball-position')
  if (savedPosition) {
    try {
      const parsed = JSON.parse(savedPosition)
      position.value = {
        x: Math.max(0, Math.min(parsed.x, window.innerWidth - 60)),
        y: Math.max(0, Math.min(parsed.y, window.innerHeight - 60))
      }
    } catch {
      setDefaultPosition()
    }
  } else {
    setDefaultPosition()
  }
}

const setDefaultPosition = () => {
  position.value = { 
    x: window.innerWidth - 80, 
    y: 100 
  }
}

// 保存位置到localStorage
const savePosition = () => {
  try {
    localStorage.setItem('extension-floating-ball-position', JSON.stringify(position.value))
  } catch (error) {
    console.warn('[Extension] 无法保存悬浮球位置:', error)
  }
}

// 拖拽处理
const startDrag = (e: MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()
  
  isDragging.value = true
  showMenu.value = false
  
  const rect = ballRef.value!.getBoundingClientRect()
  dragOffset.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
  
  document.addEventListener('mousemove', onDrag, { passive: false })
  document.addEventListener('mouseup', stopDrag, { once: true })
  document.body.style.userSelect = 'none'
  document.body.style.pointerEvents = 'none'
}

const onDrag = (e: MouseEvent) => {
  if (!isDragging.value) return
  
  // 使用requestAnimationFrame优化性能
  if (rafId) {
    cancelAnimationFrame(rafId)
  }
  
  rafId = requestAnimationFrame(() => {
    const newX = e.clientX - dragOffset.value.x
    const newY = e.clientY - dragOffset.value.y
    
    // 边界检测
    const maxX = window.innerWidth - 60
    const maxY = window.innerHeight - 60
    
    position.value = {
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    }
  })
}

const stopDrag = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.body.style.userSelect = ''
  document.body.style.pointerEvents = ''
  
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
  
  // 停靠到边缘
  const centerX = position.value.x + 30
  const screenCenter = window.innerWidth / 2
  
  // 添加动画过渡到边缘
  nextTick(() => {
    if (centerX < screenCenter) {
      position.value.x = 10
    } else {
      position.value.x = window.innerWidth - 70
    }
    
    // 保存新位置
    savePosition()
  })
}

// 菜单处理
const hideMenuDelayed = () => {
  if (hideTimer) {
    clearTimeout(hideTimer)
  }
  hideTimer = window.setTimeout(() => {
    showMenu.value = false
  }, 300)
}

const clearHideTimer = () => {
  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
}

// 消息发送优化
const sendMessage = (action: string) => {
  try {
    chrome.runtime.sendMessage({ action })
  } catch (error) {
    console.error(`[Extension] 发送消息失败 (${action}):`, error)
  }
}

const openPopup = () => {
  sendMessage('openPopup')
  showMenu.value = false
}

const openOptions = () => {
  sendMessage('openOptions')
  showMenu.value = false
}

const openSidePanel = () => {
  sendMessage('openSidePanel')
  showMenu.value = false
}

// 测试Arco Design组件
const showArcoMessage = () => {
  // 由于在Shadow DOM中，需要导入Message组件
  Message.success({
    content: 'Arco Design在Content Script中工作正常！',
    duration: 3000
  })
  
  showMenu.value = false
}

// 窗口大小改变处理
const handleResize = () => {
  const maxX = window.innerWidth - 60
  const maxY = window.innerHeight - 60
  
  position.value = {
    x: Math.min(position.value.x, maxX),
    y: Math.min(position.value.y, maxY)
  }
  
  savePosition()
}

// 防抖的resize处理
let resizeTimer: number | null = null
const debouncedResize = () => {
  if (resizeTimer) {
    clearTimeout(resizeTimer)
  }
  resizeTimer = window.setTimeout(handleResize, 100)
}

// 生命周期
onMounted(() => {
  initializePosition()
  window.addEventListener('resize', debouncedResize)
  
  // 防止页面滚动时位置错乱
  window.addEventListener('scroll', () => {
    // 悬浮球使用fixed定位，不需要处理滚动
  }, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('resize', debouncedResize)
  
  if (hideTimer) {
    clearTimeout(hideTimer)
  }
  if (resizeTimer) {
    clearTimeout(resizeTimer)
  }
  if (rafId) {
    cancelAnimationFrame(rafId)
  }
})
</script>

<style scoped>
/* 基础样式重置和隔离 */
.floating-ball,
.floating-ball * {
  all: unset;
  box-sizing: border-box !important;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
}

.floating-ball {
  display: block !important;
  cursor: move !important;
  position: fixed !important;
  pointer-events: auto !important;
  user-select: none !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
}

.ball-body {
  width: 60px !important;
  height: 60px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, #4285f4 0%, #34a853 100%) !important;
  box-shadow: 0 4px 20px rgba(66, 133, 244, 0.3) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: all 0.3s ease !important;
  border: none !important;
  outline: none !important;
  cursor: move !important;
  will-change: transform, box-shadow !important;
}

.floating-ball:hover .ball-body {
  box-shadow: 0 6px 25px rgba(66, 133, 244, 0.4) !important;
  transform: scale(1.05) !important;
}

.floating-ball:active .ball-body {
  transform: scale(0.95) !important;
}

.menu-container {
  position: absolute !important;
  right: 70px !important;
  top: 0 !important;
  background: white !important;
  border-radius: 12px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15) !important;
  padding: 12px !important;
  min-width: 140px !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  display: block !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  z-index: 1 !important;
}

/* Arco Design按钮样式覆盖 */
.menu-button {
  width: 100% !important;
  justify-content: flex-start !important;
  font-size: 13px !important;
  height: 32px !important;
  border-radius: 6px !important;
  transition: all 0.2s ease !important;
}

.menu-button:hover {
  transform: translateY(-1px) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
}

.menu-button:active {
  transform: translateY(0) !important;
}

/* Arco Design Space组件样式 */
.arco-space {
  width: 100% !important;
}

.arco-space-item {
  width: 100% !important;
}

.menu-item {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  padding: 12px 16px !important;
  border-radius: 8px !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  color: #333 !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  white-space: nowrap !important;
  text-decoration: none !important;
  background: transparent !important;
  border: none !important;
  outline: none !important;
  user-select: none !important;
}

.menu-item:hover {
  background: #f5f5f5 !important;
  color: #4285f4 !important;
  transform: translateX(-2px) !important;
}

.menu-item:active {
  transform: translateX(-1px) scale(0.98) !important;
}

.menu-item svg {
  flex-shrink: 0 !important;
  display: block !important;
}

.menu-item span {
  display: inline !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  color: inherit !important;
}

/* 动画效果 */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.menu-fade-enter-from {
  opacity: 0 !important;
  transform: translateX(10px) scale(0.95) !important;
}

.menu-fade-leave-to {
  opacity: 0 !important;
  transform: translateX(10px) scale(0.95) !important;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .ball-body {
    width: 50px !important;
    height: 50px !important;
  }
  
  .menu-container {
    right: 60px !important;
    min-width: 100px !important;
  }
  
  .menu-item {
    padding: 10px 12px !important;
    font-size: 13px !important;
  }
}

/* 高对比度模式支持 */
@media (prefers-contrast: high) {
  .ball-body {
    border: 2px solid #000 !important;
  }
  
  .menu-container {
    border: 2px solid #000 !important;
  }
}

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .floating-ball,
  .ball-body,
  .menu-item,
  .menu-fade-enter-active,
  .menu-fade-leave-active {
    transition: none !important;
  }
}
</style> 