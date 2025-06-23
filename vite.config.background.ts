import { defineConfig } from 'vite'




export default defineConfig({
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