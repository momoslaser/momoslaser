(function () {
  // ── Site-wide configuration ──────────────────────────────────────────
  // Edit values here; they apply automatically across every page.
  var SITE = {
    tel:          '+353870545663',
    telDisplay:   '087-0545663',
    email:        'momoslaser@gmail.com',
    facebook:     'https://www.facebook.com/share/1Anx6KKGRB/',   // Facebook page
    instagram:    'https://www.instagram.com/momos_laser_pulsed_cleaning?igsh=dDNtZXV3OXZyaHFx',   // Instagram profile
    youtube:      '#',   // paste your YouTube channel URL here
    tiktok:       'https://www.tiktok.com/@momos.laser?_r=1&_t=ZN-97UCtxLVav0'    // TikTok profile
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
    document.querySelectorAll('[data-cfg="tiktok"]').forEach(function (el) { el.href = SITE.tiktok; });
  }


  function injectYouTubeModal() {
    var YT_STRINGS = {
      en: {
        heading: 'Almost There…',
        body: 'Our YouTube channel is still warming up — much like the laser before a big clean.<br><br>We’re busy making things sparkle. Subscribe-worthy content is loading at 300 watts!',
        btn: 'Got it, I’ll wait!'
      },
      pl: {
        heading: 'Już Prawie…',
        body: 'Nasz kanał YouTube jeszcze się rozgrzewa — tak jak laser przed czyszczeniem.<br><br>Jesteśmy zajęci robieniem rzeczy błyszczącymi. Treści warte subskrypcji ładują się z mocą 300 watów!',
        btn: 'Rozumiem, poczekam!'
      },
      sk: {
        heading: 'Už Čoskoro…',
        body: 'Náš YouTube kanál sa ešte zahrieva — rovnako ako laser pred čistením.<br><br>Sme zaneprázdnení robením vecí lesklejšími. Obsah hodný odberu sa načítava výkonom 300 wattov!',
        btn: 'Jasné, počkám!'
      }
    };

    var css = `
      #yt-modal-overlay {
        display:none; position:fixed; inset:0; z-index:99999;
        background:rgba(0,0,0,.85); backdrop-filter:blur(4px);
        align-items:center; justify-content:center;
      }
      #yt-modal-overlay.open { display:flex; }
      #yt-modal-box {
        background:linear-gradient(145deg,#111 0%,#0e0e0e 100%);
        border:1px solid rgba(201,168,76,.35); border-radius:6px;
        padding:2.5rem 2rem 2rem; max-width:380px; width:90%;
        text-align:center; position:relative;
        box-shadow:0 0 60px rgba(201,168,76,.12);
        font-family:'Rajdhani',sans-serif;
      }
      #yt-modal-box .yt-icon {
        font-size:3rem; color:#c9a84c; margin-bottom:1rem; display:block;
        animation: yt-pulse 2s ease-in-out infinite;
      }
      @keyframes yt-pulse {
        0%,100% { opacity:1; transform:scale(1); }
        50% { opacity:.6; transform:scale(1.1); }
      }
      #yt-modal-box h3 {
        font-family:'Cinzel',serif; font-size:1.1rem; letter-spacing:.15em;
        color:#fff; margin:0 0 .8rem; text-transform:uppercase;
      }
      #yt-modal-box p {
        font-size:.95rem; font-weight:300; color:rgba(232,232,232,.65);
        line-height:1.7; margin:0 0 1.5rem;
      }
      #yt-modal-box .yt-close {
        font-family:'Cinzel',serif; font-size:.7rem; letter-spacing:.25em;
        text-transform:uppercase; background:transparent;
        border:1px solid rgba(201,168,76,.5); color:#c9a84c;
        padding:.6rem 1.6rem; cursor:pointer; transition:background .2s,color .2s;
      }
      #yt-modal-box .yt-close:hover { background:#c9a84c; color:#000; }
      #yt-modal-box .yt-dismiss {
        position:absolute; top:.7rem; right:.9rem; background:none; border:none;
        color:rgba(255,255,255,.3); font-size:1.2rem; cursor:pointer; line-height:1;
        transition:color .2s;
      }
      #yt-modal-box .yt-dismiss:hover { color:#c9a84c; }
    `;
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var html = `
      <div id="yt-modal-overlay">
        <div id="yt-modal-box">
          <button class="yt-dismiss" aria-label="Close">&times;</button>
          <span class="yt-icon"><i class="bi bi-youtube"></i></span>
          <h3 id="yt-modal-heading"></h3>
          <p id="yt-modal-body"></p>
          <button class="yt-close" id="yt-modal-btn"></button>
        </div>
      </div>
    `;
    var div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div.firstElementChild);

    var overlay = document.getElementById('yt-modal-overlay');

    function getLang() {
      return localStorage.getItem('momos_lang') || 'en';
    }

    function updateModalText() {
      var s = YT_STRINGS[getLang()] || YT_STRINGS.en;
      document.getElementById('yt-modal-heading').textContent = s.heading;
      document.getElementById('yt-modal-body').innerHTML = s.body;
      document.getElementById('yt-modal-btn').textContent = s.btn;
    }

    function openModal(e) { e.preventDefault(); updateModalText(); overlay.classList.add('open'); }
    function closeModal() { overlay.classList.remove('open'); }

    document.querySelectorAll('[data-cfg="youtube"]').forEach(function(el) {
      el.addEventListener('click', openModal);
    });
    overlay.querySelector('.yt-close').addEventListener('click', closeModal);
    overlay.querySelector('.yt-dismiss').addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { apply(); injectYouTubeModal(); });
  } else {
    apply(); injectYouTubeModal();
  }
})();
