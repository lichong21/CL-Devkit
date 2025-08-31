import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [UnoCSS()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@arco-design/web-vue/dist/arco.css";`
        }
      }
    },
    build: {
      outDir: 'dist/background',
      emptyOutDir: false,
      rollupOptions: {
        input: {
          background: 'src/background/index.ts',
        },
        output: {
          entryFileNames: 'index.js',
        }
      },
      // 在开发模式下启用watch
      watch: isDev ? {} : null,
    },
  }
})