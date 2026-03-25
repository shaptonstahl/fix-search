// Hide Google AI Overview and search cruft
function hideElements() {
  const selectorsToHide = [
    // AI Overview
    "div[data-initq]",           // AI Overview container
    "#aiob",                     // AI Overview block
    "div[jscontroller='MxRe2b']",// AI Overview widget
    ".YzLMoc",                   // AI Overview section
    // People also ask
    ".related-question-pair",
    // Sponsored / ads at top
    "#tads",
    // Sponsored / ads at bottom
    "#tadsb",
  ];

  for (const selector of selectorsToHide) {
    for (const el of document.querySelectorAll(selector)) {
      el.style.display = "none";
    }
  }
}

hideElements();

// Re-run on dynamic content changes (Google loads content async)
const observer = new MutationObserver(hideElements);
observer.observe(document.body, { childList: true, subtree: true });
