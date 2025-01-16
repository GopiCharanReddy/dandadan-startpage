import { defineConfig } from "vite";

export default defineConfig({
  base: "/dandadan-startpage/", // Base path for GitHub Pages
  root: "./src", // Set the root directory

  server: {
    headers: {
      // Add Content Security Policy headers to allow GitHub Pages scripts
      "Content-Security-Policy":
        "script-src 'self' https://gopicharanreddy.github.io; object-src 'none';",
    },
  },

  build: {
    outDir: "../dist", // Adjust output directory relative to the root
    emptyOutDir: true, // Clean the output directory before building
  },
});
