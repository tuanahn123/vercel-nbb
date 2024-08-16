import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  build: {
    sourcemap: true
  },
  rewrites: [{ source: '/(.*)', destination: '/' }],
  server: {
    port: 3000
  }
})
