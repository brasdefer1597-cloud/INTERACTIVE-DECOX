## 2024-05-24 - [Lazy Load Experiences]
**Learning:** Initializing state based on URL params (`useState(() => ...)`) is crucial when using `React.lazy`. Without it, the default state triggers a download of the heavy component even if it's immediately replaced by `useEffect`.
**Action:** Always use lazy initialization for state that determines which lazy component to render first.

## 2024-05-24 - [Code Splitting Modal Content and Heavy Dependencies]
**Learning:** Extracting large modal content into separate components and lazy loading them in `ModalManager` significantly reduces the initial bundle size. Additionally, moving heavy dependencies (like `@google/genai` via `geminiService`) to dynamic imports ensures they are only loaded when explicitly needed, preventing bloat in the main bundle.
**Action:** Isolate modal-specific logic into separate components and use `React.lazy`. Use dynamic imports for services that are only triggered by specific user actions.
