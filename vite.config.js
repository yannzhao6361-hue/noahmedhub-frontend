import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/noahmedhub',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path // 确保路径不做额外剔除
      }
    }
  }
})