

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
	"host_permissions": [],
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
	}
}
export {
	manifest
}