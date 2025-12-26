import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite pour CogniAI
// En dev: base = '/'
// En prod: base = '/cogniai/' (Chemin absolu explicite, plus robuste pour le routing)
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/cogniai/' : '/',
  build: {
    outDir: '../cogniai',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
}));

