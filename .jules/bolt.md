## 2024-05-24 - [Lazy Load Experiences]
**Learning:** Initializing state based on URL params (`useState(() => ...)`) is crucial when using `React.lazy`. Without it, the default state triggers a download of the heavy component even if it's immediately replaced by `useEffect`.
**Action:** Always use lazy initialization for state that determines which lazy component to render first.

## 2024-05-25 - [React Context and List Re-renders]
**Learning:** In a codebase using heavily updated React Context (like audio state, modal states, or completion states), passing inline arrow functions to list items causes the entire list to re-render on every context change, regardless of whether the specific item's data changed.
**Action:** Always use `React.memo` for list components and ensure all event handlers passed to them are stable using `useCallback`, accepting the item's ID as an argument instead of relying on closure values.
