<template>
	<div class="popup-page">
		<!-- UnoCSS 测试区域 -->
		<div class="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mb-4">
			<h2 class="text-xl font-bold mb-2">UnoCSS 测试</h2>
			<p class="text-sm opacity-90">如果你能看到这个渐变背景，说明 UnoCSS 已经正常工作了！</p>
		</div>

		<Space align="center" direction="horizontal" size="large" style="width: 100%;">
			<Button type="primary" round @click="handleOpenOptionsPage">打开选项页面</Button>
			<Button type="primary" round @click="handleOpenSidebarPage">打开侧边栏页面</Button>
		</Space>

		<div class="h-4" />

		<Space align="center" direction="horizontal" wrap size="medium" style="width: 100%;">
			<Button round @click="handleOpenArcoDesign">Arco Design</Button>
			<Button type="primary" round @click="handleJsonFormat">JSON 格式化</Button>
			<Button type="dashed" round @click="handleJsonCompress">JSON 压缩</Button>
			<Button type="text" round @click="handleJsonCheck">JSON 校验</Button>
		</Space>

	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue'
	import { Button, Space, Message } from '@arco-design/web-vue'

	// 通用的打开Options页面方法，可以携带参数
	const openOptionsPageWithParams = (actionType?: string, params?: any) => {
		(window as any).chrome.runtime.sendMessage({ 
			action: 'open-options-page',
			actionType,
			params
		})
	}

	// 不带参数的打开Options页面方法，用于按钮点击事件
	const handleOpenOptionsPage = () => {
		openOptionsPageWithParams()
	}

	const handleOpenSidebarPage = () => {
		(window as any).chrome.runtime.sendMessage({ action: 'open-sidebar-page' })
	}

	onMounted(() => {
		console.log('popup page mounted')
	})

	const handleOpenArcoDesign = () => {
		window.open('https://arco.design/vue/component/button#basic', '_blank')
	}

	const handleJsonFormat = () => {
		console.log('handleJsonFormat')
		Message.info('JSON 格式化')
		// 打开options页面，携带JSON格式化的参数
		openOptionsPageWithParams('json-format', { 
			title: 'JSON 格式化工具',
			description: '美化和格式化 JSON 数据'
		})
	}

	const handleJsonCompress = () => {
		console.log('handleJsonCompress')
		Message.info('JSON 压缩')
		// 打开options页面，携带JSON压缩的参数
		openOptionsPageWithParams('json-compress', { 
			title: 'JSON 压缩工具',
			description: '压缩 JSON 数据，移除空格和换行'
		})
	}

	const handleJsonCheck = () => {
		console.log('handleJsonCheck')
		Message.info('JSON 校验')
		// 打开options页面，携带JSON校验的参数
		openOptionsPageWithParams('json-check', { 
			title: 'JSON 校验工具',
			description: '检查 JSON 数据的格式是否正确'
		})
	}
</script>

<style scoped lang="scss">
.popup-page {
	width: 300px;
	height: 400px;
	background-color: #fff;
}
</style>