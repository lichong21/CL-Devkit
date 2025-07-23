import { startListenCommands } from "./modules/commands";
import { startListenSendMessage } from "./modules/onSendMessage";
import { startListenContextMenus } from "./modules/contextMenus";
import { startListenOmnibox } from "./modules/omnibox";

console.log('background script loaded')

// 启动所有监听模块
startListenCommands()
startListenSendMessage()
startListenContextMenus()
startListenOmnibox()

console.log('所有监听模块已启动')
