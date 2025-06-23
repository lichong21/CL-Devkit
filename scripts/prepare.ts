import { generateFileManifestJSON } from './build-manifest.ts'
import { isDev, getPath } from './utils.ts'
import chokidar from 'chokidar'
import path from 'path'
import fs from 'fs-extra'
import { PORT } from './utils.ts'

const { __filename, __dirname, filePath } = getPath(import.meta.url)

// generateFileManifestJSON()


function startWatchFilesChange() {
  const manifestPath = path.resolve(__dirname, '../src/manifest.ts')
  const packageJsonPath = path.resolve(__dirname, '../package.json')

  // 修复：使用相对路径或绝对路径的基础目录，然后让 chokidar 处理 glob 模式
  const srcDir = path.resolve(__dirname, '../src')
  const vueFilesPattern = `${srcDir}/**/*.vue`
  
  // 可选：如果你想使用正则表达式进行更精确的匹配
  const vueFileRegex = /\.vue$/
  
  const optionsHtmlPath = path.resolve(__dirname, '../src/options/index.html')
  const popupHtmlPath = path.resolve(__dirname, '../src/popup/index.html')
  const sidePanelHtmlPath = path.resolve(__dirname, '../src/sidePanel/index.html')

  if(isDev()) {
    console.log('prepare node env', process.env.NODE_ENV, isDev())
    console.log('srcDir:', srcDir)
    console.log('vueFilesPattern:', vueFilesPattern)
    
    chokidar.watch([manifestPath, packageJsonPath], {
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 1000,
        pollInterval: 100
      },
      persistent: true
    }).on('all', (event, path) => {
      console.log('event', event, path)
      generateFileManifestJSON()
    })


    // 方法2：使用正则表达式过滤 - 监听整个src目录然后过滤
    // 如果你更喜欢使用正则表达式，可以取消注释下面的代码
    chokidar.watch([optionsHtmlPath, popupHtmlPath, sidePanelHtmlPath], {
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 1000,
        pollInterval: 100
      },
      persistent: true
    }).on('all', (event, filePath) => {
      console.log('filePath srcDir', event, filePath)
    })
  }
}


function generateIndexHtml() {
  const views = ['options', 'popup', 'sidePanel']
  
  console.log('⏰ generateIndexHtml start')

  for (const view of views) {
    const indexHtmlPath = path.resolve(__dirname, `../src/${view}/index.html`)
    const distIndexHtmlPath = path.resolve(__dirname, `../dist/src/${view}/index.html`)
    let indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8')
    indexHtmlContent = indexHtmlContent.replace('src="./main.ts"', `src="http://localhost:${PORT}/src/${view}/main.ts"`).replace('<div id="app"></div>', '<div id="app">Vite server did not start</div>')
    fs.writeFileSync(distIndexHtmlPath, indexHtmlContent)
  }

  console.log('✅ generateIndexHtml done')
}


async function startRunAllStep() {
  try {
    await generateFileManifestJSON()
    startWatchFilesChange()
    generateIndexHtml()
  } catch (error) {
    console.error('error', error)
  }
}

startRunAllStep()