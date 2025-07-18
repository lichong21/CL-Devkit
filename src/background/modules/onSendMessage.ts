function startListenSendMessage() {
  console.log("openSidebar");
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(
      "chrome.runtime.onMessage message",
      message,
      sender,
      sendResponse
    );

    // 打开options页面
    if (message.action === "open-options-page") {
      chrome.runtime.openOptionsPage();
    }

    // 打开侧边栏页面
    if (message.action === "open-sidebar-page") {
      console.log("chrome.sidePanel.open", message, sender);

      // 获取当前活动的标签页
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log("打开侧边栏tabs11111111", tabs);
        if (tabs.length > 0 && tabs[0].id) {
          console.log("找到当前标签页ID:", tabs[0].id);
          chrome.sidePanel
            .open({
              tabId: tabs[0].id
            })
            .then(() => {
              console.log("侧边栏已成功打开");
            })
            .catch((error) => {
              console.error("打开侧边栏失败:", error);
            });
        } else {
          console.error("无法获取当前标签页ID");
        }
      });
    }
    return true;
  });
}

export { startListenSendMessage };
