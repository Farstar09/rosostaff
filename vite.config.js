import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages, set to your repo name, e.g. base: '/roso-staff-site/'
  // base: '/<your-repo-name>/',
})
