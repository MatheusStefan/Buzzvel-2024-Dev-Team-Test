import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    include: `src/IconAssets/*.svg`,
  }),],
  base: '/Buzzvel-2024-Dev-Team-Test/'
})
