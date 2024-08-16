import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  css: {
    devSourcemap: true
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      // Rollup plugins configuration
    }
  },
  assetsInclude: ['**/*.svg'], // Ensure SVGs are included as assets
  server: {
    port: 3000
  }
})
