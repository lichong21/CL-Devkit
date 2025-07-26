import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'
import { getPath, PORT } from './scripts/utils.ts'

const { __dirname } = getPath(import.meta.url)

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [vue(), UnoCSS()],
    // 开发服务器配置
    server: {
      port: PORT,
      open: false,
    },
    mode: isDev ? 'development' : 'production',
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          popup: resolve(__dirname, 'src/popup/index.html'),
          options: resolve(__dirname, 'src/options/index.html'),
          sidePanel: resolve(__dirname, 'src/sidePanel/index.html')
        },
        output: {
        }
      }
    }
  }
})
