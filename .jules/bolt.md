
## 2024-05-19 - Stabilize List Render Performance with React.memo & useCallback
**Learning:** Using `React.memo` on list components is ineffective if parent props (like inline `onClick` handlers) recreate on every render.
**Action:** Always pair `React.memo` on list children with stable `useCallback` handlers in the parent, ensuring any child `id` is passed correctly without relying on inline closures.
