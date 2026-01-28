// Only force new tab for the "Member Access" nav link when NOT already on a member-access page
(function() {
  var onMemberPage = window.location.pathname.indexOf("/member-access/") !== -1;
  if (onMemberPage) return;

  function tagLinks() {
    document.querySelectorAll('.md-nav a[href*="member-access"]').forEach(function(link) {
      if (!link.hasAttribute("data-member-access")) {
        link.setAttribute("data-member-access", "true");
        link.addEventListener("click", function(e) {
          e.stopImmediatePropagation();
          e.preventDefault();
          window.open(link.href, "_blank", "noopener");
        }, true);
      }
    });
  }
  tagLinks();
  new MutationObserver(tagLinks).observe(document.body, { childList: true, subtree: true });
})();
