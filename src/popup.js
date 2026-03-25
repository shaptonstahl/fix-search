function extractSiteDomain(url) {
  try {
    const hostname = new URL(url).hostname;
    // Extract top and second-level domain (e.g. "amazon.com" from "www.amazon.com")
    const parts = hostname.split(".");
    if (parts.length >= 2) {
      return parts.slice(-2).join(".");
    }
    return hostname;
  } catch {
    return null;
  }
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  const domain = extractSiteDomain(tab?.url || "");

  document.getElementById("btn-site").textContent = `Search ${domain || "this site"}`;

  function search(includeSite) {
    const query = document.getElementById("search-input").value.trim();
    if (!query) return;
    const fullQuery = (includeSite && domain) ? `site:${domain} ${query}` : query;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(fullQuery)}&udm=14`;
    chrome.tabs.create({ url: searchUrl });
    window.close();
  }

  document.getElementById("search-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") search(true);
  });

  document.getElementById("btn-site").addEventListener("click", () => search(true));
  document.getElementById("btn-web").addEventListener("click", () => search(false));
});
