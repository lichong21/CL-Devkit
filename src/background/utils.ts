export const handleOpenSidePanel = () => {
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
