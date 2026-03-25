// ===== TRANSLATIONS =====
const LANG = {
  tr: {
    'nav.about': 'Hakkımda', 'nav.skills': 'Yetenekler', 'nav.projects': 'Projeler', 'nav.contact': 'İletişim',
    'hero.greet': 'Merhaba, ben', 'hero.role': 'Yazılım Mühendisliği Öğrencisi',
    'hero.desc': 'Kod yazmayı ve yeni teknolojiler keşfetmeyi seven, HTML, CSS, JavaScript, Python ve C dilleriyle projeler geliştiren bir yazılım mühendisliği öğrencisiyim.',
    'hero.cta1': 'Projelerimi Gör', 'hero.cta2': 'İletişime Geç',
    'about.tag': 'Hakkımda', 'about.title': 'Ben Kimim?',
    'about.title2': ' Bir Geliştirici',
    'about.p1': 'Merhaba! Ben Ali Akyüz. Yazılım mühendisliği öğrencisi olarak web teknolojileri, algoritma tasarımı ve yazılımın insan hayatına dokunduğu her alana büyük ilgi duyuyorum.',
    'about.p2': 'Boş zamanlarımda yeni projeler geliştiriyor, open-source topluluklara katkı sağlamaya çalışıyor ve teknoloji alanındaki gelişmeleri yakından takip ediyorum.',
    'about.s1': 'Proje', 'about.s2': 'Teknoloji', 'about.s3': 'Yıl',
    'about.fn': 'ali_akyuz.json',
    'skills.tag': 'Yetenekler', 'skills.title': 'Kullandığım ', 'skills.title2': 'Teknolojiler',
    'skills.sub': 'Çeşitli projeler geliştirirken kullandığım programlama dilleri ve araçlar.',
    'skills.tools': '— Araçlar & Ortamlar —',
    'proj.tag': 'Projeler', 'proj.title': 'GitHub ', 'proj.title2': 'Projelerim',
    'proj.sub': 'GitHub üzerindeki açık kaynaklı çalışmalarım. Her proje bir öğrenme yolculuğunun ürünü.',
    'proj.gh': 'GitHub Profilim',
    'proj.loading': 'Yükleniyor...', 'proj.err': 'Projeler yüklenemedi.',
    'contact.tag': 'İletişim', 'contact.title': 'Bana ', 'contact.title2': 'Ulaşın',
    'contact.sub': 'Bir proje fikriniz mi var? Ya da sadece merhaba demek mi istiyorsunuz? Her zaman açığım!',
    'contact.lead': 'Aşağıdaki formu doldurun ya da sosyal medya hesaplarımdan ulaşın. En kısa sürede geri dönmeye çalışırım.',
    'contact.gh': 'GitHub', 'contact.ig': 'Instagram',
    'form.title': 'Mesaj Gönder',
    'form.name': 'Adınız', 'form.email': 'E-posta Adresiniz', 'form.msg': 'Mesajınız',
    'form.name.ph': 'Adınızı girin', 'form.email.ph': 'email@ornek.com', 'form.msg.ph': 'Mesajınızı buraya yazın...',
    'form.send': 'Mesaj Gönder', 'form.ok': '✅ Mesajınız gönderildi! Teşekkürler.',
    'foot.copy': '© 2025 Ali Akyüz. Tüm hakları saklıdır.',
  },
  en: {
    'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.contact': 'Contact',
    'hero.greet': "Hi, I'm", 'hero.role': 'Software Engineering Student',
    'hero.desc': 'A software engineering student passionate about coding and exploring new technologies, building projects with HTML, CSS, JavaScript, Python and C.',
    'hero.cta1': 'View Projects', 'hero.cta2': 'Get In Touch',
    'about.tag': 'About Me', 'about.title': "Who Am I?",
    'about.title2': ' A Developer',
    'about.p1': "Hi! I'm Ali Akyüz. As a software engineering student, I have a strong passion for web technologies, algorithm design, and every area where software touches human life.",
    'about.p2': "In my free time, I develop new projects, try to contribute to open-source communities, and closely follow developments in the technology world.",
    'about.s1': 'Projects', 'about.s2': 'Technologies', 'about.s3': 'Years',
    'about.fn': 'ali_akyuz.json',
    'skills.tag': 'Skills', 'skills.title': 'Technologies ', 'skills.title2': 'I Use',
    'skills.sub': 'Programming languages and tools I\'ve used while developing various projects.',
    'skills.tools': '— Tools & Environments —',
    'proj.tag': 'Projects', 'proj.title': 'My GitHub ', 'proj.title2': 'Projects',
    'proj.sub': 'My open-source work on GitHub. Each project is the result of a learning journey.',
    'proj.gh': 'View GitHub Profile',
    'proj.loading': 'Loading...', 'proj.err': 'Could not load projects.',
    'contact.tag': 'Contact', 'contact.title': 'Get In ', 'contact.title2': 'Touch',
    'contact.sub': 'Have a project idea? Or just want to say hi? I\'m always open to a conversation!',
    'contact.lead': 'Fill out the form below or reach me through my social media accounts. I\'ll get back to you as soon as possible.',
    'contact.gh': 'GitHub', 'contact.ig': 'Instagram',
    'form.title': 'Send a Message',
    'form.name': 'Your Name', 'form.email': 'Your Email', 'form.msg': 'Your Message',
    'form.name.ph': 'Enter your name', 'form.email.ph': 'email@example.com', 'form.msg.ph': 'Write your message here...',
    'form.send': 'Send Message', 'form.ok': '✅ Message sent! Thank you.',
    'foot.copy': '© 2025 Ali Akyüz. All rights reserved.',
  }
};

