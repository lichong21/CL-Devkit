<template>
	<div class="options-page">
		<div v-if="!currentKitType" class="options-page-header">
			<Space  align="center">
				<Button 
					v-for="(optionItem, index) in optionsKitTypeList" 
					:key="index"
					type="primary"
					@click="toggleKitType(optionItem)"
					>{{ optionItem.label }}
				</Button>
			</Space>	
		</div>

		<div v-else class="options-page-header-anchor">
			<icon-close-circle size="28" @click="handleListenKeyboardEsc" />
		</div>

		<div class="options-page-content">
			<JsonFormat v-if="showJsonFormat" />
			<TimeStamps v-if="showTimeStamps" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, computed, ref } from 'vue';
	import { Button, Space } from '@arco-design/web-vue'
	import JsonFormat from './components/jsonFormat/index.vue';
	import TimeStamps from './components/timeStamps/index.vue';
	import { OPTIONS_KIT_TYPE } from './constant';
	import { useListenKeyboardEsc } from '@/composables/listenKeyboardEsc'

	const optionsKitTypeList = computed(() => Object.values(OPTIONS_KIT_TYPE))

	const currentKitType = ref('')
	const toggleKitType = (kitType: { label: string; value: string; }) => {
		currentKitType.value = kitType.value
	}
	const showJsonFormat = computed(() => currentKitType.value === OPTIONS_KIT_TYPE.jsonFormat.value)
	const showTimeStamps = computed(() => currentKitType.value === OPTIONS_KIT_TYPE.timeFormat.value)

	const handleListenKeyboardEsc = () =>  {
		currentKitType.value = ''
	}

	useListenKeyboardEsc(handleListenKeyboardEsc)
	
	onMounted(() => {
		console.log('options page mounted', OPTIONS_KIT_TYPE)
	})
</script>

<style scoped lang="scss">
.options-page {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background: #fff;

	&-header {
		margin-bottom: 30px;
		text-align: center;
		background: #ccc;
		padding: 12px 20px;
		border-radius: 12px;
		position: relative;

		&-anchor	 {
			position: absolute;
			right: 20px;
			top: 12px;
			cursor: pointer;

			&:hover {
				color: #4285f4;
			}
		}
	}

	&-content {
		width: 100%;
		height: 100%;
	}
}
</style>