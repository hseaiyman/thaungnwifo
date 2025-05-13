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
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];

          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          
          if (/\.(pdf|doc|docx|xls|xlsx|txt)$/i.test(ext)) {
            return 'assets/documents/[name]-[hash][extname]';
          }
          
          if (/\.(woff2?|eot|ttf|otf)$/i.test(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
});