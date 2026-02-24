/* ============================================
   CV Engine — Data-driven bilingual renderer
   ============================================ */

// --- Icon Registry ---
const ICONS = {
  mapPin:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  globe:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  link:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  linkedin:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  github:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  terminal:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>',
  cart:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  cloud:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
  cpu:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/><circle cx="12" cy="12" r="3"/></svg>',
  layout:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
  code:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  user:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  briefcase:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  layers:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7.5 12 2l10 5.5"/><path d="m2 12 10 5.5L22 12"/><path d="m2 16.5 10 5.5 10-5.5"/></svg>',
  gradCap:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 0 3 3 6 3s6-3 6-3v-5"/></svg>',
};

function icon(name, cls) {
  var svg = ICONS[name];
  if (!svg) return '';
  return svg.replace('<svg', '<svg class="' + (cls || 'icon') + '"');
}

// --- Translate helper ---
function t(val, lang) {
  if (val == null) return '';
  if (typeof val === 'string') return val;
  return val[lang] || val.en || '';
}

// --- CV Data ---
var DATA = {
  meta: {
    name: 'Nicolás Fitzgerald Muñoz',
    title: { en: 'University Lecturer · Data Science & Mathematics', es: 'Docente Universitario · Ciencia de Datos y Matemáticas' },
    photo: ''
  },

  contact: [
    { icon: 'mapPin', label: { en: 'Location', es: 'Ubicación' }, value: { en: 'Chile & Colombia', es: 'Chile y Colombia' } },
    { icon: 'phone',  label: { en: 'Phone', es: 'Teléfono' },    value: { en: 'Available upon request', es: 'Disponible a solicitud' } },
    { icon: 'mail',   label: 'Email', value: { en: 'Available upon request', es: 'Disponible a solicitud' } }
  ],

  links: [],

  skills: [
    { icon: 'terminal', title: { en: 'Programming', es: 'Programación' }, tags: ['Python', 'R'] },
    { icon: 'cpu',      title: { en: 'Data Science', es: 'Ciencia de Datos' }, tags: ['Modelado estadístico', 'Análisis de datos', 'Aprendizaje automático', 'Visualización'] },
    { icon: 'layers',   title: { en: 'Mathematics', es: 'Matemáticas' }, tags: ['Álgebra lineal', 'Cálculo', 'Probabilidad', 'Optimización'] },
    { icon: 'cloud',    title: { en: 'Research & Teaching', es: 'Investigación & Docencia' }, tags: ['Diseño de cursos', 'Evaluación', 'Proyectos académicos'] }
  ],

  languages: [
    { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
    { name: { en: 'English', es: 'Inglés' },  level: { en: 'C1', es: 'C1' } }
  ],

  profile: {
    en: '<strong>University lecturer</strong> with a master’s degree and a <strong>PhD in progress</strong>, focused on <strong>data science and mathematics</strong>. I design and teach courses grounded in rigorous quantitative foundations, bridging theory with applied analysis using <strong>Python and R</strong>. Experienced in academic collaboration across universities in Chile and Colombia, with a commitment to clear communication, reproducible analysis, and student-centered learning.',
    es: '<strong>Docente universitario</strong> con magíster y <strong>doctorado en curso</strong>, enfocado en <strong>ciencia de datos y matemáticas</strong>. Diseño e imparto cursos con fundamentos cuantitativos rigurosos, conectando teoría y análisis aplicado con <strong>Python y R</strong>. Experiencia académica en universidades de Chile y Colombia, con énfasis en comunicación clara, análisis reproducible y aprendizaje centrado en el estudiante.'
  },

  technicalHighlights: [
    'Python',
    'R',
    'Ciencia de datos aplicada',
    'Modelado estadístico',
    'Matemáticas aplicadas',
    'Análisis reproducible'
  ],

  experience: [
    {
      title: { en: 'University Lecturer', es: 'Docente Universitario' },
      company: { en: 'Universities in Chile and Colombia', es: 'Universidades en Chile y Colombia' },
      companyDesc: { en: 'Teaching and academic collaboration', es: 'Docencia y colaboración académica' },
      date: { en: 'Present', es: 'Actualidad' },
      current: true,
      bullets: [
        { en: 'Design and delivery of courses in mathematics, statistics, and data science', es: 'Diseño e impartición de cursos de matemáticas, estadística y ciencia de datos' },
        { en: 'Integration of Python and R workflows for practical labs and assessments', es: 'Integración de flujos de trabajo en Python y R para laboratorios y evaluaciones' },
        { en: 'Advising student projects and research-oriented coursework', es: 'Acompañamiento de proyectos estudiantiles y actividades con foco investigativo' }
      ]
    },
    {
      title: { en: 'Applied Data Science Projects', es: 'Proyectos de Ciencia de Datos Aplicada' },
      company: { en: 'Academic and interdisciplinary initiatives', es: 'Iniciativas académicas e interdisciplinarias' },
      companyDesc: { en: 'Research and quantitative analysis', es: 'Investigación y análisis cuantitativo' },
      date: { en: 'Ongoing', es: 'En curso' },
      bullets: [
        { en: 'Statistical modeling and exploratory analysis for academic datasets', es: 'Modelado estadístico y análisis exploratorio en datos académicos' },
        { en: 'Reproducible reporting and methodological documentation', es: 'Reportes reproducibles y documentación metodológica' },
        { en: 'Collaboration with research teams on data-driven insights', es: 'Colaboración con equipos de investigación para generar hallazgos basados en datos' }
      ]
    }
  ],

  projects: [],

  education: [
    { title: { en: 'PhD (in progress) — Mathematics / Data Science', es: 'Doctorado en curso — Matemáticas / Ciencia de Datos' }, institution: { en: 'University (to be confirmed)', es: 'Universidad (por confirmar)' }, date: { en: 'In progress', es: 'En curso' } },
    { title: { en: 'Master’s Degree — Quantitative Focus', es: 'Magíster — Enfoque Cuantitativo' }, institution: { en: 'University (to be confirmed)', es: 'Universidad (por confirmar)' }, date: { en: 'Completed', es: 'Finalizado' } }
  ],

  interests: [
    { en: 'Applied research in data science and mathematical modeling', es: 'Investigación aplicada en ciencia de datos y modelamiento matemático' },
    { en: 'Teaching innovation and curriculum design', es: 'Innovación docente y diseño curricular' },
    { en: 'Ethics, reproducibility, and open science', es: 'Ética, reproducibilidad y ciencia abierta' }
  ],

  availability: {
    en: 'Available for university teaching, research collaboration, and data science consulting. Open to hybrid or remote work in Chile or Colombia.',
    es: 'Disponible para docencia universitaria, colaboración en investigación y consultoría en ciencia de datos. Abierto a modalidad híbrida o remota en Chile o Colombia.'
  },

  footer: { en: 'Updated — February 2026', es: 'Actualizado — Febrero 2026' }
};

// --- Render Components ---

function renderClients(clients, lang) {
  if (!clients) return '';

  if (clients.type === 'links') {
    return '<div class="exp-clients">' +
      '<div class="exp-clients-label">' + t(clients.label, lang) + '</div>' +
      '<div class="client-links">' +
        clients.items.map(function(c) {
          return '<a href="' + c.url + '" class="client-link" target="_blank">' + c.name + '</a>';
        }).join('') +
      '</div></div>';
  }

  var colStyle = clients.singleCol ? ' style="grid-template-columns:1fr"' : '';
  return '<div class="client-showcase">' +
    '<div class="client-showcase-label">' + t(clients.label, lang) + '</div>' +
    '<div class="client-grid"' + colStyle + '>' +
      clients.items.map(function(c) {
        var logoStyle = c.logoStyle ? ' style="' + c.logoStyle + '"' : '';
        return '<a href="' + c.url + '" class="client-card" target="_blank">' +
          '<img src="' + c.logo + '" alt="' + c.name + '" class="client-card-logo"' + logoStyle + '>' +
          '<div class="client-card-info">' +
            '<span class="client-card-name">' + c.name + '</span>' +
            '<span class="client-card-meta">' + t(c.meta, lang) + '</span>' +
          '</div></a>';
      }).join('') +
    '</div></div>';
}

function renderSidebar(lang) {
  var sectionLabels = {
    contact:  { en: 'Contact', es: 'Contacto' },
    links:    'Links',
    skills:   { en: 'Technical Skills', es: 'Competencias Técnicas' },
    languages: { en: 'Languages', es: 'Idiomas' }
  };

  function initialsFromName(name) {
    if (!name) return '';
    return name
      .split(' ')
      .filter(function(part) { return part.length > 0; })
      .map(function(part) { return part.charAt(0).toUpperCase(); })
      .slice(0, 3)
      .join('');
  }

  var photoMarkup = DATA.meta.photo
    ? '<img src="' + DATA.meta.photo + '" alt="' + DATA.meta.name + '">'
    : initialsFromName(DATA.meta.name);

  return '<div class="lang-toggle">' +
    '<button class="lang-btn' + (lang === 'en' ? ' active' : '') + '" data-lang-btn="en">EN</button>' +
    '<button class="lang-btn' + (lang === 'es' ? ' active' : '') + '" data-lang-btn="es">ES</button>' +
    '</div>' +

    '<div class="photo-container"><div class="photo">' +
    photoMarkup +
    '</div></div>' +

    '<div class="sidebar-section">' +
      '<div class="sidebar-title">' + icon('phone', 'icon') + ' ' + t(sectionLabels.contact, lang) + '</div>' +
      DATA.contact.map(function(c) {
        var valText = t(c.value, lang);
        var val = c.href ? '<a href="' + c.href + '">' + valText + '</a>' : valText;
        return '<div class="contact-item">' +
          icon(c.icon, 'icon-sm contact-icon') +
          '<div class="contact-text"><span class="contact-label">' + t(c.label, lang) + '</span>' + val + '</div>' +
        '</div>';
      }).join('') +
    '</div>' +

    (DATA.links && DATA.links.length
      ? '<div class="sidebar-section">' +
          '<div class="sidebar-title">' + icon('link', 'icon') + ' ' + t(sectionLabels.links, lang) + '</div>' +
          DATA.links.map(function(l) {
            return '<a href="' + l.href + '" class="link-item" target="_blank">' +
              icon(l.icon, 'icon-sm link-icon') +
              '<span><span class="link-label">' + l.label + '</span> \u2014 ' + l.display + '</span>' +
            '</a>';
          }).join('') +
        '</div>'
      : '') +

    '<div class="sidebar-section">' +
      '<div class="sidebar-title">' + icon('code', 'icon') + ' ' + t(sectionLabels.skills, lang) + '</div>' +
      DATA.skills.map(function(s) {
        return '<div class="skill-group">' +
          '<div class="skill-group-title">' + icon(s.icon, 'icon-sm skill-group-icon') + ' ' + t(s.title, lang) + '</div>' +
          '<div class="skill-tags">' + s.tags.map(function(tag) { return '<span class="skill-tag">' + tag + '</span>'; }).join('') + '</div>' +
        '</div>';
      }).join('') +
    '</div>' +

    '<div class="sidebar-section">' +
      '<div class="sidebar-title">' + icon('globe', 'icon') + ' ' + t(sectionLabels.languages, lang) + '</div>' +
      DATA.languages.map(function(l) {
        return '<div class="language-item"><span class="language-name">' + t(l.name, lang) + '</span> <span class="language-level">\u2014 ' + t(l.level, lang) + '</span></div>';
      }).join('') +
    '</div>';
}

function renderMain(lang) {
  return '<header class="cv-header">' +
      '<h1 class="cv-name">' + DATA.meta.name + '</h1>' +
      '<p class="cv-title">' + t(DATA.meta.title, lang) + '</p>' +
    '</header>' +

    '<section class="section reveal">' +
      '<h2 class="section-title">' + icon('user', 'icon-section') + ' ' + t({ en: 'Professional Profile', es: 'Perfil Profesional' }, lang) + '</h2>' +
      '<p class="profile-text">' + t(DATA.profile, lang) + '</p>' +
    '</section>' +

    (DATA.technicalHighlights && DATA.technicalHighlights.length
      ? '<section class="section reveal">' +
          '<h2 class="section-title">' + icon('code', 'icon-section') + ' ' + t({ en: 'Technical Skills', es: 'Habilidades Técnicas' }, lang) + '</h2>' +
          '<div class="skill-tags">' + DATA.technicalHighlights.map(function(tag) { return '<span class="skill-tag">' + tag + '</span>'; }).join('') + '</div>' +
        '</section>'
      : '') +

    '<section class="section">' +
      '<h2 class="section-title">' + icon('briefcase', 'icon-section') + ' ' + t({ en: 'Professional Experience', es: 'Experiencia Profesional' }, lang) + '</h2>' +
      '<div class="experience-list">' +
        DATA.experience.map(function(exp) {
          return '<div class="experience-item' + (exp.current ? ' current' : '') + ' reveal">' +
            '<div class="exp-title">' + t(exp.title, lang) + '</div>' +
            '<div class="exp-company">' + t(exp.company, lang) + '</div>' +
            '<div class="exp-company-desc">' + t(exp.companyDesc, lang) + '</div>' +
            '<div class="exp-date">' + t(exp.date, lang) + '</div>' +
            '<div class="exp-description"><ul>' +
              exp.bullets.map(function(b) { return '<li>' + t(b, lang) + '</li>'; }).join('') +
            '</ul>' + renderClients(exp.clients, lang) + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</section>' +

    (DATA.projects && DATA.projects.length
      ? '<section class="section reveal">' +
          '<h2 class="section-title">' + icon('layers', 'icon-section') + ' ' + t({ en: 'Featured Projects', es: 'Proyectos Destacados' }, lang) + '</h2>' +
          '<div class="projects-grid">' +
            DATA.projects.map(function(p) {
              return '<div class="project-card">' +
                '<div class="project-name">' + p.name + '</div>' +
                '<div class="project-role">' + p.role + '</div>' +
                '<div class="project-stack">' + p.stack + '</div>' +
                '<div class="project-desc">' + t(p.desc, lang) + '</div>' +
              '</div>';
            }).join('') +
          '</div>' +
        '</section>'
      : '') +

    '<section class="section reveal">' +
      '<h2 class="section-title">' + icon('gradCap', 'icon-section') + ' ' + t({ en: 'Education & Professional Development', es: 'Formación & Desarrollo Profesional' }, lang) + '</h2>' +
      DATA.education.map(function(e) {
        return '<div class="education-item">' +
          '<div class="edu-title">' + t(e.title, lang) + '</div>' +
          '<div class="edu-institution">' + t(e.institution, lang) + '</div>' +
          '<div class="edu-date">' + t(e.date, lang) + '</div>' +
          (e.details ? '<div class="edu-details">' + t(e.details, lang) + '</div>' : '') +
        '</div>';
      }).join('') +
    '</section>' +

    (DATA.interests && DATA.interests.length
      ? '<section class="section reveal">' +
          '<h2 class="section-title">' + icon('layers', 'icon-section') + ' ' + t({ en: 'Interests', es: 'Intereses' }, lang) + '</h2>' +
          '<div class="exp-description"><ul>' +
            DATA.interests.map(function(item) { return '<li>' + t(item, lang) + '</li>'; }).join('') +
          '</ul></div>' +
        '</section>'
      : '') +

    (DATA.availability
      ? '<section class="section reveal">' +
          '<h2 class="section-title">' + icon('user', 'icon-section') + ' ' + t({ en: 'Availability', es: 'Disponibilidad' }, lang) + '</h2>' +
          '<p class="profile-text">' + t(DATA.availability, lang) + '</p>' +
        '</section>'
      : '') +

    '<div class="cv-footer">' + t(DATA.footer, lang) + '</div>';
}

// --- Engine ---

var currentLang = 'es';

function render(lang) {
  var cv = document.getElementById('cv');
  cv.innerHTML =
    '<aside class="sidebar">' + renderSidebar(lang) + '</aside>' +
    '<main class="main-content">' + renderMain(lang) + '</main>';

  if ('IntersectionObserver' in window && window.innerWidth < 768) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    cv.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
  } else {
    cv.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('revealed'); });
  }
}

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('cv-lang', lang);
  render(lang);
  // active class is baked into the render via renderSidebar
}

// --- Init ---
(function() {
  // Event delegation: toggle lives inside #cv (re-rendered each time)
  document.getElementById('cv').addEventListener('click', function(e) {
    var btn = e.target.closest('[data-lang-btn]');
    if (btn) setLang(btn.dataset.langBtn);
  });

  document.getElementById('printBtn').addEventListener('click', function() {
    window.print();
  });

  var saved = localStorage.getItem('cv-lang') || 'en';
  setLang(saved);
})();
