<template>
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

    <!-- Hover菜单 -->
    <transition name="menu-fade">
      <div v-if="showMenu" class="menu-container" @mouseenter="clearHideTimer" @mouseleave="hideMenuDelayed">
        <div class="menu-item" @click="openPopup">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>弹窗</span>
        </div>
        <div class="menu-item" @click="openOptions">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>设置</span>
        </div>
        <div class="menu-item" @click="openSidePanel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
            <path d="M9 3v18" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>侧栏</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const ballRef = ref<HTMLElement>()
const showMenu = ref(false)
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })
const position = ref({ x: window.innerWidth - 80, y: 100 }) // 初始位置在右上角
let hideTimer: number | null = null

const ballStyle = computed(() => ({
  position: 'fixed' as const,
  left: `${position.value.x}px`,
  top: `${position.value.y}px`,
  zIndex: '999999',
  transform: isDragging.value ? 'scale(1.1)' : 'scale(1)',
}))

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
  
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
  document.body.style.userSelect = 'none'
}

const onDrag = (e: MouseEvent) => {
  if (!isDragging.value) return
  
  const newX = e.clientX - dragOffset.value.x
  const newY = e.clientY - dragOffset.value.y
  
  // 边界检测
  const maxX = window.innerWidth - 60
  const maxY = window.innerHeight - 60
  
  position.value = {
    x: Math.max(0, Math.min(newX, maxX)),
    y: Math.max(0, Math.min(newY, maxY))
  }
}

const stopDrag = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.body.style.userSelect = ''
  
  // 停靠到边缘
  const centerX = position.value.x + 30
  const screenCenter = window.innerWidth / 2
  
  if (centerX < screenCenter) {
    // 靠左
    position.value.x = 10
  } else {
    // 靠右
    position.value.x = window.innerWidth - 70
  }
}

const hideMenuDelayed = () => {
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

const openPopup = () => {
  chrome.runtime.sendMessage({ action: 'openPopup' })
  showMenu.value = false
}

const openOptions = () => {
  chrome.runtime.sendMessage({ action: 'openOptions' })
  showMenu.value = false
}

const openSidePanel = () => {
  chrome.runtime.sendMessage({ action: 'openSidePanel' })
  showMenu.value = false
}

// 窗口大小改变时调整位置
const handleResize = () => {
  const maxX = window.innerWidth - 60
  const maxY = window.innerHeight - 60
  
  position.value = {
    x: Math.min(position.value.x, maxX),
    y: Math.min(position.value.y, maxY)
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (hideTimer) {
    clearTimeout(hideTimer)
  }
})
</script>

<style scoped>
.floating-ball {
  cursor: move;
  transition: transform 0.2s ease;
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
}

.floating-ball:hover .ball-body {
  box-shadow: 0 6px 25px rgba(66, 133, 244, 0.4);
  transform: scale(1.05);
}

.menu-container {
  position: absolute !important;
  right: 70px !important;
  top: 0 !important;
  background: white !important;
  border-radius: 12px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15) !important;
  padding: 8px !important;
  min-width: 120px !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  display: block !important;
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
}

.menu-item:hover {
  background: #f5f5f5;
  color: #4285f4;
}

.menu-item svg {
  flex-shrink: 0;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.3s ease;
}

.menu-fade-enter-from {
  opacity: 0;
  transform: translateX(10px) scale(0.95);
}

.menu-fade-leave-to {
  opacity: 0;
  transform: translateX(10px) scale(0.95);
}

/* 确保在所有网站上都能正确显示 */
.floating-ball,
.floating-ball * {
  all: unset;
  box-sizing: border-box !important;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
}

.floating-ball {
  display: block !important;
  cursor: move !important;
  transition: transform 0.2s ease !important;
  position: fixed !important;
  pointer-events: auto !important;
}
</style> 