import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['next/image', 'next/link'], // Ajout de next/link
    },
  },
  resolve: {
    alias: {
      'next/image': '/path/to/your/custom/ImageComponent.js', // Redirection personnalisée pour next/image si nécessaire
      'next/link': '/path/to/your/custom/LinkComponent.js',  // Redirection pour next/link
    },
  },
});
