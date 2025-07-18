import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  
  return {
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