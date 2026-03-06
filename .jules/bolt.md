## 2024-05-28 - [React.memo in lists]
**Learning:** Passing inline arrow functions (e.g. `onActivate={() => onActivateClick(hack.id)}`) directly inside `map` breaks `React.memo` optimization on the rendered list items by recreating the function on every render, causing the child components to always re-render.
**Action:** Always refactor child components to pass the item `id` through the callback (e.g., `onActivate(id)`) and define the callback handlers with `useCallback` in the parent component to maintain stable references, successfully preventing unnecessary re-renders.
