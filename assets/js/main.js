/* ============================================================
   APOORVA NANDIGAMA — PORTFOLIO JAVASCRIPT
   ============================================================ */

/* ── HEADER SCROLL ── */
(function () {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.style.borderBottomColor = window.scrollY > 20
      ? 'rgba(240,165,0,0.2)'
      : 'rgba(240,165,0,0.12)';
  }, { passive: true });
})();

/* ── MOBILE NAV ── */
(function () {
  const btn = document.querySelector('.hamburger');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ── SIGNAL WAVE CANVAS ── */
(function () {
  const canvas = document.getElementById('signal-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, raf;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  // Draw multiple signal traces — like oscilloscope channels
  const traces = [
    { amp: 60,  freq: 0.012, speed: 0.018, y: 0.35, color: 'rgba(240,165,0,',   thickness: 1.5 },
    { amp: 40,  freq: 0.020, speed: 0.024, y: 0.55, color: 'rgba(0,200,180,',   thickness: 1.0 },
    { amp: 25,  freq: 0.032, speed: 0.030, y: 0.70, color: 'rgba(240,165,0,',   thickness: 0.7 },
    { amp: 80,  freq: 0.008, speed: 0.012, y: 0.22, color: 'rgba(0,200,180,',   thickness: 0.5 },
  ];

  function draw() {
    ctx.clearRect(0, 0, W, H);
    traces.forEach(tr => {
      const baseY = H * tr.y;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const y = baseY + Math.sin(x * tr.freq + t * tr.speed) * tr.amp
                        + Math.sin(x * tr.freq * 2.3 + t * tr.speed * 1.5) * (tr.amp * 0.3);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = tr.color + '0.6)';
      ctx.lineWidth = tr.thickness;
      ctx.stroke();
    });
    t++;
    raf = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); }, { passive: true });
  resize();
  draw();

  // Pause when tab hidden (performance)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else draw();
  });
})();

/* ── SCROLL REVEAL ── */
(function () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ── COUNTER ANIMATION ── */
(function () {
  const counters = document.querySelectorAll('.count[data-target]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1600;
      let start = null;
      function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => obs.observe(el));
})();

/* ── SMOOTH SCROLL FALLBACK ── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
