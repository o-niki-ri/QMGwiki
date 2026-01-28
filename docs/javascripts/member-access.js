document$.subscribe(function() {
  document.querySelectorAll('a[href*="member-access"]').forEach(function(link) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });
});
