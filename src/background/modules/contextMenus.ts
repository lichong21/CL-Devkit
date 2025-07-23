import { handleOpenSidePanel } from "../utils";

function startListenContextMenus() {
  console.log('startListenContextMenus')

  // 创建右键菜单
  chrome.runtime.onInstalled.addListener(() => {
    console.log('创建右键菜单')
    
    // 创建主菜单项
    chrome.contextMenus.create({
      id: 'extension-main',
      title: 'Vite Extension 工具',
      contexts: ['all']
    })
    
    // 创建子菜单项
    chrome.contextMenus.create({
      id: 'open-popup',
      parentId: 'extension-main',
      title: '🚀 打开弹出窗口',
      contexts: ['all']
    })
    
    chrome.contextMenus.create({
      id: 'open-options',
      parentId: 'extension-main',
      title: '⚙️ 打开选项页面',
      contexts: ['all']
    })
    
    chrome.contextMenus.create({
      id: 'open-sidebar',
      parentId: 'extension-main',
      title: '📋 打开侧边栏',
      contexts: ['all']
    })
    
    console.log('右键菜单创建完成')
  })

  // 监听右键菜单点击事件
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log('Context menu clicked:', info.menuItemId)
    
    switch (info.menuItemId) {
      case 'open-popup':
        console.log('通过右键菜单打开弹出窗口')
        chrome.action.openPopup()
        break
      case 'open-options':
        console.log('通过右键菜单打开选项页面')
        chrome.runtime.openOptionsPage()
        break
      case 'open-sidebar':
        console.log('通过右键菜单打开侧边栏')
        handleOpenSidePanel()
        break
      default:
        console.log('未知的菜单项:', info.menuItemId)
    }
  })
}

export { startListenContextMenus } 