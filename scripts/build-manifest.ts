import fs from 'fs-extra'
import path from 'path'

// import { manifest } from '../src/manifest.ts'
import { getPath } from './utils.ts'


export async function generateFileManifestJSON() {
  const { __filename, __dirname, filePath } = getPath(import.meta.url)

  // 动态导入 manifest，避免模块缓存问题
  // const manifestPath = path.resolve(__dirname, '../src/manifest.ts')
  
  // // 清除模块缓存
  // if (require.cache[manifestPath]) {
  //   delete require.cache[manifestPath]
  // }
  
  // 动态重新导入 manifest
  const { manifest } = await import(`../src/manifest.ts?t=${Date.now()}`)

  // 确保dist目录存在
  const distDir = path.resolve(__dirname, '../dist')
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }

  console.log('manifest', manifest)
  // 创建manifest.json
  const manifestJsonPath = path.resolve(__dirname, '../dist/manifest.json')
  console.log('manifestPath', manifestJsonPath)
  console.log('⏰ 开始写入manifest.json')
  fs.writeJSONSync(manifestJsonPath, manifest, { spaces: 2 })
  console.log('✅ 写入manifest.json完成')

  // 复制icons
  const iconPath = path.resolve(__dirname, '../src/icons')
  console.log('iconPath', iconPath)
  const iconDistPath = path.resolve(distDir, 'icons')
  console.log('iconDistPath', iconDistPath)
  if(!fs.existsSync(iconDistPath)) {
    console.log('⏰ 创建icons目录')
    fs.mkdirSync(iconDistPath, { recursive: true })
    console.log('✅ 创建icons目录完成')
  }
  console.log('⏰ 开始复制icons')
  await fs.copy(iconPath, iconDistPath, { overwrite: true })
  console.log('✅ icons 已复制到 dist/')
}