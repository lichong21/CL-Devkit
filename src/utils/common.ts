export function formatJson(jsonStr: string) {
	console.log('formattedJsonStr', jsonStr)
	try {
		const jsonObj = JSON.parse(jsonStr)
		const formattedJsonStr = JSON.stringify(jsonObj, null, 2)
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
// 格式化 jsonObj 为树结构数据
export function formatJsonObjToTreeData(
  jsonObj: Record<string, any> | any[], 
  level: number = 1
): any[] {
  // 检查是否为 null 或 undefined
  if (jsonObj === null || jsonObj === undefined) {
    return [];
  }
  
  // 如果不是对象类型，返回空数组
  if (typeof jsonObj !== 'object') {
    return [];
  }
  
  const treeData: any[] = [];
  let entries: [string, any][];
  
  // 处理数组情况
  if (Array.isArray(jsonObj)) {
    entries = jsonObj.map((item, index) => [`${index}`, item]);
  } else {
    // 处理对象情况
    entries = Object.entries(jsonObj);
  }
  
  for (const [key, value] of entries) {
    // 跳过 null 或 undefined 的值
    if (value === null || value === undefined) {
      continue;
    }

		const isObj = typeof value === 'object' && value !== null
    
    const node = {
      title: key,
      key: `${level}-${key}`,
      children: isObj
        ? formatJsonObjToTreeData(value, level + 1) 
        : [{ 
					title: `${value}`,
					key: `${level+1}-${value}`,
				}]
    };
    
    treeData.push(node);
  }

	// console.log('treeData', treeData)	
  
  return treeData;
}