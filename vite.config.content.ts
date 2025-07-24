import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  return {
    plugins: [vue(), UnoCSS()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@arco-design/web-vue/dist/arco.css";`
        }
      }
    },
    build: {
      outDir: 'dist/content',
      emptyOutDir: false,
      sourcemap: true,
      rollupOptions: {
        input: {
          background: 'src/content/index.ts',
        },
        output: {
          entryFileNames: 'index.js',
          // 确保CSS文件也被正确输出
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/[name]-[hash][extname]'
            }
            return 'assets/[name]-[hash][extname]'
          }
        },
        external: [],
      },
      watch: isDev ? {} : null,
    },
  }
})