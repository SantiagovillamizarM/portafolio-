/* ==========================================================================
   Santiago Villamizar Mantilla — Portfolio
   ========================================================================== */

/* --------------------------------------------------------------------------
   Configuración de enlaces personales
   REEMPLAZAR los valores marcados como placeholder por los datos reales.
   Mientras contengan "TU-", el sitio los muestra como "pendientes" y no
   navega a ningún sitio.
   -------------------------------------------------------------------------- */
const CONFIG = {
  github: "https://github.com/SantiagovillamizarM",
  linkedin: "https://www.linkedin.com/in/santiago-villamizar-mantilla-9103253a9/",
  email: "villamizarmantillasantigo@gmail.com"
};

const isPlaceholder = (value) => !value || value.includes("TU-");

/* --------------------------------------------------------------------------
   Traducciones
   -------------------------------------------------------------------------- */
const translations = {
  es: {
    meta: {
      title: "Santiago Villamizar Mantilla — Junior Software Developer",
      description: "Portafolio de Santiago Villamizar Mantilla, Junior Software Developer. Proyectos en Java, Python y JavaScript."
    },
    a11y: {
      skip: "Saltar al contenido",
      mainNav: "Navegación principal",
      footerNav: "Enlaces del pie de página",
      logo: "SVM — Ir al inicio",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      langSwitch: "Cambiar idioma a inglés",
      scroll: "Ir a la sección Sobre mí",
      tech: "Tecnologías utilizadas"
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Skills",
      journey: "Trayectoria",
      projects: "Proyectos",
      contact: "Contacto"
    },
    hero: {
      eyebrow: "Portafolio · 2026",
      role: "Junior Software Developer",
      description: "Desarrollador junior enfocado en crear soluciones funcionales, aprender tecnologías nuevas y enfrentar problemas complejos con adaptación y determinación.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactarme",
      cvDownload: "Descargar hoja de vida",
      cvDownloadAts: "Descargar hoja de vida ATS",
      chip1: "Web + Escritorio",
      chip2: "Mentalidad de crecimiento",
      scroll: "Desliza"
    },
    code: {
      trait1: "\"determinado\"",
      trait2: "\"adaptable\"",
      focus: "\"soluciones funcionales\"",
      comment: "// siempre aprendiendo"
    },
    about: {
      kicker: "Perfil",
      title: "Sobre mí",
      p1: "Soy Santiago Villamizar Mantilla, desarrollador junior apasionado por la programación y la creación de soluciones. Mi formación en programación me ha permitido trabajar con diferentes tecnologías y desarrollar proyectos tanto web como de escritorio.",
      p2: "Me considero una persona determinada, entusiasta, enfocada y visionaria. Una de mis principales fortalezas es mi capacidad de adaptación: cuando aparece un problema complejo, busco entenderlo, aprender y encontrar una solución.",
      p3: "Me gustan los retos, los problemas difíciles y las situaciones que me obligan a salir de mi zona de confort.",
      cardLabel: "Resumen de perfil",
      card: {
        trainingLabel: "Formación",
        focusLabel: "Enfoque",
        focus: "Web y escritorio",
        stackLabel: "Stack principal",
        mindsetLabel: "Mentalidad",
        mindset: "Crecimiento constante"
      },
      traitsTitle: "Características personales",
      traits: {
        determined: "Determinado",
        enthusiastic: "Entusiasta",
        focused: "Enfocado",
        visionary: "Visionario",
        adaptable: "Adaptable",
        challenges: "Orientado a retos"
      }
    },
    skills: {
      kicker: "Stack",
      title: "Tecnologías y herramientas",
      intro: "Las tecnologías con las que he trabajado durante mi formación y en mis proyectos, organizadas por categoría.",
      cat: {
        languages: "Lenguajes",
        frameworks: "Frameworks / Backend",
        databases: "Bases de datos",
        tools: "Herramientas",
        methodologies: "Metodologías"
      }
    },
    journey: {
      kicker: "Recorrido",
      title: "Trayectoria",
      intro: "Cada etapa suma impulso a la siguiente.",
      school: {
        desc: "Finalización de estudios escolares.",
        tag: "Educación escolar"
      },
      campus: {
        desc: "Formación en programación y desarrollo de las habilidades técnicas utilizadas actualmente.",
        tag: "Formación en programación"
      },
      next: "Próximo capítulo: nuevos retos"
    },
    projects: {
      kicker: "Trabajo",
      title: "Proyectos destacados",
      intro: "Proyectos construidos durante mi formación: del escritorio a la web, con arquitectura, persistencia de datos y lógica real.",
      featured: "Proyecto principal",
      featuresTitle: "Funcionalidades clave",
      viewCode: "Ver código en GitHub",
      f1: {
        type: "Aplicación de escritorio",
        desc: "Aplicación de escritorio desarrollada en Java 21 y JavaFX para gestionar una escudería de Fórmula 1, incluyendo circuitos, pilotos, equipos y vehículos, además de simulación de carreras y campeonatos completos.",
        mockAlt: "Mockup ilustrativo de la interfaz de escritorio de F1 Manager con la clasificación del campeonato y un circuito",
        features: {
          circuits: "Gestión de circuitos",
          drivers: "Gestión de pilotos",
          teams: "Gestión de equipos",
          cars: "Gestión de vehículos",
          setup: "Configuración de monoplazas",
          race: "Simulación de carreras",
          championship: "Modo campeonato",
          driverStandings: "Clasificación de pilotos",
          teamStandings: "Clasificación de equipos"
        },
        tech: { hexagonal: "Arquitectura Hexagonal" },
        mock: {
          championship: "Campeonato",
          race: "Carrera",
          circuits: "Circuitos",
          drivers: "Pilotos",
          teams: "Equipos",
          cars: "Vehículos",
          standings: "Clasificación de pilotos",
          round: "Ronda",
          driver: "Piloto",
          lap: "Vuelta",
          simulate: "Simular carrera"
        }
      },
      tools: {
        type: "Aplicación Python",
        title: "Software de Gestión de Herramientas",
        desc: "Sistema de gestión desarrollado en Python para administrar inventario, usuarios y préstamos de herramientas.",
        mockAlt: "Mockup ilustrativo de la terminal del software de gestión de herramientas con su menú principal y una alerta de stock bajo",
        admin: {
          title: "Administrador",
          desc: "Gestión de inventario, usuarios, stock y registros."
        },
        user: {
          title: "Usuario",
          desc: "Consulta de herramientas, préstamos y devoluciones."
        },
        features: {
          inventory: "Gestión de inventario",
          users: "Control de usuarios",
          loans: "Sistema de préstamos",
          returns: "Devoluciones",
          stock: "Control de stock",
          logs: "Logs",
          alerts: "Alertas de stock bajo",
          txt: "Persistencia mediante archivos .txt"
        },
        tech: { modular: "Arquitectura Modular" },
        mock: {
          title: "=== GESTIÓN DE HERRAMIENTAS ===",
          inventory: "Inventario",
          users: "Usuarios",
          loans: "Préstamos",
          returns: "Devoluciones",
          logs: "Registros (logs)",
          alert: "Stock bajo: Taladro — 2 uds.",
          select: "Seleccione una opción:"
        }
      },
      bank: {
        type: "Aplicación web",
        desc: "Aplicación web bancaria desarrollada con JavaScript que permite gestionar cuentas, autenticación, registros, recuperación de contraseña y operaciones financieras mediante una interfaz web.",
        mockAlt: "Mockup ilustrativo del dashboard oscuro de Acme Bank con saldo, operaciones rápidas y movimientos recientes",
        features: {
          login: "Login",
          register: "Registro por fases",
          recovery: "Recuperación de contraseña",
          dashboard: "Dashboard",
          deposits: "Consignaciones",
          withdrawals: "Retiros",
          payments: "Pagos de servicios",
          history: "Historial de transacciones",
          certificate: "Certificado bancario",
          storage: "Persistencia con LocalStorage"
        },
        mock: {
          hello: "Hola de nuevo",
          balance: "Saldo disponible",
          deposit: "Consignar",
          withdraw: "Retirar",
          pay: "Pagar",
          certificate: "Certificado",
          recent: "Movimientos recientes",
          tx1: "Consignación",
          tx2: "Pago de servicios",
          tx3: "Retiro"
        }
      }
    },
    values: {
      kicker: "Mentalidad",
      title: "Lo que me define",
      items: {
        determination: { title: "Determinación", desc: "No abandono un problema simplemente porque sea difícil." },
        adaptability: { title: "Adaptabilidad", desc: "Me adapto rápidamente a nuevas situaciones, herramientas y tecnologías." },
        curiosity: { title: "Curiosidad", desc: "Me interesa entender cómo funcionan las cosas y aprender continuamente." },
        challenges: { title: "Retos", desc: "Los problemas complejos representan una oportunidad para aprender." },
        vision: { title: "Visión", desc: "Busco crecer constantemente y construir soluciones cada vez mejores." }
      }
    },
    contact: {
      kicker: "Contacto",
      title: "¿Tienes una idea?",
      subtitle: "Hablemos y construyamos algo juntos.",
      linkedinHint: "Perfil profesional",
      emailHint: "Escríbeme directamente",
      pending: "pendiente",
      pendingToast: "Este enlace aún no está configurado.",
      form: {
        title: "Envíame un mensaje",
        name: "Nombre",
        namePh: "Tu nombre",
        email: "Email",
        emailPh: "tu@correo.com",
        message: "Mensaje",
        messagePh: "Cuéntame sobre tu idea…",
        submit: "Enviar mensaje",
        note: "Tu mensaje me llegará directamente al correo. Te responderé lo antes posible.",
        subject: "Contacto desde el portafolio",
        bodyFrom: "De",
        errors: {
          name: "Escribe tu nombre (mínimo 2 caracteres).",
          email: "Escribe un email válido.",
          message: "El mensaje debe tener al menos 10 caracteres."
        },
        status: {
          sending: "Enviando mensaje…",
          success: "¡Mensaje enviado! Gracias por escribirme.",
          error: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a mi correo.",
          notConfigured: "El correo de contacto aún no está configurado. Mientras tanto, puedes encontrarme en GitHub."
        }
      }
    },
    footer: {
      rights: "© 2026 Santiago Villamizar Mantilla",
      motto: "Construido con curiosidad, código y determinación.",
      top: "Volver arriba"
    }
  },

  en: {
    meta: {
      title: "Santiago Villamizar Mantilla — Junior Software Developer",
      description: "Portfolio of Santiago Villamizar Mantilla, Junior Software Developer. Projects built with Java, Python and JavaScript."
    },
    a11y: {
      skip: "Skip to content",
      mainNav: "Main navigation",
      footerNav: "Footer links",
      logo: "SVM — Go to home",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langSwitch: "Switch language to Spanish",
      scroll: "Go to the About me section",
      tech: "Technologies used"
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      journey: "Journey",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Portfolio · 2026",
      role: "Junior Software Developer",
      description: "Junior developer focused on building functional solutions, learning new technologies and tackling complex problems with adaptability and determination.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
      cvDownload: "Download resume",
      cvDownloadAts: "Download ATS resume",
      chip1: "Web + Desktop",
      chip2: "Growth mindset",
      scroll: "Scroll"
    },
    code: {
      trait1: "\"determined\"",
      trait2: "\"adaptable\"",
      focus: "\"functional solutions\"",
      comment: "// always learning"
    },
    about: {
      kicker: "Profile",
      title: "About me",
      p1: "I'm Santiago Villamizar Mantilla, a junior developer passionate about programming and building solutions. My programming training has allowed me to work with different technologies and build both web and desktop projects.",
      p2: "I consider myself a determined, enthusiastic, focused and visionary person. One of my main strengths is my ability to adapt: when a complex problem appears, I seek to understand it, learn and find a solution.",
      p3: "I enjoy challenges, difficult problems and situations that push me out of my comfort zone.",
      cardLabel: "Profile summary",
      card: {
        trainingLabel: "Training",
        focusLabel: "Focus",
        focus: "Web & desktop",
        stackLabel: "Main stack",
        mindsetLabel: "Mindset",
        mindset: "Constant growth"
      },
      traitsTitle: "Personal traits",
      traits: {
        determined: "Determined",
        enthusiastic: "Enthusiastic",
        focused: "Focused",
        visionary: "Visionary",
        adaptable: "Adaptable",
        challenges: "Challenge-driven"
      }
    },
    skills: {
      kicker: "Stack",
      title: "Technologies & tools",
      intro: "The technologies I've worked with during my training and in my projects, organized by category.",
      cat: {
        languages: "Languages",
        frameworks: "Frameworks / Backend",
        databases: "Databases",
        tools: "Tools",
        methodologies: "Methodologies"
      }
    },
    journey: {
      kicker: "Path",
      title: "Journey",
      intro: "Every stage adds momentum to the next one.",
      school: {
        desc: "Completed high school studies.",
        tag: "School education"
      },
      campus: {
        desc: "Programming training and development of the technical skills I use today.",
        tag: "Programming training"
      },
      next: "Next chapter: new challenges"
    },
    projects: {
      kicker: "Work",
      title: "Featured projects",
      intro: "Projects built during my training: from desktop to web, with architecture, data persistence and real logic.",
      featured: "Main project",
      featuresTitle: "Key features",
      viewCode: "View code on GitHub",
      f1: {
        type: "Desktop Application",
        desc: "Desktop application built with Java 21 and JavaFX to manage a Formula 1 team, including circuits, drivers, teams and cars, plus race simulation and full championships.",
        mockAlt: "Illustrative mockup of the F1 Manager desktop interface showing the championship standings and a circuit",
        features: {
          circuits: "Circuit management",
          drivers: "Driver management",
          teams: "Team management",
          cars: "Car management",
          setup: "Single-seater setup",
          race: "Race simulation",
          championship: "Championship mode",
          driverStandings: "Driver standings",
          teamStandings: "Team standings"
        },
        tech: { hexagonal: "Hexagonal Architecture" },
        mock: {
          championship: "Championship",
          race: "Race",
          circuits: "Circuits",
          drivers: "Drivers",
          teams: "Teams",
          cars: "Cars",
          standings: "Driver standings",
          round: "Round",
          driver: "Driver",
          lap: "Lap",
          simulate: "Simulate race"
        }
      },
      tools: {
        type: "Python Application",
        title: "Tool Management Software",
        desc: "Management system built in Python to handle tool inventory, users and loans.",
        mockAlt: "Illustrative mockup of the tool management software terminal showing its main menu and a low stock alert",
        admin: {
          title: "Administrator",
          desc: "Inventory, user, stock and log management."
        },
        user: {
          title: "User",
          desc: "Tool lookup, loans and returns."
        },
        features: {
          inventory: "Inventory management",
          users: "User control",
          loans: "Loan system",
          returns: "Returns",
          stock: "Stock control",
          logs: "Logs",
          alerts: "Low stock alerts",
          txt: "Persistence with .txt files"
        },
        tech: { modular: "Modular Architecture" },
        mock: {
          title: "=== TOOL MANAGEMENT ===",
          inventory: "Inventory",
          users: "Users",
          loans: "Loans",
          returns: "Returns",
          logs: "Records (logs)",
          alert: "Low stock: Drill — 2 units",
          select: "Select an option:"
        }
      },
      bank: {
        type: "Web Application",
        desc: "Banking web application built with JavaScript to manage accounts, authentication, sign-ups, password recovery and financial operations through a web interface.",
        mockAlt: "Illustrative mockup of the dark Acme Bank dashboard showing balance, quick actions and recent transactions",
        features: {
          login: "Login",
          register: "Multi-step sign-up",
          recovery: "Password recovery",
          dashboard: "Dashboard",
          deposits: "Deposits",
          withdrawals: "Withdrawals",
          payments: "Utility payments",
          history: "Transaction history",
          certificate: "Bank certificate",
          storage: "Persistence with LocalStorage"
        },
        mock: {
          hello: "Welcome back",
          balance: "Available balance",
          deposit: "Deposit",
          withdraw: "Withdraw",
          pay: "Pay",
          certificate: "Certificate",
          recent: "Recent transactions",
          tx1: "Deposit",
          tx2: "Utility payment",
          tx3: "Withdrawal"
        }
      }
    },
    values: {
      kicker: "Mindset",
      title: "What defines me",
      items: {
        determination: { title: "Determination", desc: "I don't give up on a problem just because it's difficult." },
        adaptability: { title: "Adaptability", desc: "I adapt quickly to new situations, tools and technologies." },
        curiosity: { title: "Curiosity", desc: "I'm interested in understanding how things work and learning continuously." },
        challenges: { title: "Challenges", desc: "Complex problems are an opportunity to learn." },
        vision: { title: "Vision", desc: "I strive to grow constantly and build better and better solutions." }
      }
    },
    contact: {
      kicker: "Contact",
      title: "Got an idea?",
      subtitle: "Let's talk and build something together.",
      linkedinHint: "Professional profile",
      emailHint: "Write to me directly",
      pending: "pending",
      pendingToast: "This link hasn't been configured yet.",
      form: {
        title: "Send me a message",
        name: "Name",
        namePh: "Your name",
        email: "Email",
        emailPh: "you@email.com",
        message: "Message",
        messagePh: "Tell me about your idea…",
        submit: "Send message",
        note: "Your message will reach my inbox directly. I'll reply as soon as possible.",
        subject: "Contact from portfolio",
        bodyFrom: "From",
        errors: {
          name: "Enter your name (at least 2 characters).",
          email: "Enter a valid email.",
          message: "The message must be at least 10 characters long."
        },
        status: {
          sending: "Sending message…",
          success: "Message sent! Thanks for reaching out.",
          error: "The message couldn't be sent. Please try again or email me directly.",
          notConfigured: "The contact email hasn't been configured yet. In the meantime, you can find me on GitHub."
        }
      }
    },
    footer: {
      rights: "© 2026 Santiago Villamizar Mantilla",
      motto: "Built with curiosity, code and determination.",
      top: "Back to top"
    }
  }
};

