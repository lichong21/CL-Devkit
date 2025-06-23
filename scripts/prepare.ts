import { generateFileManifestJSON } from './build-manifest.ts'
import { isDev, getPath, resolvePath } from './utils.ts'
import chokidar from 'chokidar'
import path from 'path'

const { __filename, __dirname, filePath } = getPath(import.meta.url)

// generateFileManifestJSON()


function startWatchFilesChange() {
  const manifestPath = path.resolve(__dirname, '../src/manifest.ts')
  const packageJsonPath = path.resolve(__dirname, '../package.json')

  if(isDev()) {
    console.log('prepare node env', process.env.NODE_ENV, isDev())
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
  }
}

async function startRunAllStep() {
  try {
    await generateFileManifestJSON()
    startWatchFilesChange()
  } catch (error) {
    console.error('error', error)
  }
}

startRunAllStep()