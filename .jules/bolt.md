## 2026-03-21 - [App Component Code Splitting]
**Learning:** The App component was importing all modal and secondary components synchronously at the top level. This meant the initial load included code for modals that the user might never see, increasing bundle size and blocking initial render.
**Action:** Use React.lazy and Suspense for all modal-specific components (e.g. PostPaymentPage, DiscoverySessionPage) and celebratory elements (e.g. Confetti) to defer their loading until they are actually rendered, effectively reducing the main chunk size and improving initial page load time.
