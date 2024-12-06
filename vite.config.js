import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // Permet d'accéder depuis d'autres appareils sur le même réseau
    port: 5173,      // (Optionnel) Définir explicitement le port
  },
});
