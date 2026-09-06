/* ==========================================================
   RENDER — build repeating sections from content.js
   ========================================================== */
function renderContent() {
  if (typeof siteContent === "undefined") return;

  // Hero stats
  const statStrip = document.getElementById("statStrip");
  if (statStrip && siteContent.stats) {
    statStrip.innerHTML = siteContent.stats.map(stat => `
      <div class="stat${stat.target ? " stat-target" : ""}">
        <dt>${stat.value}</dt>
        <dd>${stat.label}</dd>
      </div>
    `).join("");
  }

  // Experience timeline
  const timeline = document.getElementById("timeline");
  if (timeline && siteContent.experience) {
    timeline.innerHTML = siteContent.experience.map(job => `
      <li class="timeline-item">
        <div class="timeline-date">
          <span class="date-range">${job.dateRange}</span>
        </div>
        <div class="timeline-body">
          <h3>${job.title}</h3>
          <p class="role-meta">${job.org}</p>
          <ul>
            ${job.bullets.map(b => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </li>
    `).join("");
  }

  // Skill cards
  const skillGrid = document.getElementById("skillGrid");
  if (skillGrid && siteContent.skills) {
    const variants = ["skill-card-a", "skill-card-b", "skill-card-c"];
    skillGrid.innerHTML = siteContent.skills.map((skill, i) => `
      <div class="skill-card ${variants[i % variants.length]}">
        <h3>${skill.title}</h3>
        <p>${skill.description}</p>
      </div>
    `).join("");
  }

  // Education / credentials
  const eduGrid = document.getElementById("eduGrid");
  if (eduGrid && siteContent.education) {
    eduGrid.innerHTML = siteContent.education.map(item => `
      <div class="edu-item">
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </div>
    `).join("");
  }

  // Contact cards
  const contactGrid = document.getElementById("contactGrid");
  if (contactGrid && siteContent.contact) {
    contactGrid.innerHTML = siteContent.contact.map(item => {
      const inner = `<span class="contact-label">${item.label}</span><span class="contact-value">${item.value}</span>`;
      if (item.href) {
        const externalAttrs = item.external ? ' target="_blank" rel="noopener"' : "";
        return `<a href="${item.href}" class="contact-card"${externalAttrs}>${inner}</a>`;
      }
      return `<div class="contact-card contact-card-static">${inner}</div>`;
    }).join("");
  }

  // Résumé file references (download link + viewer iframe source)
  if (siteContent.resume && siteContent.resume.file) {
    document.querySelectorAll('a[download]').forEach(a => { a.href = siteContent.resume.file; });
    const frame = document.getElementById("resumeFrame");
    if (frame) frame.dataset.src = siteContent.resume.file;
  }
}

renderContent();

/* ==========================================================
   MOBILE NAV
   ========================================================== */
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close mobile nav after tapping a link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ==========================================================
   THEME TOGGLE
   ========================================================== */
const themeToggle = document.getElementById('themeToggle');
if (themeToggle && typeof themeOrder !== 'undefined') {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || themeOrder[0];
    const nextIndex = (themeOrder.indexOf(current) + 1) % themeOrder.length;
    const next = themeOrder[nextIndex];
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
  });
}

/* ==========================================================
   RESUME VIEWER MODAL
   ========================================================== */
const resumeModal = document.getElementById('resumeModal');
const resumeFrame = document.getElementById('resumeFrame');
const viewResumeBtn = document.getElementById('viewResumeBtn');
const resumeModalClose = document.getElementById('resumeModalClose');
const resumeModalBackdrop = document.getElementById('resumeModalBackdrop');

function openResumeModal() {
  if (!resumeModal) return;
  if (resumeFrame && !resumeFrame.src && resumeFrame.dataset.src) {
    resumeFrame.src = resumeFrame.dataset.src;
  }
  resumeModal.hidden = false;
  document.body.style.overflow = 'hidden';
  resumeModalClose.focus();
}

function closeResumeModal() {
  if (!resumeModal) return;
  resumeModal.hidden = true;
  document.body.style.overflow = '';
  viewResumeBtn.focus();
}

if (viewResumeBtn) viewResumeBtn.addEventListener('click', openResumeModal);
if (resumeModalClose) resumeModalClose.addEventListener('click', closeResumeModal);
if (resumeModalBackdrop) resumeModalBackdrop.addEventListener('click', closeResumeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && resumeModal && !resumeModal.hidden) closeResumeModal();
});

/* ==========================================================
   SCROLL REVEAL — single consistent effect, no per-card stagger
   ========================================================== */
const revealTargets = document.querySelectorAll('.hero, .section');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

// Footer year
const footerYear = document.querySelector('.footer-year');
if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()}`;
}
