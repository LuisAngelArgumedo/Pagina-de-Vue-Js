import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: true, // Permite exponer en red local
    port: 5173, // Puerto por defecto
    allowedHosts: [
      'tiendavue.onrender.com' // 👈 Añadido para permitir tu dominio en Render
    ]
  }
})
