<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/11RnAaubC8B2dyIY0HX4VU9akwjNUavcL

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Improvements Realized

### Root Directory
- Clean; no longer saturated with mixed logic or styles. The root now contains only configuration files and `index.html`.
- All source code moved to `src/`.

### Assets Folder
- CSS and JS are centralized in `src/assets`.
- `index.css` is now located at `src/assets/styles/index.css`.

### Demo vs. Full
- Clear entry points for different user experiences.
- By default, the app loads the **Full Experience**.
- To access the **Demo Mode**, append `?mode=demo` to the URL (e.g., `http://localhost:3000/?mode=demo`).
- The application logic has been refactored into `FullExperience` and `DemoExperience` components, managed by `App.tsx`.

### Code Structure
- **Context API**: Global state is managed via `AppContext`.
- **Modals**: Modal logic is separated into `ModalManager`.
- **Components**: UI components are organized in `src/components`.