/* --------------------------------------------------------------------------
   Utilidades
   -------------------------------------------------------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReducedMotion = () => motionQuery.matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const STORAGE_KEY = "svm-lang";
let currentLang = "es";

function t(key, lang = currentLang) {
  return key.split(".").reduce((obj, part) => (obj == null ? undefined : obj[part]), translations[lang]);
}

function safeStorage(action, value) {
  try {
    if (action === "get") return localStorage.getItem(STORAGE_KEY);
    localStorage.setItem(STORAGE_KEY, value);
  } catch (_) {
    /* localStorage puede no estar disponible (modo privado, file://) */
  }
  return null;
}

/* --------------------------------------------------------------------------
   Idioma
   -------------------------------------------------------------------------- */
const langSwitch = $("#lang-switch");

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = t("meta.title");

  $$("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });

  $$("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const value = t(key);
      if (attr && typeof value === "string") el.setAttribute(attr, value);
    });
  });

  langSwitch.dataset.lang = lang;
  langSwitch.setAttribute("aria-label", t("a11y.langSwitch"));
  updateMenuLabel();
  applyLinks();

  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

function switchLanguage(lang) {
  if (lang === currentLang) return;
  safeStorage("set", lang);

  langSwitch.classList.remove("is-bumping");
  void langSwitch.offsetWidth; // reinicia la animación
  langSwitch.classList.add("is-bumping");

  if (prefersReducedMotion()) {
    applyLanguage(lang);
    return;
  }

  const body = document.body;
  body.classList.add("lang-anim", "lang-fading");
  langSwitch.dataset.lang = lang; // el thumb se mueve inmediatamente
  setTimeout(() => {
    applyLanguage(lang);
    body.classList.remove("lang-fading");
    setTimeout(() => body.classList.remove("lang-anim"), 250);
  }, 200);
}

