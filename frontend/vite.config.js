import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SDC_Project-news_aggregation/',
  server: {
    port: 5173
  }
})
