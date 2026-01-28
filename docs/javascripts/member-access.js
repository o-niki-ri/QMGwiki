document$.subscribe(function() {
  document.querySelectorAll('a[href*="member-access/"]').forEach(function(link) {
    // Skip the index/landing page itself
    if (link.pathname.endsWith("/member-access/") || link.pathname.endsWith("/member-access/index.html")) {
      return;
    }
    link.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = link.href;
    }, true);
  });
});