function initLanguage() {
  const saved = safeStorage("get");
  const initial = saved === "en" || saved === "es" ? saved : "es";
  applyLanguage(initial);

  langSwitch.addEventListener("click", () => {
    switchLanguage(currentLang === "es" ? "en" : "es");
  });
}

/* --------------------------------------------------------------------------
   Enlaces personales (GitHub / LinkedIn / Email)
   -------------------------------------------------------------------------- */
const toast = $("#toast");
let toastTimer;

function showToast(key) {
  toast.dataset.i18n = key;
  toast.textContent = t(key);
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function applyLinks() {
  $$("[data-link]").forEach((el) => {
    const type = el.dataset.link;
    const value = CONFIG[type];
    const pending = isPlaceholder(value);

    el.classList.toggle("is-placeholder", pending);
    if (pending) {
      el.setAttribute("href", "#contacto");
      el.setAttribute("aria-disabled", "true");
      el.removeAttribute("target");
      el.title = t("contact.pendingToast");
      const hint = el.querySelector(".contact-link__text small");
      if (hint) hint.dataset.pending = t("contact.pending");
    } else {
      el.setAttribute("href", type === "email" ? `mailto:${value}` : value);
      el.removeAttribute("aria-disabled");
      el.removeAttribute("title");
      if (type !== "email") el.setAttribute("target", "_blank");
    }
  });
}

function initLinks() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link].is-placeholder");
    if (!link) return;
    e.preventDefault();
    showToast("contact.pendingToast");
  });
}

