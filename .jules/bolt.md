## 2024-05-24 - [Lazy Load Experiences]
**Learning:** Initializing state based on URL params (`useState(() => ...)`) is crucial when using `React.lazy`. Without it, the default state triggers a download of the heavy component even if it's immediately replaced by `useEffect`.
**Action:** Always use lazy initialization for state that determines which lazy component to render first.

## 2024-05-24 - [Context Provider Re-renders]
**Learning:** The `AppContext` provider triggers re-renders for all consumers whenever *any* state changes (e.g., typing in a modal input), because the context value object is recreated on every render. Since `FullExperience` consumes the context, the entire application re-renders on every keystroke.
**Action:** Memoize large, independent sections of the UI (like `ArchitectDashboard` and `Introduction`) using `React.memo` to isolate them from unrelated context updates. Ensure context callbacks are wrapped in `useCallback` to keep props stable.
