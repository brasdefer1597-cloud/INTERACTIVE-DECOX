## 2024-05-24 - [Lazy Load Experiences]
**Learning:** Initializing state based on URL params (`useState(() => ...)`) is crucial when using `React.lazy`. Without it, the default state triggers a download of the heavy component even if it's immediately replaced by `useEffect`.
**Action:** Always use lazy initialization for state that determines which lazy component to render first.

## 2024-05-25 - [Context-Driven Re-render Anti-pattern]
**Learning:** In list components like `HacksSection`, rendering children with inline arrow functions inside `.map()` destroys the benefits of `React.memo` for the children, because the functions are re-created on every render (which happens frequently due to high-frequency context updates).
**Action:** When mapping over lists and passing handlers, always ensure the child component accepts the item's `id` and uses stable function references (like from `useCallback` or passed directly from parents) to call the handler, rather than creating an inline closure in the render method.
