/**
 * IELTS Lite — JS: navbar, mobile menu, FAQ accordion, score ring animation
 */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initFaq();
  initScoreRing();
});

function initNavbar() {
  const nav = document.getElementById("navbar");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("navbar");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("menu-open");
    toggle.classList.toggle("active");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  nav.querySelectorAll(".nav-links a, .navbar .btn").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("menu-open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initFaq() {
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains("active");
      document
        .querySelectorAll(".faq-item")
        .forEach((i) => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });
}

function initScoreRing() {
  const rings = document.querySelectorAll(".ring-fill");
  if (!rings.length) return;
  rings.forEach((r) => {
    r.style.strokeDashoffset = String(2 * Math.PI * 52);
  });

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const ring = entry.target;
          const pct =
            parseFloat(
              getComputedStyle(ring).getPropertyValue("--pct").trim(),
            ) || 83;
          ring.style.strokeDashoffset = String(
            2 * Math.PI * 52 * (1 - pct / 100),
          );
          obs.unobserve(ring);
        }
      });
    },
    { threshold: 0.5 },
  );

  rings.forEach((r) => obs.observe(r));
}
