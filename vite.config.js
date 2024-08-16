import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  build: {
    sourcemap: true
  },
  assetsInclude: ['**/*.svg'], // Ensure SVG files are included in the build
  rewrites: [{ source: '/(.*)', destination: '/' }],
  server: {
    port: 3000
  }
})
