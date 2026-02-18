## 2024-05-24 - [Lazy Load Experiences]
**Learning:** Initializing state based on URL params (`useState(() => ...)`) is crucial when using `React.lazy`. Without it, the default state triggers a download of the heavy component even if it's immediately replaced by `useEffect`.
**Action:** Always use lazy initialization for state that determines which lazy component to render first.

## 2024-05-24 - [Performance Standard]
**Learning:** This repository has been optimized with `React.lazy` and `Suspense` for critical path code splitting.
**Action:** This codebase is now the performance standard for the brand. Ensure future features maintain this level of lazy loading efficiency.
