import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ["styled-components", { "ssr": true, "displayName": false, "minify": true }]],
})

