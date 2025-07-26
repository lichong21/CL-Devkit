<template>
	<div class="options-page">
		<!-- <div class="header">
			<h1>{{ pageTitle }}</h1>
			<p class="description">{{ pageDescription }}</p>
		</div> -->

		<JSONFormat v-if="currentAction === OPTIONS_TYPE.JSON_FORMAT" />

	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import JSONFormat from './components/JSONFormat/index.vue'
	import { OPTIONS_TYPE } from '../constant/index'

	const currentAction = ref<string>('')
	const pageTitle = ref<string>('扩展选项')
	const pageDescription = ref<string>('选择要使用的功能')

	// JSON 压缩相关
	const compressInput = ref<string>('')
	const compressOutput = ref<string>('')

	// JSON 校验相关
	const checkInput = ref<string>('')
	const checkResult = ref<string>('')
	const isValid = ref<boolean>(false)

	// 加载Options页面参数
	const loadOptionsData = () => {
		if (typeof chrome !== 'undefined' && chrome.storage) {
			chrome.storage.local.get(['optionsData'], (result) => {
				if (result.optionsData) {
					const { actionType, params } = result.optionsData
					currentAction.value = actionType || ''
					
					if (params) {
						pageTitle.value = params.title || '扩展选项'
						pageDescription.value = params.description || '选择要使用的功能'
					}

					// 清除已使用的数据
					// chrome.storage.local.remove(['optionsData'])
				}
			})
		}
	}

	// JSON 压缩功能
	const compressJson = () => {
		try {
			const parsed = JSON.parse(compressInput.value)
			compressOutput.value = JSON.stringify(parsed)
		} catch (error) {
			compressOutput.value = `错误: ${error instanceof Error ? error.message : '无效的 JSON 格式'}`
		}
	}

	// JSON 校验功能
	const checkJson = () => {
		try {
			JSON.parse(checkInput.value)
			checkResult.value = '✅ JSON 格式正确'
			isValid.value = true
		} catch (error) {
			checkResult.value = `❌ JSON 格式错误: ${error instanceof Error ? error.message : '未知错误'}`
			isValid.value = false
		}
	}

	onMounted(() => {
		console.log('options page mounted')
		loadOptionsData()
	})
</script>

<style scoped>
.options-page {
	padding: 20px;
	max-width: 800px;
	margin: 0 auto;
}

.header {
	margin-bottom: 30px;
	text-align: center;
}

.header h1 {
	font-size: 28px;
	color: #333;
	margin-bottom: 10px;
}

.description {
	font-size: 16px;
	color: #666;
	margin: 0;
}

.content {
	background: #f9f9f9;
	border-radius: 8px;
	padding: 20px;
}

.action-panel {
	background: white;
	border-radius: 6px;
	padding: 20px;
}

.json-compress-panel,
.json-check-panel {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.input-textarea,
.output-textarea {
	width: 100%;
	min-height: 120px;
	padding: 12px;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-family: 'Courier New', monospace;
	resize: vertical;
}

.output-textarea {
	background-color: #f5f5f5;
}

.action-button {
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 14px;
}

.action-button:hover {
	background-color: #0056b3;
}

.check-result {
	padding: 10px;
	border-radius: 4px;
	font-weight: bold;
}

.check-result.valid {
	background-color: #d4edda;
	color: #155724;
	border: 1px solid #c3e6cb;
}

.check-result.invalid {
	background-color: #f8d7da;
	color: #721c24;
	border: 1px solid #f5c6cb;
}

.default-panel {
	text-align: center;
}

.feature-list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 20px;
	margin-top: 30px;
}

.feature-item {
	background: white;
	padding: 20px;
	border-radius: 6px;
	box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.feature-item h4 {
	margin: 0 0 10px 0;
	color: #333;
}

.feature-item p {
	margin: 0;
	color: #666;
	font-size: 14px;
}
</style>