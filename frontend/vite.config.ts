import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore TODO use defineConfig function & check setupProxy directory to ensure that it is located in the correct location
import {setupProxy} from "./setupProxy";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/apis': setupProxy,
    }
  }
})