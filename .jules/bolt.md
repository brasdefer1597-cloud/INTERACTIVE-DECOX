## 2024-05-24 - Code Splitting Modals with React.lazy
**Learning:** React component imports for Modals which only load when displayed should be done dynamically using `React.lazy` to avoid inflating the initial JS payload block size, making initial load faster.
**Action:** Always verify if hidden or optionally rendered components can be lazy loaded via `React.lazy` and `Suspense`, particularly modals, widgets, or overlays.
