document.addEventListener('DOMContentLoaded', function () {
  // Attach behavior to all nav toggle buttons on the page
  document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var nav = btn.closest('nav');
      if (!nav) return;
      var links = nav.querySelector('.nav-links');
      var isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      if (links) links.classList.toggle('open', isOpen);
    });
  });
});
