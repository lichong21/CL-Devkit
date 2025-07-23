import { handleOpenSidePanel } from "../utils";

function startListenOmnibox() {
  console.log('startListenOmnibox')

  // 地址栏关键词功能 - 输入建议
  chrome.omnibox.onInputChanged.addListener((text, suggest) => {
    console.log('Omnibox input changed:', text)
    const suggestions = []
    
    if (text.includes('popup') || text.includes('弹出') || text.includes('pop')) {
      suggestions.push({
        content: 'popup',
        description: '打开扩展弹出窗口 - 快速工具面板'
      })
    }
    
    if (text.includes('options') || text.includes('选项') || text.includes('设置') || text.includes('opt')) {
      suggestions.push({
        content: 'options',
        description: '打开扩展选项页面 - 工具配置中心'
      })
    }
    
    if (text.includes('sidebar') || text.includes('side') || text.includes('侧边栏') || text.includes('侧边')) {
      suggestions.push({
        content: 'sidebar',
        description: '打开扩展侧边栏 - 工具面板'
      })
    }
    
    // 如果没有匹配的输入，显示默认建议
    if (suggestions.length === 0) {
      suggestions.push(
        {
          content: 'popup',
          description: '🚀 popup - 打开弹出窗口'
        },
        {
          content: 'options',
          description: '⚙️ options - 打开选项页面'
        },
        {
          content: 'sidebar',
          description: '📋 sidebar - 打开侧边栏'
        }
      )
    }
    
    suggest(suggestions)
  })

  // 地址栏关键词功能 - 处理用户选择
  chrome.omnibox.onInputEntered.addListener((text) => {
    console.log('Omnibox input entered:', text)
    
    if (text === 'popup' || text.includes('popup') || text.includes('弹出')) {
      console.log('通过地址栏打开弹出窗口')
      chrome.action.openPopup()
    } else if (text === 'options' || text.includes('options') || text.includes('选项')) {
      console.log('通过地址栏打开选项页面')
      chrome.runtime.openOptionsPage()
    } else if (text === 'sidebar' || text.includes('sidebar') || text.includes('侧边')) {
      console.log('通过地址栏打开侧边栏')
      handleOpenSidePanel()
    } else {
      console.log('未知的omnibox命令:', text)
    }
  })
}

export { startListenOmnibox } 