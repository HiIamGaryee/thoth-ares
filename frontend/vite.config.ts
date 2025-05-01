import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';   

export default defineConfig({
  plugins: [
    tailwind(),   // ★ must come before react()
    react(),
  ],
});
