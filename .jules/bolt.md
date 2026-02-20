## 2024-05-24 - [Lazy Load Experiences]
**Learning:** Initializing state based on URL params (`useState(() => ...)`) is crucial when using `React.lazy`. Without it, the default state triggers a download of the heavy component even if it's immediately replaced by `useEffect`.
**Action:** Always use lazy initialization for state that determines which lazy component to render first.

## 2024-05-25 - [Verify Documented Architecture]
**Learning:** Documentation claimed modals were lazy-loaded, but the code used static imports. This discrepancy led to a larger than necessary initial bundle.
**Action:** Don't trust documentation blindly; verify architectural claims (like code splitting) by inspecting the actual import statements and build output.
