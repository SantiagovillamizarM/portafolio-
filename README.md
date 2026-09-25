# Santiago Villamizar Mantilla — Portfolio

Portafolio personal de **Santiago Villamizar Mantilla**, Junior Software Developer.

Desarrollado con **HTML5, CSS3 y JavaScript Vanilla**, sin frameworks ni dependencias de build.

## Ejecutar

Abre `index.html` directamente en el navegador. No necesita servidor ni backend.

> Las fuentes (Inter y Space Grotesk) se cargan desde Google Fonts. Sin conexión, el sitio usa las fuentes del sistema.

## Estructura

```
portafolio/
├── index.html          # Estructura y contenido (textos en español por defecto)
├── css/
│   └── style.css       # Diseño, responsive, animaciones y efectos visuales
├── js/
│   └── script.js       # Idiomas, menú, navegación, reveal, estrellas, constelación, formulario
├── assets/
│   ├── images/         # Espacio para capturas reales de los proyectos
│   └── icons/          # Iconos SVG de tecnologías y favicon
└── README.md
```

## Configuración pendiente

En `js/script.js`, al inicio del archivo, reemplaza los placeholders:

```js
const CONFIG = {
  github: "https://github.com/SantiagovillamizarM",
  linkedin: "https://www.linkedin.com/in/TU-USUARIO-LINKEDIN", // PLACEHOLDER
  email: "TU-CORREO@ejemplo.com"                              // PLACEHOLDER
};
```

Mientras un valor contenga `TU-`, el enlace se muestra como **pendiente** (borde discontinuo) y no navega a ningún sitio. El formulario tampoco intenta enviar nada hasta que el email esté configurado.

## Idiomas (ES / EN)

- Los textos traducibles llevan `data-i18n="clave"` (contenido) o `data-i18n-attr="atributo:clave"` (placeholder, aria-label, etc.).
- Las traducciones están en el objeto `translations` de `js/script.js`, con la misma estructura para `es` y `en`.
- El idioma elegido se guarda en `localStorage`.

Para añadir un texto nuevo: agrega la clave en `translations.es` y `translations.en` y referencia la clave en el HTML.

## Formulario de contacto

No hay backend. Al enviar, el formulario valida los campos y abre la aplicación de correo del visitante (`mailto:`) con el asunto y el mensaje ya escritos. Para usar un servicio externo (Formspree, EmailJS, un backend propio…), sustituye el bloque final del `submit` en `initContactForm()`.

## Accesibilidad y rendimiento

- HTML semántico, enlace "Saltar al contenido", `aria-label` en controles, foco visible y navegación con teclado (Escape cierra el menú móvil).
- Respeta `prefers-reduced-motion`: desactiva animaciones, el movimiento de estrellas y las animaciones SVG.
- El fondo usa un único `<canvas>` con un sprite de glow pre-renderizado; reduce partículas en móvil y se pausa cuando la pestaña no está visible.
- Los mockups de los proyectos son HTML/CSS (sin imágenes pesadas) y también se traducen.
