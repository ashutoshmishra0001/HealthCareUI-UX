import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist'  // Default is already 'dist', but it's good to be explicit
  },
  base: './' // Ensures assets load correctly when deployed in subdirectories
});
