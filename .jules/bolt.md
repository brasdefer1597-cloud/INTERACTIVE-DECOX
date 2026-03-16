
## 2024-03-16 - [Optimizing List Renders with React.memo]
**Learning:** Inline arrow functions break React.memo for list items, causing unnecessary re-renders.
**Action:** Pass item IDs directly to stable callback handlers instead of using inline functions in render loops.
