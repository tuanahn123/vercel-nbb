import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Đảm bảo thư mục này khớp với distDir trong vercel.json
    assetsDir: 'assets',
  },
});
