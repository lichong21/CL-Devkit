import path from 'path'
import { fileURLToPath } from 'url'

export interface IGetPath {
  __filename: string
  __dirname: string
  filePath: string
}
export function getPath(metaUrl: string): IGetPath {
  const __filename = fileURLToPath(metaUrl)
  const __dirname = path.dirname(__filename)
  return {
    __filename,
    __dirname,
    filePath: path.resolve(__dirname, __filename)
  }
}

export const isDev = () => process.env.NODE_ENV !== 'production'

export const PORT = 5173
// export const getViteServerUrl = () => `http://localhost:${PORT}`