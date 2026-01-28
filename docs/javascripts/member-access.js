(function() {
  // Logged in if: remember-me token exists, OR we're on a decrypted member-access page
  // (if the page has MkDocs nav, it's decrypted — the StatiCrypt password form replaces everything)
  var hasToken = !!localStorage.getItem("staticrypt_passphrase");
  var onMemberPage = window.location.pathname.indexOf("/member-access/") !== -1;
  var isLoggedIn = hasToken || onMemberPage;

  function setup() {
    var items = document.querySelectorAll('.md-nav--primary > .md-nav__list > .md-nav__item');
    items.forEach(function(item) {
      var label = item.querySelector(':scope > label');
      if (!label || label.textContent.trim() !== "Member Access") return;

      // Remove any previously injected lock button
      var existing = item.parentNode.querySelector('[data-ma-lock]');
      if (existing) existing.remove();

      if (isLoggedIn) {
        // Logged in: show the full nav section as-is (MkDocs default expanded sub-items)
        item.style.display = "";
      } else {
        // Not logged in: hide the section, show a lock button instead
        item.style.display = "none";

        var overviewLink = item.querySelector('a[href*="member-access"]');
        var href = overviewLink ? overviewLink.getAttribute("href") : "member-access/";

        var btn = document.createElement("li");
        btn.className = "md-nav__item";
        btn.setAttribute("data-ma-lock", "true");
        btn.innerHTML = '<a href="' + href + '" class="md-nav__link" style="' +
          'display:inline-block;margin-top:0.4rem;padding:0.4rem 0.8rem;' +
          'border:1px solid var(--md-default-fg-color--lighter);border-radius:4px;' +
          'font-size:0.7rem;opacity:0.85;">' +
          '\uD83D\uDD12 Member Access</a>';
        item.parentNode.appendChild(btn);
      }
    });
  }

  // Force full page load for member-access links (encrypted pages break instant nav)
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href*="member-access"]');
    if (!link) return;
    e.stopPropagation();
    e.preventDefault();
    window.location.href = link.href;
  }, true);

  setup();
  if (typeof document$ !== "undefined") {
    document$.subscribe(setup);
  }
})();
