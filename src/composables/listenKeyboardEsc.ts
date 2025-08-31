import { onMounted, onUnmounted, ref } from 'vue'

/**
 * 监听ESC键盘按键的组合式函数
 * @param callback 按下ESC键时执行的回调函数
 * @param options 配置选项
 * @param options.enabled 初始是否启用监听
 * @param options.target 事件监听目标元素，默认为document
 * @returns 返回控制函数的对象
 */
export function useListenKeyboardEsc(
  callback: () => void,
  options: {
    enabled?: boolean
    target?: HTMLElement | Document
  } = {}
) {
  const { enabled = true, target = document } = options
  const isEnabled = ref(enabled)

  // 处理ESC键按下事件
  const handleKeydown = (event: KeyboardEvent) => {
    if (isEnabled.value && event.key === 'Escape') {
      callback()
    }
  }

  // 启用监听
  const enableListen = () => {
    isEnabled.value = true
  }

  // 禁用监听
  const disableListen = () => {
    isEnabled.value = false
  }

  // 组件挂载时添加事件监听
  onMounted(() => {
    target.addEventListener('keydown', handleKeydown)
  })

  // 组件卸载时移除事件监听
  onUnmounted(() => {
    target.removeEventListener('keydown', handleKeydown)
  })

  return {
    enableListen,
    disableListen,
    isEnabled
  }
}