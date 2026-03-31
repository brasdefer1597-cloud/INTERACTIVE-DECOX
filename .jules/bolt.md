## 2024-05-24 - [Optimizing Component Arrays with Stable Callbacks]
**Learning:** Utilizing React.memo for components rendered inside an array isn't enough when event handlers are dynamically passed. It triggers an O(n) re-render cost for every list item during parent context updates.
**Action:** Always combine React.memo with the "latest ref pattern" in the parent component. This provides children with a stable callback reference using `useCallback`, while avoiding stale closures by tracking the latest functions dynamically using `useRef` and updating them in a `useEffect`.
