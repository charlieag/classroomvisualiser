# Classroom Visualiser

This is a browser-based visualiser for classroom cameras, supporting:

- 0° / 180° rotation
- Tint overlay with adjustable color and opacity
- Auto-scaling video to fill the viewport
- Wake Lock to prevent monitor sleep
- Offline support / installable as a PWA

## Files

- `index.html` — main visualiser page
- `sw.js` — service worker for offline support

## Usage

1. Open `index.html` in a modern browser (Edge, Chrome, or Firefox).
2. Allow camera access when prompted.
3. Adjust tint and rotation using the controls in the bottom-right corner.

## PWA / Offline Installation

1. Serve the folder over HTTPS (GitHub Pages or any HTTPS host).
2. Open `index.html` in the browser.
3. You should see an "Install" option in the browser’s address bar/menu.
4. Install to have it run as a standalone app.

## GitHub Pages Deployment

1. Create a GitHub repository and upload `index.html` and `sw.js`.
2. Enable GitHub Pages in the repository settings.
3. Access the page via `https://<username>.github.io/<repo>/index.html`.
4. The PWA install option should now be available.

