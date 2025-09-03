<template>
	<div class="json-format-page">
		<div class="json-format-heaader">
			<Space align="center">
				<Button 
					type="primary"
					:status="isValidJSONStr ? 'success' : 'danger'" 
					size="small"
					@click="handleCheckValid"
				> 
					{{ isValidJSONStr ? '合法' : '不合法' }}
				</Button>
				<Button type="primary" size="small" @click="handleFormatJSON">格式化</Button>
				<Button type="primary" size="small" @click="handleAddJSONTextToChaceList">添加到缓存</Button>
				<Button type="primary" size="small" @click="handleOpenCacheListModal">缓存列表</Button>

				<CacheListModal />
			</Space>
		</div>

		<div class="json-format-content">
			<div class="json-format-content-left code-block">
				<CodeBlockLeft />
			</div>

			<div class="json-format-content-right code-block">
				<CodeBlockRight />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';
	import { storeToRefs } from 'pinia'
	import { Button, Space } from '@arco-design/web-vue'
	import CodeBlockLeft from './components/CodeBlockLeft.vue'
	import CodeBlockRight from './components/CodeBlockRight.vue'
	import CacheListModal from './components/CacheListModal.vue'

	import { useJSONFormatStore } from '@/options/stores/useJSONFormatStore'

	const jsonFormatStore = useJSONFormatStore()
	const { isValidJSONStr, jsonTextStr } = storeToRefs(jsonFormatStore)

	const handleCheckValid = () => {
		jsonFormatStore.checkJSONTextStrValid()
	}

	const handleFormatJSON = () => {
		jsonFormatStore.formatJSONTextStr(jsonTextStr.value)
	}

	const handleAddJSONTextToChaceList = () => {
		jsonFormatStore.appendJSONTextToChaceList(jsonTextStr.value)
	}

	const handleOpenCacheListModal = () => {
		jsonFormatStore.toggleCacheListModalVisible(true)
	}

	onMounted(() => {
		console.log('json format page mounted')
		jsonFormatStore.getJSONTextChaceList()
	})
</script>

<style scoped>
.json-format-page {
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-sizing: border-box;
	padding: 0px 12px 20px 12px;

	display: flex;
	flex-direction: column;
}

.json-format-heaader {
	width: 100%;
	padding: 10px;
}

.json-format-content {
	height: 100%;
	display: flex;
	flex-direction: row;
	gap: 20px;
}

.json-format-left {
	background: #f5f5f5;
}

.json-format-right {
	background: #f5f5f5;
}

.code-block {
	flex: 1;
	height: 100%;
	border-radius: 8px;
	border: 2px solid #ccc;
	overflow: hidden;
}

</style>
