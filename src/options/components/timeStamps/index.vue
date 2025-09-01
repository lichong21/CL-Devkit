<template>
	<div class="time-stamps-page">
		<div class="header">
			<h1>时间戳转换工具</h1>
			<p class="description">便捷的时间戳与日期时间互转功能</p>
		</div>

		<div class="conversion-card">
			<h2>时间戳 → 日期时间</h2>
			<Space align="start" fill>
				<Button @click="getCurrentTimestamp" class="tool-btn">
					获取当前时间戳
				</Button>
				<Input
					v-model	="timestampInput"
					placeholder="请输入时间戳（秒或毫秒）"
					class="input-field"
					@change="onTimestampInputChange"
				/>
				<Button type="primary" @click="convertTimestamp" class="convert-btn">
					转换
				</Button>
				<Select
					v-if="dateResultList?.length"
					v-model="selectedDateResult"
					:options="dateResultList"
					:style="{width:'320px'}"
					@change="onDateChange"
				/>
			</Space>
		</div>

		<div class="conversion-card">
			<h2>日期时间 → 时间戳</h2>
			<Space align="start" fill>
				<Button @click="getCurrentTime" class="tool-btn">
					获取当前时间
				</Button>
				<DatePicker
					v-model="dateTimeInput"
					show-time
					class="date-picker-field"
					:style="{width:'320px'}"
				/>
				<Button type="primary" @click="convertDateTime" class="convert-btn">
					转换
				</Button>
				<Select
					v-if="timestampResultList?.length"
					v-model="selectedTimestampResult"
					:options="timestampResultList"
					:style="{width:'320px'}"
					@change="onTimestampChange"
				/>
			</Space>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';
import { Input, Button, DatePicker, Space, Select, Message } from '@arco-design/web-vue';
import { useClipboard } from '@vueuse/core';

const clipboard = useClipboard()

// 响应式数据
const timestampInput = ref<string>('');
const dateTimeInput = ref<Date | null>(null);
const dateResultList = ref<any []>([]);
const selectedDateResult = ref<string>('');

const timestampResultList = ref<any []>([]);
const selectedTimestampResult = ref<string>('');

// 处理时间戳输入变化
const onTimestampInputChange = () => {
	// 清除非数字字符
	timestampInput.value = timestampInput.value.replace(/[^\d]/g, '');
};

// 时间戳转日期时间
const convertTimestamp = () => {	
	if (!timestampInput.value) {
		alert('请输入时间戳');
		return;
	}

	let timestamp = Number(timestampInput.value);
	// 判断是否为毫秒级时间戳（长度为13位）
	if (timestamp.toString().length === 10) {
		timestamp *= 1000;
	}

	const date = dayjs(timestamp);
	if (!date.isValid()) {
		alert('无效的时间戳');
		return;
	}

	dateResultList.value = [
		{
			label: date.format('YYYY年MM月DD日 HH时mm分ss秒'),
			value: date.format('YYYY年MM月DD日 HH时mm分ss秒')
		},
		{
			label: date.format('YYYY-MM-DD HH:mm:ss'),
			value: date.format('YYYY-MM-DD HH:mm:ss')
		},
		{
			label: date.format('YYYY-MM-DD'),
			value: date.format('YYYY-MM-DD')
		},
		{
			label: date.format('HH:mm:ss'),
			value: date.format('HH:mm:ss')
		},
	];
};

// 日期时间转时间戳
const convertDateTime = () => {
	if (!dateTimeInput.value) {
		alert('请选择日期时间');
		return;
	}

	const date = dayjs(dateTimeInput.value);
	timestampResultList.value = [
		{
			label: `ms：${date.valueOf().toString()}`,
			value: date.valueOf().toString()
		},
		{
			label: `s：${Math.floor(date.valueOf() / 1000).toString()}`,
			value: Math.floor(date.valueOf() / 1000).toString()
		}
	]
};

// 获取当前时间
const getCurrentTime = () => {
	const now = new Date();
	dateTimeInput.value = now;
};

// 获取当前时间戳
const getCurrentTimestamp = () => {
	timestampInput.value = Date.now().toString();
	convertTimestamp();
};

const onDateChange = (item: string) => {
	clipboard.copy(item)
	Message.success('复制成功')
}

const onTimestampChange = (item: string) => {
	clipboard.copy(item)
	Message.success('复制成功')
}	
</script>

<style scoped>
.time-stamps-page {
	padding: 20px;
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

.conversion-card {
	background-color: #fff;
	border-radius: 8px;
	padding: 24px;
	margin-bottom: 24px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.conversion-card h2 {
	font-size: 18px;
	color: #333;
	margin-bottom: 16px;
	font-weight: 500;
}

.input-field,
.date-picker-field {
	width: 320px !important;
}

.convert-btn {
	margin-bottom: 16px;
}

.result-section {
	background-color: #f5f7fa;
	padding: 16px;
	border-radius: 4px;
}

.result-section h3 {
	font-size: 16px;
	color: #333;
	margin-bottom: 12px;
	font-weight: 500;
}

.result-item {
	margin-bottom: 8px;
}

.result-item:last-child {
	margin-bottom: 0;
}

.label {
	font-size: 14px;
	color: #666;
	margin-right: 8px;
}

.value {
	font-size: 14px;
	color: #333;
	font-weight: 500;
	word-break: break-all;
}

.quick-tools {
	background-color: #fff;
	border-radius: 8px;
	padding: 24px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.quick-tools h2 {
	font-size: 18px;
	color: #333;
	margin-bottom: 16px;
	font-weight: 500;
}

.tool-buttons {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
}

.tool-btn {
	padding: 8px 16px;
}

.tool-btn.danger {
	color: #ff4d4f;
	border-color: #ff4d4f;
}

.tool-btn.danger:hover {
	color: #fff;
	background-color: #ff4d4f;
}

@media (max-width: 768px) {
	.time-stamps-page {
		padding: 16px;
	}

	.header h1 {
		font-size: 24px;
	}

	.conversion-card,
	.quick-tools {
		padding: 16px;
	}

	.tool-buttons {
		flex-direction: column;
	}

	.tool-btn {
		width: 100%;
	}
}
</style>