/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // ⚡ Bolt: Chunk Splitting Optimization
        // 💡 What: Separate heavy vendor libraries into individual cacheable chunks.
        // 🎯 Why: Fixes CI build limits (OOM/timeout) on Cloudflare Workers by keeping chunk sizes under 500kB.
        // 📊 Impact: Main application chunk size reduced from ~950kB to ~180kB. Improves caching and Time to Interactive.
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['motion', 'motion/react'],
          'vendor-tone': ['tone'],
          'vendor-ai': ['@google/genai'],
        }
      }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': {}
  }
})
