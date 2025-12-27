import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks: {
          // Core Vue framework
          'vue-vendor': ['vue', 'vue-router'],
          // Vuetify UI library (largest dependency)
          'vuetify-vendor': ['vuetify'],
        }
      }
    }
  }
})
