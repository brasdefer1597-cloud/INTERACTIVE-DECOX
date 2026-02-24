## 2024-05-24 - [Lazy Load Experiences]
**Learning:** Initializing state based on URL params (`useState(() => ...)`) is crucial when using `React.lazy`. Without it, the default state triggers a download of the heavy component even if it's immediately replaced by `useEffect`.
**Action:** Always use lazy initialization for state that determines which lazy component to render first.

## 2024-05-24 - [Context Provider Value Memoization]
**Learning:** React Context `value` objects are recreated on every render if not memoized, forcing all consumers to re-render. This is especially impactful in large component trees.
**Action:** Always wrap context provider values in `useMemo` and ensure handler functions are memoized with `useCallback` to maintain referential stability.
