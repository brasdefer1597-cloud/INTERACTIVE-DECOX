## 2024-05-24 - React.memo on Lists Needs Stable Handlers with IDs
**Learning:** Passing inline arrow functions in `.map()` to list item components breaks `React.memo` optimizations because new function references are created on every parent render.
**Action:** Always modify child component props to accept stable handler callbacks that accept IDs (`(id: number) => void`), defined via `useCallback` in the parent, to prevent unnecessary re-renders of lists during high-frequency context updates.
