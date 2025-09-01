<template>
	<div class="code-block-right">
		<InputSearch placeholder="搜索" v-model="searchValue" />
		<Tree 
			:data="filteredTreeData" 
			show-line 
			action-on-node-click="expand"
		>
			<template #extra="nodeData">
				<Space v-if="nodeData?.children?.length === 0">
					<icon-copy @click="handleCopyData(nodeData)" />
				</Space>
			</template>
		</Tree>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue'
	import { storeToRefs } from 'pinia'
	import { Tree, Space, Message, InputSearch } from '@arco-design/web-vue'
	import { useJSONFormatStore } from '@/options/stores/useJSONFormatStore'
	import { IconCopy } from '@arco-design/web-vue/es/icon'
	import { useClipboard } from '@vueuse/core'

	const jsonFormatStore = useJSONFormatStore()
	const { jsonTreeData } = storeToRefs(jsonFormatStore)

	const searchValue = ref('')
	const filteredTreeData = computed(() => {
		if (!searchValue.value) {
			return jsonTreeData.value
		}
		return searchData(searchValue.value)
	})

	const searchData = (keyword) => {
		console.log('searchData', keyword)
		const loop = (data) => {
			const result = [];
			data.forEach(item => {
				if (item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
					result.push({...item});
				} else if (item.children) {
					const filterData = loop(item.children);
					if (filterData.length) {
						result.push({
							...item,
							children: filterData
						})
					}
				}
			})
			return result;
		}

		return loop(jsonTreeData.value);
	}

	const clipboard = useClipboard()
	const handleCopyData = (nodeData: Tree.NodeData) => {
		console.log('handleCopyData', nodeData)
		clipboard.copy(nodeData?.title)
		Message.success('复制成功')
	}
</script>

<style scoped lang="scss">
.code-block-right {
	width: 100%;
	height: 100%;
	overflow: scroll;
}
:deep(.arco-space-item) {
	color: #51b142;
	font-weight: 500;
	margin-top: 8px;
	margin-left: 8px;
	&:hover {
		color: #5ec055;
	}
}
:deep(.arco-tree-node) {
	align-items: flex-start;
}
:deep(.arco-tree-node-title-text) {
	word-break: break-all;
}
</style>
