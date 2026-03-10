## 2024-03-10 - App Modal Splitting
**Learning:** Found an opportunity to lazy-load modal components in `App.tsx` because they are only rendered conditionally and can take up significant bundle size.
**Action:** Use React.lazy() and Suspense to lazy load non-critical modal components.
