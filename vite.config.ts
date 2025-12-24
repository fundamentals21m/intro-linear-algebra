import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// =============================================================================
// COURSE CONFIGURATION - Update these values for your course
// =============================================================================
const COURSE_ID = 'linalg'  // Short ID: 'ba', 'aa', 'crypto', etc.
// Use '/' for standalone Vercel deployment, or `/linalg-hub/` for hub deployment
const BASE_PATH = '/linalg-hub/'
// =============================================================================

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
})
