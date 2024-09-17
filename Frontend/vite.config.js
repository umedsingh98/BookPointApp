// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Specify the correct output directory
    outDir: 'dist',
    // Ensure that assets are handled correctly
    assetsDir: 'assets',
    // Generate a manifest file for better caching
    manifest: true,
    // Optimize dependencies for faster builds
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})