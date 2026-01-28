document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href*="UTS-PhD-Template.zip"]');
    if (link) {
      e.preventDefault();
      var ok = confirm(
        "You are about to download UTS-PhD-Template.zip (~1 MB).\n\n" +
        "This contains a LaTeX thesis template pre-configured for UTS PhD formatting, " +
        "with chapter structure, bibliography management, and UTS branding."
      );
      if (ok) {
        window.location.href = link.href;
      }
    }
  });
});
