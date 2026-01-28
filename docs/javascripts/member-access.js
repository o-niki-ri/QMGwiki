document$.subscribe(function() {
  document.querySelectorAll('a[href*="member-access"]').forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = link.href;
    }, true);
  });
});
