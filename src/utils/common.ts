export function formatJson(jsonStr: string) {
	// console.log('formattedJsonStr', jsonStr)
	try {
		const jsonObj = JSON.parse(jsonStr)
		const formattedJsonStr = JSON.stringify(jsonObj, null, 4)
		return {
			jsonObj,
			jsonStr: formattedJsonStr
		}
	} catch (error) {
		console.log('error', error)
		return {
			jsonObj: null,
			jsonStr: ''
		}
	}
}

export function isJsonStr(jsonStr: string) {
	try {
		JSON.parse(jsonStr)
		return true
	} catch (error) {
		console.log('error', error)
		return false
	}
}

export const isObject = (data: any) => typeof data === 'object' && data !== null

export function formatJsonObjToTreeData1(jsonObj: Record<string, any> | any[], level: number = 1, parentKey: string = '') {
	let treeData  = []
	if (jsonObj === null || jsonObj === undefined) {
		return treeData
	}
	const isObj = isObject(jsonObj)
	if (!isObj) {
		return treeData
	}

	const isArray = Array.isArray(jsonObj)

	if (isArray) {
		treeData = jsonObj.map((item, index) => ({
			title: `${index}`,
			key: `${parentKey}-${level}-${index}`,
			children: isObject(item) 
								? formatJsonObjToTreeData1(item, level + 1, `${parentKey}-${index}`)
								: [{ 
									title: `${item}`,
									key: `${parentKey}-${level+1}-${item}`,
									children: [],
								}]
		}))
	} else {
		treeData = Object.entries(jsonObj).map(([key, value]) => ({
			title: key,
			key: `${parentKey}-${level}-${key}`,
			children: isObject(value) 
								? formatJsonObjToTreeData1(value, level + 1, `${parentKey}-${key}`)
								: [{ 
									title: `${value}`,
									key: `${parentKey}-${level+1}-${value}`,
									children: [],
								}]
		}))
	}

	return treeData
}

export const generateId = () => Math.random().toString(36).slice(2)