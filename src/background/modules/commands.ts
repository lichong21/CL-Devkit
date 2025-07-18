function startListenCommands() {
    console.log('startListenCommands')

    // 监听快捷键命令
    chrome.commands.onCommand.addListener((command) => {
        console.log('Command received:', command)
        if (command === 'open-popup') {
            // 打开popup面板
            chrome.action.openPopup()
        }
    })
}

export {
    startListenCommands
}