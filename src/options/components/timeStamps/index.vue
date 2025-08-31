<template>
	<div class="time-stamps-page">
		<div class="header">
			<h1>时间戳</h1>
			<p class="description">时间戳选项</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';

	onMounted(() => {
		console.log('time stamps page mounted')
	})
</script>

<style scoped>
.time-stamps-page {
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
</style>