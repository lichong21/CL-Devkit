import { defineStore } from 'pinia';
import { ref } from 'vue';
import { formatJson, formatJsonObjToTreeData1, isJsonStr } from '@/utils/common';
import { JSON_STR } from '@/constant/mockData'

const handleStoreFn = () => {
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


	return {
		jsonTextStr,
		jsonTextObj	,
		jsonTreeData,
		isValidJSONStr,
		clearJSONTextStr,
		setJSONTextStr,
		formatJSONTextStr,
		checkJSONTextStrValid,
	}
}

export const useJSONFormatStore = defineStore('jsonFormat', handleStoreFn);
