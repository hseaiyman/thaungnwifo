import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.pdf')) {
            return 'pdf/training/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    copyPublicDir: true,
  },
});