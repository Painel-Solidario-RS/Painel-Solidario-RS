import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const port = parseInt(process.env.PORT || '3000');
const portAPI = parseInt(process.env.PORT_API || '4000');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port,
    strictPort: true,
  },
  server: {
    port,
    strictPort: true,
    host: true,
    origin: `http://localhost:${port}`,
    proxy: {
      '/api': `http://localhost:${portAPI}`,
    },
  },
})
