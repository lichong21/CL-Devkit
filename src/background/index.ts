console.log('background script loaded')

// 监听来自popup的消息
// @ts-ignore
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('chrome.runtime.onMessage message', message, sender, sendResponse)
	if (message.action === 'open-options-page') {
		chrome.runtime.openOptionsPage()
	}
  if (message.action === 'open-sidebar-page') {
    console.log('chrome.sidePanel.open', message, sender)
    
    // 获取当前活动的标签页
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0 && tabs[0].id) {
        console.log('找到当前标签页ID:', tabs[0].id)
        chrome.sidePanel.open({
          tabId: tabs[0].id,
        }).then(() => {
          console.log('侧边栏已成功打开')
        }).catch((error) => {
          console.error('打开侧边栏失败:', error)
        })
      } else {
        console.error('无法获取当前标签页ID')
        
      }
    })
  }
  return true
})