import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' },
      { find: 'node_modules', replacement: '/node_modules' }
    ]
  },
  build: {
    outDir: "../backend/src/main/resources/static",
  }, // 빌드 결과물이 생성되는 경로
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    }, // proxy 설정
  },
})
