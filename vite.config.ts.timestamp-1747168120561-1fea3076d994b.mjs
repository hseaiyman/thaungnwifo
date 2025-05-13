// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  publicDir: "public",
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "./index.html"
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return "assets/[name]-[hash][extname]";
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/pdf/i.test(ext)) {
            return `pdf/[name][extname]`;
          }
          return "assets/[name]-[hash][extname]";
        }
      }
    },
    copyPublicDir: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogWydsdWNpZGUtcmVhY3QnXSxcbiAgfSxcbiAgcHVibGljRGlyOiAncHVibGljJyxcbiAgc2VydmVyOiB7XG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBhc3NldHNEaXI6ICdhc3NldHMnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1haW46ICcuL2luZGV4Lmh0bWwnLFxuICAgICAgfSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIGlmICghYXNzZXRJbmZvLm5hbWUpIHJldHVybiAnYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGluZm8gPSBhc3NldEluZm8ubmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgIGNvbnN0IGV4dCA9IGluZm9baW5mby5sZW5ndGggLSAxXTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoL3BkZi9pLnRlc3QoZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGBwZGYvW25hbWVdW2V4dG5hbWVdYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuICdhc3NldHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXSc7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29weVB1YmxpY0RpcjogdHJ1ZSxcbiAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQUEsRUFDQSxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksQ0FBQyxVQUFVLEtBQU0sUUFBTztBQUU1QixnQkFBTSxPQUFPLFVBQVUsS0FBSyxNQUFNLEdBQUc7QUFDckMsZ0JBQU0sTUFBTSxLQUFLLEtBQUssU0FBUyxDQUFDO0FBRWhDLGNBQUksT0FBTyxLQUFLLEdBQUcsR0FBRztBQUNwQixtQkFBTztBQUFBLFVBQ1Q7QUFFQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLEVBQ2pCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
