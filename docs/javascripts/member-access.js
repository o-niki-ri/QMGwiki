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
      // On non-member-access pages, collapse Member Access to a single link (hide sub-items)
      document.querySelectorAll('.md-nav--primary > .md-nav__list > .md-nav__item').forEach(function(item) {
        var label = item.querySelector('label');
        if (!label || label.textContent.trim() !== "Member Access") return;

        // Hide the nested nav (sub-items like Overview, hBN Thickness)
        var nestedNav = item.querySelector('.md-nav');
        if (nestedNav) nestedNav.style.display = "none";

        // Hide the toggle/checkbox and label
        var toggle = item.querySelector('input');
        if (toggle) toggle.style.display = "none";
        if (label) label.style.display = "none";

        // Add a direct link if not already present
        if (!item.querySelector('a[data-ma-link]')) {
          var link = document.createElement('a');
          link.href = label.getAttribute('for') ? '' : '';
          // Find the overview link to get the correct href
          var overviewLink = item.querySelector('a[href*="member-access"]');
          if (overviewLink) {
            link.href = overviewLink.href;
          }
          link.textContent = "Member Access";
          link.className = "md-nav__link";
          link.setAttribute("data-ma-link", "true");
          link.addEventListener("click", function(e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            window.open(link.href, "_blank", "noopener");
          }, true);
          item.insertBefore(link, item.firstChild);
        }
      });
    }
  }

  setupNav();
  new MutationObserver(setupNav).observe(document.body, { childList: true, subtree: true });

  if (typeof document$ !== "undefined") {
    document$.subscribe(setupNav);
  }
})();
