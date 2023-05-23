import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginBrowserSync from 'vite-plugin-browser-sync'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePluginBrowserSync()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
