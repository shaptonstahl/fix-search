# Fix Search
This Chromium extension uses Google search in smarter ways.
1. For basic Google searches, it hides the AI Overview and a lot of Google cruft.
2. For sites like Amazon, it lets you use Google to search instead of the site's (often crappy) search.

## Functionality
- This is a Chrome / Chromium extension manually installed in developer mode.
- When pinned to the toolbar and the user left-clicks on the icon, it brings up a dialog box. The extension identifies the current site based on the current URL's top and second-level domain. (ex: `vendorsite.com`).
- The dialog has says it will use Google to search `vendorsite.com` with the search terms provided.
- When the search is provided, it forwards to `https://www.google.com/search?q=site%3Avendorsite.com+<the entered search>`