let currentLang = 'tr';

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (LANG[lang][key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = LANG[lang][key];
      else el.textContent = LANG[lang][key];
    }
  });
  // typing animation re-start
  startTyping(LANG[lang]['hero.role']);
  // lang button
  document.getElementById('langBtn').textContent = lang === 'tr' ? '🌐 EN' : '🌐 TR';
}

document.getElementById('langBtn').addEventListener('click', () => {
  applyLang(currentLang === 'tr' ? 'en' : 'tr');
});

// ===== TYPING ANIMATION =====
let typingTimer, deleting = false, charIdx = 0, currentText = '';
function startTyping(text) {
  clearTimeout(typingTimer); deleting = false; charIdx = 0;
  const el = document.getElementById('typing');
  el.textContent = '';
  currentText = text;
  typeStep();
}
function typeStep() {
  const el = document.getElementById('typing');
  if (!deleting) {
    el.textContent = currentText.slice(0, ++charIdx);
    if (charIdx < currentText.length) typingTimer = setTimeout(typeStep, 60);
  }
}

// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  let curr = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) curr = s.id; });
  document.querySelectorAll('.nav-links a, .mob-nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + curr);
  });
});

// ===== HAMBURGER =====
const burger = document.getElementById('burger');
const mobNav = document.getElementById('mobNav');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobNav.classList.toggle('open');
});
mobNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open'); mobNav.classList.remove('open');
}));

// ===== SCROLL REVEAL =====
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); revealObs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ===== SKILL BARS =====
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.getAttribute('data-pct') + '%';
      });
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
const skillsSection = document.getElementById('skills');
if (skillsSection) barObs.observe(skillsSection);

// ===== GITHUB PROJECTS =====
const langColors = {
  JavaScript: '#f1e05a', Python: '#3572A5', HTML: '#e34c26',
  CSS: '#563d7c', C: '#555555', TypeScript: '#2b7489', Shell: '#89e051',
  'Jupyter Notebook': '#DA5B0B', default: '#8892b0'
};
const projIcons = ['🚀', '⚡', '🎯', '🔥', '💡', '🛠️', '🌐', '📦', '🎨', '🔨', '🧩', '✨'];
const GITHUB_USER = 'ali-akyuz';

