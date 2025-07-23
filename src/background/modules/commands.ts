import { handleOpenSidePanel } from "../utils";

function startListenCommands() {
	console.log('startListenCommands')

  // 监听快捷键命令
  chrome.commands.onCommand.addListener((command) => {
    console.log('快捷键命令接收:', command)
    
    switch (command) {
      case 'open-popup':
        console.log('通过快捷键打开弹出窗口')
        chrome.action.openPopup()
        break
      case 'open-options-page':
        console.log('通过快捷键打开选项页面')
        chrome.runtime.openOptionsPage()
        break
      case 'open-side-panel':
        console.log('通过快捷键打开侧边栏')
        handleOpenSidePanel()
        break
      default:
        console.log('未知的快捷键命令:', command)
    }
  })
}

export { startListenCommands }