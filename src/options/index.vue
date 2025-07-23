<template>
	<div class="options-page">
		<div class="header">
			<h1>{{ pageTitle }}</h1>
			<p class="description">{{ pageDescription }}</p>
		</div>

		<div class="content">
			<!-- JSON 格式化页面 -->
			<div v-if="currentAction === 'json-format'" class="action-panel">
				<JSONFormat />
			</div>

			<!-- JSON 压缩页面 -->
			<div v-else-if="currentAction === 'json-compress'" class="action-panel">
				<div class="json-compress-panel">
					<h3>JSON 压缩工具</h3>
					<textarea 
						v-model="compressInput" 
						placeholder="请输入要压缩的 JSON 数据"
						class="input-textarea"
					></textarea>
					<button @click="compressJson" class="action-button">压缩 JSON</button>
					<textarea 
						v-model="compressOutput" 
						placeholder="压缩后的结果将显示在这里"
						class="output-textarea"
						readonly
					></textarea>
				</div>
			</div>

			<!-- JSON 校验页面 -->
			<div v-else-if="currentAction === 'json-check'" class="action-panel">
				<div class="json-check-panel">
					<h3>JSON 校验工具</h3>
					<textarea 
						v-model="checkInput" 
						placeholder="请输入要校验的 JSON 数据"
						class="input-textarea"
					></textarea>
					<button @click="checkJson" class="action-button">校验 JSON</button>
					<div class="check-result" :class="{ 'valid': isValid, 'invalid': !isValid && checkResult }">
						{{ checkResult }}
					</div>
				</div>
			</div>

			<!-- 默认首页 -->
			<div v-else class="default-panel">
				<h3>欢迎使用扩展工具</h3>
				<p>请通过弹出窗口选择要使用的功能。</p>
				<div class="feature-list">
					<div class="feature-item">
						<h4>JSON 格式化</h4>
						<p>美化和格式化 JSON 数据，提高可读性</p>
					</div>
					<div class="feature-item">
						<h4>JSON 压缩</h4>
						<p>压缩 JSON 数据，移除多余的空格和换行</p>
					</div>
					<div class="feature-item">
						<h4>JSON 校验</h4>
						<p>检查 JSON 数据的格式是否正确</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import JSONFormat from './components/JSONFormat/index.vue'

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
					chrome.storage.local.remove(['optionsData'])
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