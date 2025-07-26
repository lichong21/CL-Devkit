import { handleOpenSidePanel } from "../utils";
import { MESSAGE_ACTION } from "../../constant/index";

function startListenSendMessage() {
  console.log("startListenSendMessage");
  
  chrome.runtime.onMessage.addListener((message, sender, _sendResponse) => {
    console.log("接收到消息:", message, "发送者:", sender);

    switch (message.action) {
      case MESSAGE_ACTION.OPEN_OPTIONS:
        handleOpenOptionsPage(message);
        break;
      case MESSAGE_ACTION.OPEN_SIDE_PANEL:
        console.log("通过消息打开侧边栏");
        handleOpenSidePanel();
        break;
      case MESSAGE_ACTION.OPEN_POPUP:
        handleOpenPopup();
        break;
      default:
        console.log("未知的消息动作:", message.action);
    }
    
    return true;
  });
}

// 处理打开选项页面的逻辑
function handleOpenOptionsPage(message: any) {
  console.log("处理打开选项页面请求");
  
  // 如果有actionType参数，构建URL查询参数
  if (message.actionType) {
    // 将参数存储到chrome.storage.local，然后打开Options页面
    const optionsData = {
      actionType: message.actionType,
      params: message.params || {},
      timestamp: Date.now()
    };

    console.log("保存选项页面数据:", optionsData);
    
    chrome.storage.local.set({ optionsData }, () => {
      console.log("选项页面数据已保存，正在打开页面");
      chrome.runtime.openOptionsPage();
    });
  } else {
    console.log("没有参数时，直接打开选项页面");
    chrome.runtime.openOptionsPage();
  }
}

// 处理打开弹窗的逻辑
function handleOpenPopup() {
  console.log("处理打开弹窗请求");
  chrome.action.openPopup();
}

export { startListenSendMessage };
