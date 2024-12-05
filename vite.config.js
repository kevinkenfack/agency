import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['next/image'], // Ignore le module next/image
    },
  },
  resolve: {
    alias: {
      'next/image': '/path/to/your/custom/ImageComponent.js', // Optionnel : redirige vers un composant personnalisé si nécessaire
    },
  },
});
