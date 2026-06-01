import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ReelSaga marketing/catalog site — recreated from the Claude Design handoff bundle.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: false
  }
})
