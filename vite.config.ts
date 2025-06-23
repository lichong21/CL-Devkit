import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { getPath } from './scripts/utils.ts'

const { __dirname } = getPath(import.meta.url)


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
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
})
