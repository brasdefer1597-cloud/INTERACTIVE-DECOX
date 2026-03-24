## 2023-10-27 - [Fix CI Chunk Memory Limits]
**Learning:** Cloudflare Workers and Pages have strict memory limits for the build process (Rollup generation phase). Bundling massive libraries like `tone` and `@google/genai` into the main application chunk causes OOM or timeout failures, breaking CI.
**Action:** Always verify chunk sizes using `npm run build` and apply `manualChunks` in `vite.config.ts` to separate large vendor libraries. This keeps chunk sizes < 500kB, reducing peak memory usage during build and improving caching for users.
