<template>
	<div class="popup-page">
		<!-- UnoCSS 测试区域 -->
		<div class="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mb-4">
			<h2 class="text-xl font-bold mb-2">UnoCSS 测试</h2>
			<p class="text-sm opacity-90">如果你能看到这个渐变背景，说明 UnoCSS 已经正常工作了！</p>
		</div>

		<Space align="center" direction="vertical" style="width: 100%;">
			<Button @click="handleOpenArcoDesign">Arco Design</Button>
			<Button type="primary">按钮</Button>
			<Button type="dashed">按钮</Button>
			<Button type="text">按钮</Button>
			<Button type="primary" size="large">按钮</Button>
			<Button type="primary" size="small">按钮</Button>
			<Button type="primary" size="mini">按钮</Button>
		</Space>

		<div>
			<Button @click="handleOpenOptionsPage">打开选项页面</Button>
			<Button @click="handleOpenSidebarPage">打开侧边栏页面</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue'
	import { Button, Space } from '@arco-design/web-vue'

	const handleOpenOptionsPage = () => {
		(window as any).chrome.runtime.sendMessage({ action: 'open-options-page' })
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
</script>

<style scoped lang="scss">
.popup-page {
	width: 300px;
	height: 400px;
	background-color: #fff;
}
</style>