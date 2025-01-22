import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@hooks': path.resolve(__dirname, 'src/hooks'), // Menambahkan alias @hooks untuk folder hooks
      '@components': path.resolve(__dirname, 'src/components'), // Menambahkan alias @components untuk folder components
    },
  },
})
