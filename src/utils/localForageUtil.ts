import localforage from 'localforage';

interface InitOptions {
  /** 数据库名称 */
  name: string;
  /** 存储表名 */
  storeName: string;
  /** 数据库大小限制(单位：字节) */
  size?: number;
  /** 数据库版本 */
  version?: number;
}

interface BatchItem {
  key: string;
  value: any;
}

interface BatchResult {
  success: number;
  failed: number;
}

export interface IDataItem {
  key: string;
  value: any;
}

export interface ILocalForageService {
  init: (options: InitOptions) => Promise<boolean>;
  setItem: <T = any>(key: string, value: T) => Promise<boolean>;
  getItem: <T = any>(key: string) => Promise<T | null>;
  update: <T = any>(key: string, value: T) => Promise<boolean>;
  removeItem: (key: string) => Promise<boolean>;
  hasItem: (key: string) => Promise<boolean>;
  getAllKeys: () => Promise<string[]>;
  getAllData: () => Promise<IDataItem[]>;
  batchSet: (items: BatchItem[]) => Promise<BatchResult>;
  batchDelete: (keys: string[]) => Promise<BatchResult>;
  clear: () => Promise<void>;
}

const defaultOptions: InitOptions = {
	name: 'CL-Devkit',
	storeName: 'CL-Devkit',
	version: 1.0,
};

export class LocalForageService {
	private options: InitOptions;

	constructor(options: InitOptions = defaultOptions) {
		if (!options?.name || !options?.storeName) {
      throw new Error('初始化失败：必须提供数据库名称(name)和存储表名(storeName)');
    }
		this.options = {
			...defaultOptions,
			...options
		}

		localforage.config(this.options);
		console.log(`本地存储初始化成功：${options.name} - ${options.storeName}`);
	}

  /**
   * 存储数据
   * @param key 键名
   * @param value 要存储的值(支持对象、数组等)
   * @returns 操作是否成功
   */
  async setItem<T = any>(key: string, value: T): Promise<boolean> {
    try {
      await localforage.setItem(key, value);
      return true;
    } catch (error) {
      console.error(`存储数据失败 [${key}]：`, error);
      return false;
    }
  }

  /**
   * 获取数据
   * @param key 键名
   * @returns 存储的值，不存在则返回null
   */
  async getItem<T = any>(key: string): Promise<T | null> {
    try {
      const value = await localforage.getItem<T>(key);
      return value ?? null;
    } catch (error) {
      console.error(`获取数据失败 [${key}]：`, error);
      return null;
    }
  }

  /**
   * 更新数据
   * @param key 键名
   * @param value 新值
   * @returns 操作是否成功
   */
  async update<T = any>(key: string, value: T): Promise<boolean> {
    // 先检查是否存在
    const exists = await this.hasItem(key);
    if (!exists) {
      console.warn(`更新失败：键 [${key}] 不存在`);
      return false;
    }
    return this.setItem<T>(key, value);
  }

  /**
   * 删除数据
   * @param key 键名
   * @returns 操作是否成功
   */
  async removeItem(key: string): Promise<boolean> {
    try {
      await localforage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`删除数据失败 [${key}]：`, error);
      return false;
    }
  }

  /**
   * 检查键是否存在
   * @param key 键名
   * @returns 是否存在
   */
  async hasItem(key: string): Promise<boolean> {
    try {
      const value = await localforage.getItem(key);
      return value !== null && value !== undefined;
    } catch (error) {
      console.error(`检查键存在性失败 [${key}]：`, error);
      return false;
    }
  }

  /**
   * 获取所有键名
   * @returns 键名数组
   */
  async getAllKeys(): Promise<string[]> {
    try {
      return await localforage.keys();
    } catch (error) {
      console.error('获取所有键名失败：', error);
      return [];
    }
  }

  /**
   * 获取所有数据
   * @returns 包含键和值的对象数组
   */
  async getAllData(): Promise<IDataItem[]> {
    try {
      const keys = await this.getAllKeys();
      const result: IDataItem[] = [];
      
      for (const key of keys) {
        const value = await this.getItem(key);
        if (value !== null) {
          result.push({ key, value });
        }
      }
      
      return result;
    } catch (error) {
      console.error('获取所有数据失败：', error);
      return [];
    }
  }

  /**
   * 清空所有数据
   * @returns 操作是否成功
   */
  async clearAll(): Promise<boolean> {
    try {
      await localforage.clear();
      return true;
    } catch (error) {
      console.error('清空所有数据失败：', error);
      return false;
    }
  }

  /**
   * 批量存储数据
   * @param items 要存储的键值对数组
   * @returns 成功和失败的数量
   */
  async batchSet(items: BatchItem[]): Promise<BatchResult> {
    let success = 0;
    let failed = 0;

    for (const { key, value } of items) {
      const result = await this.setItem(key, value);
      if (result) {
        success++;
      } else {
        failed++;
      }
    }

    return { success, failed };
  }
}


const optionsForJson = {
	name: 'CL-Devkit-JSON',
	storeName: 'CL-Devkit-JSON',
	version: 1.0,
}
const localForageInstanceForJSON = new LocalForageService(optionsForJson);

export { localForageInstanceForJSON }



    