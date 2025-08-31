<template>
	<div class="code-block-right">
		<Tree 
			:data="jsonTreeData" 
			show-line 
			action-on-node-click="expand"
		>
			<template #title="nodeData">
				<span>{{ nodeData.title }}</span>
			</template>

			<template #extra="nodeData">
				<span v-if="nodeData?.children?.length">
					展开
				</span>
			</template>
		</Tree>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Tree } from '@arco-design/web-vue'
import { useJSONFormatStore } from '@/options/stores/useJSONFormatStore'

const jsonFormatStore = useJSONFormatStore()
const { jsonTreeData } = storeToRefs(jsonFormatStore)


</script>

<style scoped lang="scss">
.code-block-right {
	width: 100%;
	height: 100%;
	overflow: scroll;
}
</style>
s