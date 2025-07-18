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
  "commands": {
    "open-popup": {
      "suggested_key": {
        "default": "Ctrl+Shift+P",
        "mac": "Command+Shift+P"
      },
      "description": "打开扩展的弹出窗口"
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