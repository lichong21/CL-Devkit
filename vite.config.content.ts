import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
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
  },
})