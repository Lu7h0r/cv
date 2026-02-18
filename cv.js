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
    name: 'Alex Bautista',
    title: 'Solutions Architect & Technical Lead',
    photo: 'alex.png'
  },

  contact: [
    { icon: 'mapPin', label: { en: 'Location', es: 'Ubicación' }, value: 'Bogotá, Colombia' },
    { icon: 'phone',  label: { en: 'Phone', es: 'Teléfono' },    value: '(+57) 350 453 21 56' },
    { icon: 'mail',   label: 'Email', value: 'lex.magno@gmail.com', href: 'mailto:lex.magno@gmail.com' }
  ],

  links: [
    { icon: 'globe',    label: 'Portfolio', display: 'abautixta.com',   href: 'https://abautixta.com' },
    { icon: 'linkedin', label: 'LinkedIn',  display: '/in/abautixta',   href: 'https://linkedin.com/in/abautixta' },
    { icon: 'github',   label: 'GitHub',    display: 'Lu7h0r',          href: 'https://github.com/Lu7h0r' }
  ],

  skills: [
    { icon: 'terminal', title: 'JavaScript Ecosystem', tags: ['TypeScript', 'Node.js', 'NestJS', 'React', 'Next.js', 'Angular', 'Vue.js', 'Astro', 'Express'] },
    { icon: 'cart',     title: 'E-commerce & PHP',     tags: ['Magento 2', 'Adobe Commerce', 'Bagisto', 'Laravel', 'WordPress', 'WooCommerce'] },
    { icon: 'cloud',    title: 'Cloud, Data & DevOps', tags: ['MongoDB', 'MySQL', 'Supabase', 'PostgreSQL', 'Docker', 'AWS', 'Vercel', 'Git'] },
    { icon: 'cpu',      title: { en: 'AI & Automation', es: 'IA & Automatización' }, tags: ['n8n', 'AI APIs', 'Python', 'Web Scraping'] },
    { icon: 'layout',   title: 'Frontend & UI',        tags: ['TailwindCSS', 'React Native', 'SASS', 'Responsive'] }
  ],

  languages: [
    { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
    { name: { en: 'English', es: 'Inglés' },  level: { en: 'Intermediate', es: 'Intermedio' } }
  ],

  profile: {
    en: '<strong>JavaScript-Native Solutions Architect</strong> with 10+ years of experience in web engineering. I design resilient ecosystems that bridge <strong>legacy systems with modern cloud architectures</strong>. Specialist in enterprise e-commerce platforms (Magento\u00a02 / Adobe Commerce, Bagisto), <strong>SaaS</strong> product development (Node.js/NestJS/MongoDB), and complex data migration orchestration. Pragmatic approach: clean code, scalable architectures, and continuous value delivery. <strong>Active advocate for AI as an engineering accelerator</strong> \u2014 I integrate AI tools at every stage of the development lifecycle to multiply productivity and quality.',
    es: '<strong>Arquitecto de Soluciones JavaScript-Native</strong> con más de 10 años de experiencia en ingeniería web. Diseño ecosistemas resilientes que conectan <strong>sistemas legacy con arquitecturas cloud modernas</strong>. Especialista en plataformas e-commerce enterprise (Magento\u00a02 / Adobe Commerce, Bagisto), desarrollo de productos <strong>SaaS</strong> (Node.js/NestJS/MongoDB) y orquestación de migraciones de datos complejas. Enfoque pragmático: código limpio, arquitecturas escalables y entrega continua de valor. <strong>Impulsor activo de IA como acelerador de ingeniería</strong> \u2014 integro herramientas de inteligencia artificial en cada fase del ciclo de desarrollo para multiplicar productividad y calidad.'
  },

  experience: [
    {
      title: 'Solutions Architect & Technical Lead',
      company: 'Devir Americas \u2014 Colombia',
      companyDesc: { en: 'International board game & entertainment publisher \u2014 Presence in 20+ countries', es: 'Editorial internacional de juegos de mesa y entretenimiento \u2014 Presencia en +20 países' },
      date: { en: '2024 \u2014 Present', es: '2024 \u2014 Presente' },
      current: true,
      bullets: [
        { en: 'Technology transformation bridging the gap between legacy systems and modern cloud architectures', es: 'Transformación tecnológica cerrando la brecha entre sistemas Legacy y arquitecturas modernas en la nube' },
        { en: 'SaaS Architecture: designed \u00abOrganized Play\u00bb, a global tournament management platform with Node.js, MongoDB, and RBAC access control', es: 'Arquitectura SaaS: diseñé \u00abOrganized Play\u00bb, plataforma de gestión de torneos con Node.js, MongoDB y control de acceso RBAC' },
        { en: 'Data Engineering: migration of 14,000+ SKUs through custom Python/Node.js pipelines from API-less legacy systems', es: 'Ingeniería de Datos: migración de +14,000 SKUs mediante pipelines personalizados con Python y Node.js desde sistemas sin API' },
        { en: 'B2B E-commerce: complex business rules in WooCommerce for wholesale pricing, real-time inventory, and regional restrictions', es: 'B2B E-commerce: implementación de reglas complejas en WooCommerce para precios mayoristas, stock en tiempo real y restricciones regionales' }
      ],
      clients: {
        type: 'showcase',
        label: { en: 'Platforms developed', es: 'Plataformas desarrolladas' },
        items: [
          { name: 'Devir Americas',    meta: { en: 'B2B E-commerce \u00b7 WooCommerce', es: 'E-commerce B2B \u00b7 WooCommerce' }, url: 'https://www.deviramericas.com', logo: 'devir_logo2.png', logoStyle: 'background:#1a2744;padding:4px;border-radius:6px' },
          { name: 'Devir Portal',      meta: { en: 'Product Catalog \u00b7 Public', es: 'Catálogo de Productos \u00b7 Público' }, url: 'https://www.devirportal.com', logo: 'portal.png', logoStyle: 'background:#1a2744;padding:2px;border-radius:6px' },
          { name: 'Hub Devir',         meta: { en: 'Internal \u00b7 SaaS Platform', es: 'Interno \u00b7 Plataforma SaaS' }, url: 'https://hub.deviramericas.dev', logo: 'devir_logo2.png', logoStyle: 'background:#1a2744;padding:4px;border-radius:6px' }
        ]
      }
    },
    {
      title: 'Solutions Architect & Full-Stack Developer',
      company: 'uTravel \u2014 Remote',
      companyDesc: { en: 'E-commerce platform specialized in eSIM aggregation and sales for travelers', es: 'Plataforma e-commerce especializada en agregación y venta de eSIMs para viajeros' },
      date: { en: 'October 2025 \u2014 Present', es: 'Octubre 2025 \u2014 Presente' },
      current: true,
      bullets: [
        { en: 'Architecture and implementation of e-commerce platform on Laravel 11 + Bagisto, specialized in multi-provider eSIM aggregation and retail for international travelers', es: 'Arquitectura e implementación de plataforma e-commerce sobre Laravel 11 + Bagisto, especializada en agregación y venta de eSIMs de múltiples proveedores para viajeros internacionales' },
        { en: 'Multi-provider aggregation system design with centralized orchestration, integrating APIs with heterogeneous auth schemes: OAuth 2.0 Client Credentials, AES-128-CBC + MD5 Signature, and OAuth Password Grant', es: 'Diseño de sistema de agregación multi-proveedor con orquestación centralizada, integrando APIs con esquemas de autenticación heterogéneos: OAuth 2.0 Client Credentials, AES-128-CBC + MD5 Signature y OAuth Password Grant' },
        { en: 'Pricing engine with multilevel markup (Global \u2192 Provider \u2192 Individual plan), plan whitelist, and CSV import/export management via admin panel', es: 'Motor de pricing con markup multinivel (Global \u2192 Proveedor \u2192 Plan individual), whitelist de planes y gestión vía import/export CSV desde panel admin' },
        { en: 'Full purchase flow: plan configurator with country/region filters, marked-up cart, payment gateway checkout, automatic eSIM activation, and QR delivery by email', es: 'Flujo completo de compra: configurador de planes con filtros por país/región, carrito con precios marcados, checkout con pasarela de pago, activación automática de eSIM y entrega de QR por email' },
        { en: '<strong>Stack:</strong> PHP 8.2+, Laravel 11, Bagisto, Vue.js 3, Vite, MySQL 8, Redis, Elasticsearch, Pest PHP', es: '<strong>Stack:</strong> PHP 8.2+, Laravel 11, Bagisto, Vue.js 3, Vite, MySQL 8, Redis, Elasticsearch, Pest PHP' }
      ]
    },
    {
      title: 'Magento Frontend Developer',
      company: 'Infracommerce Latam (ex Summa Solutions) \u2014 Argentina',
      companyDesc: { en: 'Largest full-service e-commerce operator in Latin America \u2014 Public company (B3: IFCM3)', es: 'Mayor operador de e-commerce full-service de Latinoamérica \u2014 Empresa pública (B3: IFCM3)' },
      date: { en: 'April 2021 \u2014 April 2024 \u00b7 3 years', es: 'Abril 2021 \u2014 Abril 2024 \u00b7 3 años' },
      bullets: [
        { en: 'Enterprise e-commerce frontend development for leading LATAM brands on Magento 2 / Adobe Commerce', es: 'Desarrollo frontend de proyectos e-commerce enterprise para marcas líderes de LATAM sobre Magento 2 / Adobe Commerce' },
        { en: 'UI component architecture for high-conversion sections: checkout, my account, and purchase flows', es: 'Arquitectura de componentes UI para secciones críticas de conversión: checkout, mi cuenta y flujos de compra' },
        { en: 'Collaboration with distributed teams across multi-country operations (Argentina, Chile, Peru, Mexico, Colombia)', es: 'Colaboración con equipos distribuidos en operaciones multipaís (Argentina, Chile, Perú, México, Colombia)' }
      ],
      clients: {
        type: 'showcase',
        label: { en: 'Enterprise client portfolio', es: 'Portafolio de clientes enterprise' },
        items: [
          { name: 'Ricoh',       meta: 'LATAM \u00b7 B2B',       url: 'https://tienda.ricoh-americalatina.com', logo: 'https://tienda.ricoh-americalatina.com/media/wysiwyg/Subtraction_1_2.png' },
          { name: 'Cetrogar',    meta: 'Argentina \u00b7 Retail', url: 'https://www.cetrogar.com.ar',   logo: 'https://www.cetrogar.com.ar/media/favicon/default/favicon.ico' },
          { name: 'GILSA',       meta: { en: 'Mexico \u00b7 Construction', es: 'México \u00b7 Construcción' }, url: 'https://www.gilsa.com', logo: 'https://www.gilsa.com/static/version1770417013/frontend/Gilsa/mexico/es_MX/Magento_Theme/apple-icon-180x180.png' },
          { name: 'Colun',       meta: { en: 'Chile \u00b7 Industry', es: 'Chile \u00b7 Industria' }, url: 'https://www.colun.cl', logo: 'https://www.colun.cl/admin/archivos/imagenes/marcas/moj6FdRfieC6U75TwPJq.png' },
          { name: 'Tiendas EFE', meta: { en: 'Peru \u00b7 Retail', es: 'Perú \u00b7 Retail' }, url: 'https://www.efe.com.pe', logo: 'https://www.efe.com.pe/static/version1770030752/frontend/Grupoefe/default/es_PE/images/logo-efe-160.png' },
          { name: 'La Curacao',  meta: { en: 'Peru \u00b7 Retail', es: 'Perú \u00b7 Retail' }, url: 'https://www.lacuracao.pe', logo: 'https://www.lacuracao.pe/static/version1770030752/frontend/Grupoefe/lco/es_PE/images/logo.svg' },
          { name: 'Rosen',       meta: { en: 'Chile \u00b7 Home', es: 'Chile \u00b7 Hogar' }, url: 'https://www.rosen.cl', logo: 'https://www.rosen.cl/media/logo/stores/1/logo-rosen.webp' },
          { name: 'Isadora',     meta: { en: 'LATAM \u00b7 Fashion', es: 'LATAM \u00b7 Moda' }, url: 'https://ar.isadoraonline.com', logo: 'https://ar-isadora.bluestargroup-cdn.com/media/favicon/stores/2/Logo-ISADORA-icono.png' },
          { name: 'TodoModa',    meta: { en: 'LATAM \u00b7 800+ stores', es: 'LATAM \u00b7 800+ tiendas' }, url: 'https://www.todomoda.com', logo: 'https://www.todomoda.com/selector/images/todomoda.svg' },
          { name: 'BSG Global',  meta: { en: '10+ countries \u00b7 Corp', es: '10+ países \u00b7 Corp' }, url: 'https://bsg.global', logo: 'https://bsg.global/assets/logos/logo_desktop.png' },
          { name: 'Ceven',       meta: 'Argentina \u00b7 Tech', url: 'https://www.ceven.com', logo: 'https://qa.ceven.com/Assets/LOGO-CEVEN.png' }
        ]
      }
    },
    {
      title: 'Magento Frontend Developer',
      company: 'Xpectrum Technologies \u2014 Colombia',
      companyDesc: { en: 'Consulting firm specialized in Adobe Commerce / Magento solutions', es: 'Consultora especializada en soluciones Adobe Commerce / Magento' },
      date: { en: 'November 2020 \u2014 March 2021', es: 'Noviembre 2020 \u2014 Marzo 2021' },
      bullets: [
        { en: 'Frontend interface development for Magento 2 Cloud (Adobe Commerce) projects', es: 'Desarrollo de interfaces frontend para proyectos en Magento 2 Cloud (Adobe Commerce)' },
        { en: 'E-commerce feature implementation following platform standards', es: 'Implementación de funcionalidades e-commerce siguiendo estándares de la plataforma' }
      ],
      clients: {
        type: 'showcase', singleCol: true,
        label: { en: 'Grupo EFE \u2014 Enterprise client', es: 'Grupo EFE \u2014 Cliente enterprise' },
        items: [
          { name: 'Tiendas EFE', meta: { en: 'Peru \u00b7 Retail \u00b7 Grupo EFE', es: 'Perú \u00b7 Retail \u00b7 Grupo EFE' }, url: 'https://www.efe.com.pe', logo: 'https://www.efe.com.pe/static/version1770030752/frontend/Grupoefe/default/es_PE/images/logo-efe-160.png' }
        ]
      }
    },
    {
      title: { en: 'Frontend Developer', es: 'Desarrollador Frontend' },
      company: 'Controles Empresariales \u2014 Bogotá, Colombia',
      companyDesc: { en: 'Enterprise technology solutions leader \u2014 Microsoft, Cisco, HP, Adobe & Red Hat Partner', es: 'Líder en soluciones tecnológicas empresariales \u2014 Partner de Microsoft, Cisco, HP, Adobe y Red Hat' },
      date: { en: 'March 2019 \u2014 July 2020', es: 'Marzo 2019 \u2014 Julio 2020' },
      bullets: [
        { en: 'Frontend development for e-commerce solutions with Magento 2 integrations and internal applications', es: 'Desarrollo frontend para soluciones de comercio electrónico con integraciones Magento\u00a02 y aplicaciones internas' },
        { en: 'Integrations with SARLAFT systems (anti-money laundering) and digital signatures via eSignAnywhere', es: 'Integraciones con sistemas SARLAFT (prevención de lavado de activos) y firma digital con eSignAnywhere' },
        { en: 'Internal tooling built with Angular, Node.js, and Python', es: 'Construcción de herramientas internas con Angular, Node.js y Python' }
      ],
      clients: {
        type: 'showcase', singleCol: true,
        label: { en: 'Platform', es: 'Plataforma' },
        items: [{ name: 'Controles Empresariales', meta: { en: 'Colombia \u00b7 Enterprise Tech', es: 'Colombia \u00b7 Tech Empresarial' }, url: 'https://www.controlesempresariales.com', logo: 'logo_coem.png' }]
      }
    },
    {
      title: { en: 'Angular Developer \u2014 Financial Sector', es: 'Desarrollador Angular \u2014 Sector Financiero' },
      company: 'Premier Credit \u2014 Bogotá, Colombia',
      companyDesc: { en: 'Financial services and consumer credit company', es: 'Empresa de servicios financieros y crédito al consumo' },
      date: { en: 'December 2019 \u2014 February 2020', es: 'Diciembre 2019 \u2014 Febrero 2020' },
      bullets: [
        { en: 'Angular frontend application development for financial services platforms', es: 'Desarrollo de aplicaciones frontend en Angular para plataformas de servicios financieros' },
        { en: 'Complex business logic implementation with UX-focused approach', es: 'Implementación de lógica de negocio compleja con enfoque en UX' }
      ],
      clients: {
        type: 'showcase', singleCol: true,
        label: { en: 'Project', es: 'Proyecto' },
        items: [{ name: 'Banco Santander', meta: { en: 'Colombia \u00b7 Banking \u00b7 Fortune 500', es: 'Colombia \u00b7 Banca \u00b7 Fortune 500' }, url: 'https://www.santander.com', logo: 'https://companieslogo.com/img/orig/SAN-8a4d0f73.png?t=1720244493' }]
      }
    },
    {
      title: { en: 'Technical SEO Consultant', es: 'Consultor SEO Técnico' },
      company: 'Experian \u2014 Bogotá, Colombia',
      companyDesc: { en: 'Multinational \u2014 Global credit bureau, Fortune 500 (LSE: EXPN)', es: 'Multinacional \u2014 Bureau de crédito global, Fortune 500 (LSE: EXPN)' },
      date: { en: 'August 2019 \u2014 November 2019', es: 'Agosto 2019 \u2014 Noviembre 2019' },
      bullets: [
        { en: 'Technical SEO audit and optimization for Angular applications', es: 'Auditoría y optimización SEO técnico para aplicaciones Angular' },
        { en: 'Performance improvement and search engine ranking optimization', es: 'Mejora de rendimiento y posicionamiento en motores de búsqueda' }
      ],
      clients: {
        type: 'showcase', singleCol: true,
        label: { en: 'Project', es: 'Proyecto' },
        items: [{ name: 'MiDataCrédito', meta: { en: 'Colombia \u00b7 Fintech \u00b7 1M+ users', es: 'Colombia \u00b7 Fintech \u00b7 +1M usuarios' }, url: 'https://www.midatacredito.com', logo: 'midatacredito-logo.svg', logoStyle: 'background:#fff;padding:4px;border-radius:6px;width:100px;height:auto' }]
      }
    },
    {
      title: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
      company: 'Frecuencia Capital \u2014 Bogotá, Colombia',
      companyDesc: { en: 'Digital agency specialized in e-commerce and corporate web development', es: 'Agencia digital especializada en e-commerce y desarrollo web corporativo' },
      date: { en: 'January 2016 \u2014 January 2019 \u00b7 3 years', es: 'Enero 2016 \u2014 Enero 2019 \u00b7 3 años' },
      bullets: [
        { en: 'Full stack development for e-commerce platforms and corporate websites', es: 'Desarrollo full stack para plataformas de comercio electrónico y sitios web corporativos' },
        { en: 'Solution architecture with WordPress, WooCommerce, and enterprise CMS', es: 'Arquitectura de soluciones con WordPress, WooCommerce y CMS empresariales' }
      ],
      clients: {
        type: 'showcase', singleCol: true,
        label: { en: 'Featured project', es: 'Proyecto destacado' },
        items: [{ name: 'Ospinas & Cía S.A.', meta: { en: 'Colombia \u00b7 Construction \u00b7 94+ years', es: 'Colombia \u00b7 Construcción \u00b7 +94 años' }, url: 'https://www.ospinas.com.co', logo: 'https://www.ospinas.com.co/views/images/logo.svg', logoStyle: 'background:#fff;padding:6px;border-radius:6px' }]
      }
    },
    {
      title: { en: 'Web Administrator & Developer', es: 'Administrador & Desarrollador Web' },
      company: 'Genius Cube Store \u2014 Bogotá, Colombia',
      companyDesc: { en: 'E-commerce for technology products and accessories', es: 'E-commerce de productos tecnológicos y accesorios' },
      date: { en: 'November 2013 \u2014 March 2017', es: 'Noviembre 2013 \u2014 Marzo 2017' },
      bullets: [
        { en: 'E-commerce store administration and development with WordPress', es: 'Administración y desarrollo de tienda e-commerce con WordPress' },
        { en: 'Feature customization and SEO optimization', es: 'Personalización de funcionalidades y optimización SEO' }
      ]
    }
  ],

  projects: [
    { name: 'Global Organized Play', role: 'Lead Architect \u2014 SaaS Platform', stack: 'Node.js \u00b7 MongoDB \u00b7 Vue.js', desc: { en: 'SaaS platform for global tournament management. Thousands of active users across the Americas.', es: 'Plataforma SaaS para gestión de torneos a nivel global. Miles de usuarios activos en las Américas.' } },
    { name: 'Data Hub Migration',    role: 'Data Engineer \u2014 Legacy Rescue',   stack: 'Python \u00b7 Node.js \u00b7 Web Scraping', desc: { en: 'Reverse engineering and extraction of 14,000+ SKUs from legacy systems without API access.', es: 'Ingeniería inversa y extracción de +14,000 SKUs desde sistemas legacy sin acceso a API.' } },
    { name: 'Portal B2B Industrial', role: 'Magento Architect \u2014 Enterprise',  stack: 'Magento 2 \u00b7 PHP \u00b7 CRM Integration', desc: { en: 'Bidirectional middleware for CRM synchronization and custom quotation modules.', es: 'Middleware bidireccional para sincronización CRM y módulos de cotización personalizada.' } },
    { name: 'eSIM Market Platform',  role: 'Lead Developer \u2014 Marketplace',    stack: 'Bagisto \u00b7 Laravel \u00b7 Payment APIs', desc: { en: 'Marketplace with real-time eSIM provisioning and automated payment integration.', es: 'Marketplace con provisión de eSIM en tiempo real e integración de pagos automatizada.' } },
    { name: 'Automation Pipelines',  role: 'n8n Specialist \u2014 Business Automation', stack: 'n8n \u00b7 APIs \u00b7 Webhooks \u00b7 AI', desc: { en: 'Complex automation workflows connecting multiple enterprise systems with AI integration.', es: 'Flujos de automatización complejos conectando múltiples sistemas empresariales con integración de IA.' } },
    { name: 'AI-Enhanced Applications', role: 'AI Integration Lead', stack: 'AI APIs \u00b7 Node.js \u00b7 Supabase \u00b7 Vercel', desc: { en: 'Modern AI capabilities integration into production applications for augmented user experiences.', es: 'Integración de capacidades de IA moderna en aplicaciones de producción para experiencias de usuario aumentadas.' } }
  ],

  education: [
    { title: { en: 'Software Analysis & Development', es: 'Análisis & Desarrollo de Software' }, institution: 'SENA \u2014 Bogotá, Colombia', date: '2011 \u2014 2012' },
    { title: 'Magento 2 Professional Track', institution: { en: 'M.Academy \u2014 4 Certifications', es: 'M.Academy \u2014 4 Certificaciones' }, date: '2022 \u2014 2023', details: 'Power Theming \u00b7 UI Components \u00b7 Coding Kickstart \u00b7 JS Development Fundamentals' },
    { title: { en: '12+ Certifications in JavaScript, Frameworks & Web Development', es: '+12 Certificaciones en JavaScript, Frameworks & Desarrollo Web' }, institution: { en: 'Udemy & Online Platforms', es: 'Udemy & Plataformas Online' }, date: '2018 \u2014 2023', details: { en: 'TypeScript \u00b7 Angular \u00b7 Node.js \u00b7 Laravel \u00b7 React Native \u00b7 SQL \u00b7 Advanced JavaScript', es: 'TypeScript \u00b7 Angular \u00b7 Node.js \u00b7 Laravel \u00b7 React Native \u00b7 SQL \u00b7 JavaScript Avanzado' } },
    { title: { en: 'High School Diploma', es: 'Bachiller Académico' }, institution: 'CANAPRO', date: '2008 \u2014 2012' }
  ],

  footer: { en: 'Updated \u2014 February 2026', es: 'Actualizado \u2014 Febrero 2026' }
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

  return '<div class="lang-toggle">' +
    '<button class="lang-btn' + (lang === 'en' ? ' active' : '') + '" data-lang-btn="en">EN</button>' +
    '<button class="lang-btn' + (lang === 'es' ? ' active' : '') + '" data-lang-btn="es">ES</button>' +
    '</div>' +

    '<div class="photo-container"><div class="photo">' +
    (DATA.meta.photo ? '<img src="' + DATA.meta.photo + '" alt="' + DATA.meta.name + '">' : 'AB') +
    '</div></div>' +

    '<div class="sidebar-section">' +
      '<div class="sidebar-title">' + icon('phone', 'icon') + ' ' + t(sectionLabels.contact, lang) + '</div>' +
      DATA.contact.map(function(c) {
        var val = c.href ? '<a href="' + c.href + '">' + c.value + '</a>' : c.value;
        return '<div class="contact-item">' +
          icon(c.icon, 'icon-sm contact-icon') +
          '<div class="contact-text"><span class="contact-label">' + t(c.label, lang) + '</span>' + val + '</div>' +
        '</div>';
      }).join('') +
    '</div>' +

    '<div class="sidebar-section">' +
      '<div class="sidebar-title">' + icon('link', 'icon') + ' ' + t(sectionLabels.links, lang) + '</div>' +
      DATA.links.map(function(l) {
        return '<a href="' + l.href + '" class="link-item" target="_blank">' +
          icon(l.icon, 'icon-sm link-icon') +
          '<span><span class="link-label">' + l.label + '</span> \u2014 ' + l.display + '</span>' +
        '</a>';
      }).join('') +
    '</div>' +

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
      '<p class="cv-title">' + DATA.meta.title + '</p>' +
    '</header>' +

    '<section class="section reveal">' +
      '<h2 class="section-title">' + icon('user', 'icon-section') + ' ' + t({ en: 'Professional Profile', es: 'Perfil Profesional' }, lang) + '</h2>' +
      '<p class="profile-text">' + t(DATA.profile, lang) + '</p>' +
    '</section>' +

    '<section class="section">' +
      '<h2 class="section-title">' + icon('briefcase', 'icon-section') + ' ' + t({ en: 'Professional Experience', es: 'Experiencia Profesional' }, lang) + '</h2>' +
      '<div class="experience-list">' +
        DATA.experience.map(function(exp) {
          return '<div class="experience-item' + (exp.current ? ' current' : '') + ' reveal">' +
            '<div class="exp-title">' + t(exp.title, lang) + '</div>' +
            '<div class="exp-company">' + exp.company + '</div>' +
            '<div class="exp-company-desc">' + t(exp.companyDesc, lang) + '</div>' +
            '<div class="exp-date">' + t(exp.date, lang) + '</div>' +
            '<div class="exp-description"><ul>' +
              exp.bullets.map(function(b) { return '<li>' + t(b, lang) + '</li>'; }).join('') +
            '</ul>' + renderClients(exp.clients, lang) + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</section>' +

    '<section class="section reveal">' +
      '<h2 class="section-title">' + icon('layers', 'icon-section') + ' ' + t({ en: 'Featured Architectural Projects', es: 'Proyectos Arquitectónicos Destacados' }, lang) + '</h2>' +
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
    '</section>' +

    '<section class="section reveal">' +
      '<h2 class="section-title">' + icon('gradCap', 'icon-section') + ' ' + t({ en: 'Education & Professional Development', es: 'Formación & Desarrollo Profesional' }, lang) + '</h2>' +
      DATA.education.map(function(e) {
        return '<div class="education-item">' +
          '<div class="edu-title">' + t(e.title, lang) + '</div>' +
          '<div class="edu-institution">' + t(e.institution, lang) + '</div>' +
          '<div class="edu-date">' + e.date + '</div>' +
          (e.details ? '<div class="edu-details">' + t(e.details, lang) + '</div>' : '') +
        '</div>';
      }).join('') +
    '</section>' +

    '<div class="cv-footer">' + t(DATA.footer, lang) + '</div>';
}

// --- Engine ---

var currentLang = 'en';

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
