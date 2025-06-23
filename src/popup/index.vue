<template>
	<div class="popup-page">
		弹窗页面弹窗页面弹窗页面弹窗页面弹窗页面弹窗页面弹窗页面弹窗页面

		<button @click="handleOpenOptionsPage">打开选项页面</button>
		<button @click="handleOpenSidebarPage">打开侧边栏页面</button>
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue'

	const handleOpenOptionsPage = () => {
		(window as any).chrome.runtime.sendMessage({ action: 'open-options-page' })
	}

	const handleOpenSidebarPage = () => {
		(window as any).chrome.runtime.sendMessage({ action: 'open-sidebar-page' })
	}

	onMounted(() => {
		console.log('popup page mounted')
	})
</script>

<style scoped lang="scss">
.popup-page {
	width: 300px;
	height: 400px;
	background-color: #fff;
}
</style>