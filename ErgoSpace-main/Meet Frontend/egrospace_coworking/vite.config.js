import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.226.98:8000',
        changeOrigin: true,
        secure: false,
      }},
    host: true,
    port: 5173,
  }
})
