<template>
	<Modal
		title="缓存列表"
		:visible="cacheListModalVisible"
		width="80%"
		:footer="null"
		modal-class="json-format-cache-list-modal"
		body-class="json-format-cache-list-modal-body"
		@cancel="jsonFormatStore.toggleCacheListModalVisible(false)"
	>
		<ul>
			<li v-for="item in jsonTextChaceList" :key="item.key">
				{{ item.value.jsonText }}
			</li>
		</ul>
	</Modal>
</template>

<script setup lang="ts">
	import { storeToRefs } from 'pinia'
	import { Modal } from '@arco-design/web-vue'
	import { useJSONFormatStore } from '@/options/stores/useJSONFormatStore'

	const jsonFormatStore = useJSONFormatStore()
	const { cacheListModalVisible, jsonTextChaceList } = storeToRefs(jsonFormatStore)
</script>

<style lang="scss" scoped>
.modal-content {
	padding: 24px;
}
</style>

<style lang="scss">
	.json-format-cache-list-modal {
		width: 70% !important;
		height: 90% !important;
		overflow: hidden;
	}
	.json-format-cache-list-modal-body {
		height: 100%;
		overflow: scroll;
	}
</style>