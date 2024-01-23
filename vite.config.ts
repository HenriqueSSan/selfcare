import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                @use './src/interfaces/styles/_mixin.scss' as *;    
                @use './src/interfaces/styles/_font.scss' as *;
                @use './src/interfaces/styles/_palette.scss' as *;
                @use './src/interfaces/styles/_radius.scss' as *;
            `,
      },
    },
  },
});