/* --------------------------------------------------------------------------
   Navegación: header, menú móvil y enlace activo
   -------------------------------------------------------------------------- */
const header = $("#header");
const navToggle = $("#nav-toggle");
const navMenu = $("#nav-menu");
const mobileQuery = window.matchMedia("(max-width: 960px)");

function isMenuOpen() {
  return header.classList.contains("menu-open");
}

function updateMenuLabel() {
  navToggle.setAttribute("aria-label", t(isMenuOpen() ? "a11y.closeMenu" : "a11y.openMenu"));
}

function setMenu(open) {
  header.classList.toggle("menu-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
  updateMenuLabel();
  if (open) $(".nav__link", navMenu)?.focus({ preventScroll: true });
}

function initNav() {
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  navToggle.addEventListener("click", () => setMenu(!isMenuOpen()));

  navMenu.addEventListener("click", (e) => {
    if (e.target.closest(".nav__link")) setMenu(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen()) {
      setMenu(false);
      navToggle.focus();
    }
  });

  mobileQuery.addEventListener("change", (e) => {
    if (!e.matches && isMenuOpen()) setMenu(false);
  });

  // Enlace activo según la sección visible
  const links = $$(".nav__link");
  const sections = links
    .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
}

/* --------------------------------------------------------------------------
   Scroll reveal
   -------------------------------------------------------------------------- */
function initReveal() {
  const items = $$(".reveal");

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible", "is-done"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add("is-visible");
        const delay = parseFloat(getComputedStyle(el).getPropertyValue("--d")) || 0;
        setTimeout(() => el.classList.add("is-done"), 1000 + delay * 1000);
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   Fondo de estrellas (canvas)
   -------------------------------------------------------------------------- */
function initStarfield() {
  const canvas = $("#starfield");
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  // Tres capas de profundidad: lejos, medio, cerca
  const LAYERS = [
    { share: 0.62, size: [0.3, 0.8], alpha: [0.25, 0.55], drift: 0.006, parallax: 0.015 },
    { share: 0.28, size: [0.7, 1.2], alpha: [0.4, 0.75], drift: 0.012, parallax: 0.04 },
    { share: 0.10, size: [1.1, 1.8], alpha: [0.6, 1.0], drift: 0.02, parallax: 0.08 }
  ];

  let width = 0;
  let height = 0;
  let stars = [];
  let motes = [];
  let rafId = null;
  let lastTime = 0;
  let scrollOffset = window.scrollY;

  const rand = (min, max) => min + Math.random() * (max - min);

  // Sprite de glow morado pre-renderizado (más barato que gradientes por frame)
  const glow = document.createElement("canvas");
  glow.width = glow.height = 64;
  const g = glow.getContext("2d");
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(196, 181, 253, 0.9)");
  grad.addColorStop(0.25, "rgba(139, 92, 246, 0.45)");
  grad.addColorStop(1, "rgba(109, 40, 217, 0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);

  function build() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const mobile = width < 768;
    const density = mobile ? 1 / 7000 : 1 / 4200;
    const total = Math.min(Math.round(width * height * density), mobile ? 120 : 360);

    stars = [];
    LAYERS.forEach((layer, index) => {
      const count = Math.round(total * layer.share);
      for (let i = 0; i < count; i++) {
        stars.push({
          layer: index,
          x: Math.random() * width,
          y: Math.random() * height,
          r: rand(layer.size[0], layer.size[1]),
          a: rand(layer.alpha[0], layer.alpha[1]),
          tw: rand(0.4, 1.6),          // velocidad de parpadeo
          ph: Math.random() * Math.PI * 2,
          flare: index === 2 && Math.random() < 0.35,
          tint: Math.random() < 0.18   // algunas estrellas con tono lavanda
        });
      }
    });

    const moteCount = mobile ? 6 : 16;
    motes = Array.from({ length: moteCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: rand(10, 26),
      vx: rand(-0.012, 0.012),
      vy: rand(-0.018, -0.004),
      a: rand(0.15, 0.4),
      ph: Math.random() * Math.PI * 2
    }));
  }

  function draw(time) {
    const dt = Math.min(time - lastTime, 64) || 16;
    lastTime = time;
    const sec = time / 1000;

    ctx.clearRect(0, 0, width, height);

    for (const s of stars) {
      const layer = LAYERS[s.layer];
      s.x += layer.drift * dt * 0.06;
      if (s.x > width + 2) s.x = -2;

      const y = (((s.y - scrollOffset * layer.parallax) % height) + height) % height;
      const twinkle = 0.6 + 0.4 * Math.sin(sec * s.tw + s.ph);
      const alpha = s.a * twinkle;

      ctx.fillStyle = s.tint ? `rgba(196, 181, 253, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
      if (s.r < 0.9) {
        ctx.fillRect(s.x, y, s.r * 1.6, s.r * 1.6);
      } else {
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Pequeño destello en forma de cruz cuando la estrella brilla más
      if (s.flare && twinkle > 0.9) {
        const len = s.r * 5 * (twinkle - 0.9) * 10;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.55})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(s.x - len, y);
        ctx.lineTo(s.x + len, y);
        ctx.moveTo(s.x, y - len);
        ctx.lineTo(s.x, y + len);
        ctx.stroke();
      }
    }

    for (const m of motes) {
      m.x += m.vx * dt;
      m.y += m.vy * dt;
      if (m.y < -30) { m.y = height + 30; m.x = Math.random() * width; }
      if (m.x < -30) m.x = width + 30;
      if (m.x > width + 30) m.x = -30;
      ctx.globalAlpha = m.a * (0.6 + 0.4 * Math.sin(sec * 0.5 + m.ph));
      ctx.drawImage(glow, m.x - m.size / 2, m.y - m.size / 2, m.size, m.size);
    }
    ctx.globalAlpha = 1;
  }

  function loop(time) {
    draw(time);
    rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (rafId || prefersReducedMotion()) return;
    lastTime = performance.now();
    rafId = requestAnimationFrame(loop);
  }

  function stop() {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  build();
  if (prefersReducedMotion()) draw(0);
  else start();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      build();
      if (!rafId) draw(performance.now());
    }, 200);
  });

  window.addEventListener("scroll", () => { scrollOffset = window.scrollY; }, { passive: true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  motionQuery.addEventListener("change", () => {
    if (prefersReducedMotion()) { stop(); draw(performance.now()); }
    else start();
  });
}

/* --------------------------------------------------------------------------
   Constelación de "Lo que me define"
   -------------------------------------------------------------------------- */
function initConstellation() {
  const wrap = $("#constellation");
  if (!wrap) return;
  const svg = $(".constellation", wrap);
  const cards = $$(".value-card", wrap);
  const NS = "http://www.w3.org/2000/svg";

  // Conexiones entre estrellas (índices de tarjetas)
  const EDGES = [[0, 1], [1, 2], [0, 3], [3, 4], [1, 4], [2, 4]];

  // Posición de la estrella relativa al contenedor, sin contar transforms
  function starPoint(card) {
    const star = $(".value-card__star", card);
    return {
      x: card.offsetLeft + star.offsetLeft + star.offsetWidth / 2,
      y: card.offsetTop + star.offsetTop + star.offsetHeight / 2
    };
  }

  function render() {
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    svg.textContent = "";

    const single = window.matchMedia("(max-width: 640px)").matches;
    const edges = single ? cards.slice(1).map((_, i) => [i, i + 1]) : EDGES;
    const points = cards.map(starPoint);

    edges.forEach(([a, b]) => {
      const line = document.createElementNS(NS, "line");
      line.setAttribute("x1", points[a].x);
      line.setAttribute("y1", points[a].y);
      line.setAttribute("x2", points[b].x);
      line.setAttribute("y2", points[b].y);
      line.setAttribute("pathLength", "1");
      line.setAttribute("class", "constellation__line");
      line.dataset.a = a;
      line.dataset.b = b;
      svg.appendChild(line);
    });

    // Polvo estelar determinista (no cambia entre renders)
    for (let i = 0; i < 18; i++) {
      const dot = document.createElementNS(NS, "circle");
      const px = ((i * 73) % 100) / 100;
      const py = ((i * 37 + 11) % 100) / 100;
      dot.setAttribute("cx", (px * w).toFixed(1));
      dot.setAttribute("cy", (py * h).toFixed(1));
      dot.setAttribute("r", i % 4 === 0 ? 1.2 : 0.7);
      dot.setAttribute("class", "constellation__dust");
      dot.setAttribute("opacity", (0.2 + (i % 5) * 0.1).toFixed(2));
      svg.appendChild(dot);
    }

    if (drawn) requestAnimationFrame(() => svg.classList.add("is-drawn"));
  }

  let drawn = false;
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      drawn = true;
      svg.classList.add("is-drawn");
      io.disconnect();
    }
  }, { threshold: 0.25 });
  io.observe(wrap);

  cards.forEach((card, index) => {
    const light = (on) => {
      $$(".constellation__line", svg).forEach((line) => {
        if (+line.dataset.a === index || +line.dataset.b === index) line.classList.toggle("is-lit", on);
      });
    };
    card.addEventListener("mouseenter", () => light(true));
    card.addEventListener("mouseleave", () => light(false));
  });

  render();
  if ("ResizeObserver" in window) {
    let raf;
    new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(render);
    }).observe(wrap);
  } else {
    window.addEventListener("resize", render);
  }
}

/* --------------------------------------------------------------------------
   Tarjetas: spotlight que sigue al cursor + inclinación mínima
   -------------------------------------------------------------------------- */
function initCardEffects() {
  if (!finePointer) return;

  $$("[data-spotlight]").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });

  if (prefersReducedMotion()) return;

  $$("[data-tilt]").forEach((card) => {
    const MAX = 2.5; // grados
    card.addEventListener("pointermove", (e) => {
      if (!card.classList.contains("is-done")) return;
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1200px) translateY(-6px) rotateX(${(-py * MAX).toFixed(2)}deg) rotateY(${(px * MAX).toFixed(2)}deg)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

/* --------------------------------------------------------------------------
   Formulario de contacto (envío con Web3Forms)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = $("#contact-form");
  if (!form) return;
  const status = $("#cf-status");

  const fields = {
    name: { input: $("#cf-name"), error: $("#cf-name-error"), valid: (v) => v.trim().length >= 2 },
    email: { input: $("#cf-email"), error: $("#cf-email-error"), valid: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) },
    message: { input: $("#cf-message"), error: $("#cf-message-error"), valid: (v) => v.trim().length >= 10 }
  };

  // Los mensajes usan data-i18n para que se traduzcan si cambia el idioma
  function setMessage(el, key) {
    if (key) {
      el.dataset.i18n = key;
      el.textContent = t(key);
    } else {
      delete el.dataset.i18n;
      el.textContent = "";
    }
  }

  function validate(name) {
    const field = fields[name];
    const ok = field.valid(field.input.value);
    field.input.setAttribute("aria-invalid", String(!ok));
    setMessage(field.error, ok ? null : `contact.form.errors.${name}`);
    return ok;
  }

  Object.keys(fields).forEach((name) => {
    const { input } = fields[name];
    input.addEventListener("blur", () => { if (input.value) validate(name); });
    input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true") validate(name);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.classList.remove("is-error");

    const results = Object.keys(fields).map(validate);
    if (results.includes(false)) {
      const firstInvalid = Object.values(fields).find((f) => f.input.getAttribute("aria-invalid") === "true");
      firstInvalid?.input.focus();
      setMessage(status, null);
      return;
    }

    const name = fields.name.input.value.trim();
    const email = fields.email.input.value.trim();
    const message = fields.message.input.value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    const payload = new FormData(form);
    payload.set("subject", `${t("contact.form.subject")} — ${name}`);
    payload.set("from_name", name);
    payload.set("replyto", email);
    payload.set("message", message);

    submitBtn.disabled = true;
    setMessage(status, "contact.form.status.sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: payload });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Web3Forms error");
      setMessage(status, "contact.form.status.success");
      form.reset();
    } catch (err) {
      status.classList.add("is-error");
      setMessage(status, "contact.form.status.error");
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* --------------------------------------------------------------------------
   Animaciones SVG (SMIL) con movimiento reducido
   -------------------------------------------------------------------------- */
function initSvgMotion() {
  const svgs = $$(".timeline__orbit, .f1-track svg");
  const sync = () => {
    svgs.forEach((svg) => {
      if (typeof svg.pauseAnimations !== "function") return;
      if (prefersReducedMotion()) svg.pauseAnimations();
      else svg.unpauseAnimations();
    });
  };
  sync();
  motionQuery.addEventListener("change", sync);
}

/* --------------------------------------------------------------------------
   Inicio
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initLinks();
  initLanguage();
  initNav();
  initReveal();
  initStarfield();
  initConstellation();
  initCardEffects();
  initContactForm();
  initSvgMotion();
});
