import { defineStore } from 'pinia';
import { ref } from 'vue';
import { formatJson, formatJsonObjToTreeData1, isJsonStr, generateId } from '@/utils/common';
import { JSON_STR } from '@/constant/mockData'
import { localForageInstanceForJSON } from '@/utils/localForageUtil';
import type { IDataItem } from '@/utils/localForageUtil';
import dayjs from 'dayjs';
import { Message } from '@arco-design/web-vue';

export interface JSONTextChaceItem {
	key: string;
	value: {
		jsonText: string;
		updateTime: number;
		desc: string
	}
}

const handleStoreFn = () => {

	// JSON字符串相关的操作
	const jsonTextStr = ref(JSON_STR);
	const jsonTextObj = ref<Record<string, any>>(null);
	const jsonTreeData = ref<Record<string, any>>(null);
	const isValidJSONStr = ref(true);
	const setJSONTextStr = (jsonText: string) => {
		jsonTextStr.value = jsonText;
	};
	const clearJSONTextStr = () => {
		jsonTextStr.value = '';
	};
	const checkJSONTextStrValid = (): boolean => {
		isValidJSONStr.value = isJsonStr(jsonTextStr.value);
		return isValidJSONStr.value;
	};
	const formatJSONTextStr = (jsonText: string) => {
		const { jsonObj, jsonStr } = formatJson(jsonText);
		console.log('jsonObj', jsonObj)
		if (jsonObj && jsonStr) {
			jsonTextStr.value = jsonStr;
			jsonTextObj.value = jsonObj;
			jsonTreeData.value = formatJsonObjToTreeData1(jsonObj);
			isValidJSONStr.value = true;
		} else {
			isValidJSONStr.value = false;
		}
	};

	// 缓存列表Modal
	const cacheListModalVisible = ref(false);
	const toggleCacheListModalVisible = (visible: boolean) => {
		cacheListModalVisible.value = visible
	}

	// JSON对象本地存储
	const jsonTextChaceList = ref<JSONTextChaceItem []>([]);
	const getJSONTextChaceList = async () => {
		const data: IDataItem[] = await localForageInstanceForJSON.getAllData();
		jsonTextChaceList.value = data.map((item) => ({key: item.key, value: item.value}));
		console.log('jsonTextChaceList', jsonTextChaceList.value)
	}
	const appendJSONTextToChaceList = async (jsonText: string) => {
		// 先判断是否已经存在
		const key = generateId();
		if (jsonTextChaceList.value.find(item => item?.key === key)) return
		if (jsonTextChaceList.value.find(item => item?.value.jsonText === jsonText)) {
			Message.info('缓存中已存在')
			return
		}
		await localForageInstanceForJSON.setItem(key, {
			jsonText,
			updateTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
			desc: '新增'
		});
		await getJSONTextChaceList()
	}
	const removeJSONTextFromChaceList = async (key: string) => {
		await localForageInstanceForJSON.removeItem(key);
		await getJSONTextChaceList()
	}

	return {
		jsonTextStr,
		jsonTextObj	,
		jsonTreeData,
		isValidJSONStr,
		clearJSONTextStr,
		setJSONTextStr,
		formatJSONTextStr,
		checkJSONTextStrValid,
		cacheListModalVisible,
		toggleCacheListModalVisible,
		jsonTextChaceList,
		getJSONTextChaceList,
		appendJSONTextToChaceList,
		removeJSONTextFromChaceList,
	}
}

export const useJSONFormatStore = defineStore('jsonFormat', handleStoreFn);
