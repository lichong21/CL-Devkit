import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  
  return {
    plugins: [UnoCSS()],
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