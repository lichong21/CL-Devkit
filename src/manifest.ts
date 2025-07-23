import { isDev, PORT } from '../scripts/utils.ts'

const manifest = {
	"manifest_version": 3,
	"name": "Vite for Extension",
	"version": "1.0.0",
	"description": "A Vite project for building Chrome Extensions",
	"permissions": [
		"activeTab",
		"scripting",
		"tabs",
		"storage",
		"sidePanel",
		"contextMenus"
	],
  "host_permissions": ["*://*/*"],
	"icons": {
		"16": "./icons/icon-16.png",
		"32": "./icons/icon-32.png",
		"48": "./icons/icon-48.png",
		"128": "./icons/icon-128.png"
	},
	"background": {
		"service_worker": "./background/index.js"
	},
	"options_page": "./src/options/index.html",
	"action": {
		"default_popup": "./src/popup/index.html"
	},
	"side_panel": {
		"default_path": "./src/sidePanel/index.html"
	},
	// 地址栏关键词触发
  "omnibox": {
    "keyword": "ext"
  },
  "commands": {
    "open-popup": {
      "suggested_key": {
        "default": "Ctrl+Shift+P",
        "mac": "Command+Shift+P"
      },
      "description": "打开扩展的弹出窗口"
    },
    "open-options-page": {
      "suggested_key": {
        "default": "Ctrl+Shift+O",
        "mac": "Command+Shift+O"
      },
      "description": "打开扩展的选项页面"
    },
		"open-side-panel": {
			"suggested_key": {
				"default": "Ctrl+Shift+S",
				"mac": "Command+Shift+S"
			},
			"description": "打开扩展的侧边栏"
		}
  },
  content_security_policy: {
    extension_pages: isDev()
      // this is required on dev for Vite script to load
      ? `script-src \'self\' http://localhost:${PORT}; object-src \'self\'`
      : 'script-src \'self\'; object-src \'self\'',
  },
}
export {
	manifest
}