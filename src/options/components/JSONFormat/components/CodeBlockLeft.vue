<template>
	<div class="code-block-left">
		<!-- <div class="code-block-left-header">
			<Space>
				<Button type="primary">格式化</Button>
			</Space>
		</div> -->
		<Textarea 
			v-model="jsonTextStr"
			autosize
			class="code-block-left-textarea"
			@change="handleInputChange"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'	
import { storeToRefs } from 'pinia'
import { Textarea } from '@arco-design/web-vue'
import { useJSONFormatStore } from '@/options/stores/useJSONFormatStore'

const jsonFormatStore = useJSONFormatStore()
const { jsonTextStr } = storeToRefs(jsonFormatStore)

const handleInputChange = (newVal: string) => {
	console.log('newVal', newVal)
	// jsonFormatStore.setJSONTextStr(newVal)
}

</script>

<style scoped lang="scss">
.code-block-left {
	width: 100%;
	height: 100%;
}

.code-block-left-header {
	margin-bottom: 10px;
}

.code-block-left-textarea {
	height: 100%;
	border-color: transparent !important;

}
</style>


