(function() {
  function isOnMemberAccess() {
    return window.location.pathname.indexOf("/member-access/") !== -1;
  }

  function setupNav() {
    if (isOnMemberAccess()) {
      // Hide all non-member-access nav sections
      document.querySelectorAll('.md-nav--primary > .md-nav__list > .md-nav__item').forEach(function(item) {
        var link = item.querySelector('a, label');
        if (!link) return;
        var text = link.textContent.trim();
        if (text !== "Member Access") {
          item.style.display = "none";
        }
      });
    } else {
      // On non-member-access pages, intercept only the overview link to open in new tab
      document.querySelectorAll('.md-nav a').forEach(function(link) {
        var path = link.pathname || "";
        var isOverview = path.endsWith("/member-access/") ||
                         path.endsWith("/member-access/index.html");
        if (isOverview && !link.hasAttribute("data-ma")) {
          link.setAttribute("data-ma", "true");
          link.addEventListener("click", function(e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            window.open(link.href, "_blank", "noopener");
          }, true);
        }
      });
    }
  }

  setupNav();
  new MutationObserver(setupNav).observe(document.body, { childList: true, subtree: true });

  // Re-run on instant navigation
  if (typeof document$ !== "undefined") {
    document$.subscribe(setupNav);
  }
})();
