## 2024-05-24 - [Lazy Load Experiences]
**Learning:** Initializing state based on URL params (`useState(() => ...)`) is crucial when using `React.lazy`. Without it, the default state triggers a download of the heavy component even if it's immediately replaced by `useEffect`.
**Action:** Always use lazy initialization for state that determines which lazy component to render first.

## 2025-05-20 - [Lazy Load Modal Contents]
**Learning:** Extracting large inline JSX (like `HackDetails`) into separate components enables code splitting for modal contents, significantly reducing the initial bundle size. `ModalManager` was previously bundling all modal contents eagerly.
**Action:** Always lazy load heavy modal contents using `React.lazy` and `Suspense` inside the modal manager.