async function loadProjects() {
  const grid = document.getElementById('projGrid');
  // skeleton
  grid.innerHTML = Array(6).fill(`<div class="skel"><div class="skel-line" style="height:18px;width:60%;"></div><div class="skel-line" style="height:13px;width:90%;margin-top:8px;"></div><div class="skel-line" style="height:13px;width:75%;"></div><div class="skel-line" style="height:13px;width:40%;margin-top:14px;"></div></div>`).join('');
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });
    if (!res.ok) throw new Error('API error');
    const repos = await res.json();

    // Yalnızca GitHub'da "portfolio" etiketi (topic) olan projeleri filtrele
    const filtered = repos.filter(r => !r.fork && r.visibility === 'public' && r.topics && r.topics.includes('portfolio')).slice(0, 9);

    if (filtered.length === 0) { grid.innerHTML = `<p style="color:var(--t2);grid-column:1/-1;">${LANG[currentLang]['proj.err']}</p>`; return; }
    grid.innerHTML = filtered.map((r, i) => {
      const color = langColors[r.language] || langColors.default;
      const icon = projIcons[i % projIcons.length];
      const desc = r.description || (currentLang === 'tr' ? 'Açıklama bulunmuyor.' : 'No description available.');
      return `<div class="proj-card reveal">
        <div class="proj-top">
          <span class="proj-ico">${icon}</span>
          <div class="proj-links">
            <a href="${r.html_url}" target="_blank" class="plink" title="GitHub">
              <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            ${r.homepage ? `<a href="${r.homepage}" target="_blank" class="plink" title="Live Demo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill:none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>` : ''}
          </div>
        </div>
        <div class="proj-name">${r.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</div>
        <div class="proj-desc">${desc}</div>
        <div class="proj-foot">
          ${r.language ? `<span class="proj-lang"><span class="ldot" style="background:${color}"></span>${r.language}</span>` : ''}
          <span class="proj-stat"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>${r.stargazers_count}</span>
          <span class="proj-stat"><svg viewBox="0 0 24 24"><path d="M7 5C7 3.9 7.9 3 9 3s2 .9 2 2-.9 2-2 2-2-.9-2-2zm8 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM9 7c-2.2 0-4 1.8-4 4v1h4v3l3-3 3 3v-3h4v-1c0-2.2-1.8-4-4-4H9z"/></svg>${r.forks_count}</span>
        </div>
      </div>`;
    }).join('');
    // re-observe new cards
    document.querySelectorAll('.proj-card.reveal').forEach(el => revealObs.observe(el));
  } catch (err) {
    grid.innerHTML = `<p style="color:var(--t2);grid-column:1/-1;">${LANG[currentLang]['proj.err']}</p>`;
  }
}
loadProjects();

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const btn = this.querySelector('.fsub');
  const initialBtnText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<span>${currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...'}</span>`;

  // === DİKKAT: FORMSPREE KODUNUZU BURAYA GİRİN ===
  // Formspree'den aldığınız 7 harfli/rakamlı endpoint kodunu 'YOUR_FORMSPREE_ID' yerine yazın (Örn: 'mdoqzzab')
  const formspreeId = 'mojpaydv'; 

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      body: new FormData(this),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      this.style.display = 'none';
      document.getElementById('formOk').style.display = 'block';
    } else {
      throw new Error('Gönderim hatası');
    }
  } catch (err) {
    btn.disabled = false;
    btn.innerHTML = `<span>${currentLang === 'tr' ? 'Hata! Tekrar Dene' : 'Error! Try Again'}</span>`;
    alert(currentLang === 'tr' ? 'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan e-posta atın.' : 'Could not send message. Please try again later or email directly.');
  }
});

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  startTyping(LANG[currentLang]['hero.role']);
});
