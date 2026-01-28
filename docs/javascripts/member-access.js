// Force member-access nav links to open in a new tab, bypassing instant navigation
(function() {
  function tagLinks() {
    document.querySelectorAll('a[href*="member-access"]').forEach(function(link) {
      if (!link.hasAttribute("data-member-access")) {
        link.setAttribute("data-member-access", "true");
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener");
        link.addEventListener("click", function(e) {
          e.stopImmediatePropagation();
          window.open(link.href, "_blank", "noopener");
          e.preventDefault();
        }, true);
      }
    });
  }
  tagLinks();
  new MutationObserver(tagLinks).observe(document.body, { childList: true, subtree: true });
})();
