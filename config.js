(function () {
  // ── Site-wide configuration ──────────────────────────────────────────
  // Edit values here; they apply automatically across every page.
  var SITE = {
    tel:          '+353870545663',
    telDisplay:   '087-0545663',
    email:        'momoslaser@gmail.com',
    facebook:     '#',   // paste your Facebook page URL here
    instagram:    '#',   // paste your Instagram profile URL here
    youtube:      '#'    // paste your YouTube channel URL here
  };
  // ────────────────────────────────────────────────────────────────────

  function apply() {
    document.querySelectorAll('[data-cfg="tel"]').forEach(function (el) {
      el.href = 'tel:' + SITE.tel;
      el.textContent = SITE.telDisplay;
    });
    document.querySelectorAll('[data-cfg="email"]').forEach(function (el) {
      el.href = 'mailto:' + SITE.email;
      el.textContent = SITE.email;
    });
    document.querySelectorAll('[data-cfg="facebook"]').forEach(function (el) { el.href = SITE.facebook; });
    document.querySelectorAll('[data-cfg="instagram"]').forEach(function (el) { el.href = SITE.instagram; });
    document.querySelectorAll('[data-cfg="youtube"]').forEach(function (el) { el.href = SITE.youtube; });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
