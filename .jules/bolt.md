## 2024-05-24 - [Lazy Load Experiences]
**Learning:** Initializing state based on URL params (`useState(() => ...)`) is crucial when using `React.lazy`. Without it, the default state triggers a download of the heavy component even if it's immediately replaced by `useEffect`.
**Action:** Always use lazy initialization for state that determines which lazy component to render first.

## 2024-05-25 - [Context Performance]
**Learning:** `AppContext` value was not memoized, causing potential re-renders for all context consumers whenever *any* state in `AppProvider` changed. This is a common React performance pitfall.
**Action:** Always wrap context provider values in `useMemo` and event handlers in `useCallback` to prevent unnecessary re-renders in consuming components.
