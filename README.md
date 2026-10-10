# Las Muñoz - Landing Page

Landing page profesional para **Las Muñoz**, empresa de ordenanza y aseo profesional. Sitio multi-página moderno, responsive y animado, construido con HTML5, TailwindCSS y JavaScript vanilla (sin frameworks).

---

## 📋 Tabla de contenidos

- [Características](#-características)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Tecnologías](#-tecnologías)
- [Páginas](#-páginas)
- [Instalación y uso](#-instalación-y-uso)
- [Personalización](#-personalización)
- [Sistema de datos](#-sistema-de-datos)
- [JavaScript](#-javascript)
- [Estilos y paleta](#-estilos-y-paleta)
- [Despliegue](#-despliegue)
- [Solución de problemas](#-solución-de-problemas)
- [Licencia y créditos](#-licencia-y-créditos)

---

## ✨ Características

- ✅ **100% responsive** (mobile-first, breakpoints: sm, md, lg)
- ✅ **Multi-página** (8 páginas HTML independientes)
- ✅ **Carrusel de testimonios** con auto-play y navegación
- ✅ **Galería con filtros** dinámicos por categoría + lightbox
- ✅ **Animaciones on-scroll** con `IntersectionObserver`
- ✅ **Contadores animados** en sección de estadísticas
- ✅ **Menú móvil** con overlay
- ✅ **Botón flotante de WhatsApp** + scroll-to-top
- ✅ **Navbar fija** con efecto al hacer scroll
- ✅ **Datos desacoplados** (todo el contenido en `data.js`)
- ✅ **SEO básico** (meta tags, Open Graph, favicon)
- ✅ **Sin build step**: solo HTML, CSS y JS — abre y listo

---

## 📁 Estructura del proyecto

```
ordenanza-aseo-01/
├── index.html                  # Página principal (inicio)
├── sobre-nosotros.html         # Sobre Nosotros
├── servicios.html              # Catálogo de servicios
├── galeria.html                # Galería con filtros + lightbox
├── clases.html                 # Horarios de clases/capacitación
├── precios.html                # Planes y precios
├── contacto.html               # Formulario de contacto
├── privacidad.html             # Política de privacidad
├── terminos.html               # Términos y condiciones
│
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos personalizados
│   ├── js/
│   │   ├── data.js             # ⭐ Datos centralizados (servicios, galería, etc.)
│   │   ├── main.js             # Lógica global (navbar, reveal, contadores)
│   │   ├── gallery.js          # Lógica de galería + lightbox
│   │   ├── pricing.js          # Toggle mensual/anual de precios
│   │   ├── schedule.js         # Lógica de horarios de clases
│   │   └── contact.js          # Validación de formulario de contacto
│   └── img/
│       ├── icons/
│       │   └── logo.svg        # Logo SVG
│       ├── hero/               # Imágenes del hero
│       ├── gallery/            # Imágenes de galería
│       └── about/              # Imágenes de "sobre nosotros"
│
└── README.md                   # Este archivo
```

---

## 🛠 Tecnologías

| Tecnología       | Uso                                              |
|------------------|--------------------------------------------------|
| HTML5            | Estructura semántica                             |
| TailwindCSS CDN  | Framework de utilidades CSS (sin build)          |
| JavaScript ES6+  | Lógica de interacción                            |
| Font Awesome 6   | Iconografía                                      |
| Google Fonts     | Tipografías (Inter + Playfair Display)           |
| Unsplash         | Imágenes de demostración                        |
| `IntersectionObserver` API | Animaciones on-scroll                  |
| `MutationObserver` API    | Detección de contenido dinámico       |

> **Sin frameworks**: no se usa React, Vue, ni build tools (webpack/rollup/vite). Todo funciona abriendo los HTML directamente o con cualquier servidor estático.

---

## 📄 Páginas

| Página                     | Ruta                      | Descripción                                              |
|----------------------------|---------------------------|----------------------------------------------------------|
| **Inicio**                 | `index.html`              | Hero, servicios destacados, estadísticas, beneficios, testimonios y CTA |
| **Sobre Nosotros**         | `sobre-nosotros.html`     | Historia, equipo, valores y certificaciones              |
| **Servicios**              | `servicios.html`          | Catálogo completo de 8 servicios                         |
| **Galería**                | `galeria.html`            | Galería filtrable (5 categorías) + lightbox              |
| **Clases**                 | `clases.html`             | Horarios semanales de capacitación                        |
| **Precios**                | `precios.html`            | 4 planes (toggle mensual/anual)                          |
| **Contacto**               | `contacto.html`           | Formulario + datos de contacto + mapa                    |
| **Privacidad**             | `privacidad.html`         | Política de privacidad                                   |
| **Términos**               | `terminos.html`           | Términos y condiciones                                   |

---

## 🚀 Instalación y uso

### Opción 1: Abrir directamente (más simple)

Simplemente haz doble clic en `index.html` y se abrirá en tu navegador.

> ⚠️ Algunos navegadores bloquean ciertas funcionalidades al abrir archivos con protocolo `file://`. Si notas problemas, usa la opción 2.

### Opción 2: Servidor local (recomendado)

Con **Python** (ya viene instalado en macOS/Linux):
```bash
python -m http.server 8080
```

Con **Node.js** (usando `npx`):
```bash
npx serve .
```

Con **PHP**:
```bash
php -S localhost:8080
```

Luego abre [http://localhost:8080](http://localhost:8080) en tu navegador.

### Opción 3: VS Code Live Server

Si usas VS Code, instala la extensión **Live Server** y haz clic derecho sobre `index.html` → *"Open with Live Server"*.

---

## 🎨 Personalización

### 1. Colores y tipografías

Edita la configuración de Tailwind en cualquier HTML dentro de la etiqueta `<script>`:

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#7C9885',         // Verde sage principal
          'primary-dark': '#5F7A6A',  // Verde oscuro
          'primary-light': '#A8C5A0', // Verde claro
          secondary: '#F5E6D3',       // Beige
          accent: '#C9A961',          // Dorado
          'accent-dark': '#A88945',   // Dorado oscuro
        },
        fontFamily: {
          serif: ['Playfair Display', 'Georgia', 'serif'],
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
  };
</script>
```

### 2. Contenido del sitio (datos)

**Todo el contenido está centralizado en `assets/js/data.js`.** Para modificar:

- Textos del hero, navbar, footer → variables globales en cada HTML
- Servicios, galería, testimonios, precios, equipo → objeto `DATA` en `data.js`

Ejemplo de cambio rápido (en `data.js`):

```javascript
// Cambiar teléfono global
empresa: {
  telefono: '+56 9 1234 5678',  // ← cambia aquí
  whatsapp: '56912345678',
  email: 'contacto@tuempresa.cl',
}
```

### 3. Imágenes

Las imágenes de demostración provienen de **Unsplash**. Para reemplazarlas:

1. Sube tus imágenes a `assets/img/galeria/` (o la carpeta correspondiente)
2. Actualiza las URLs en `data.js` → sección `galeria:`
3. Cambia también las imágenes de hero (`index.html`) y sobre nosotros (`sobre-nosotros.html`)

### 4. Logo

Reemplaza `assets/img/icons/logo.svg` con tu propio SVG. Se recomienda:
- Formato SVG vectorial
- Fondo transparente
- Dimensiones aproximadas: 200×60 px

---

## 💾 Sistema de datos

Toda la información dinámica se carga desde **`assets/js/data.js`**, que expone el objeto `window.DATA` con esta estructura:

```javascript
DATA = {
  empresa: { nombre, telefono, email, whatsapp, direccion, ... },
  servicios: [ { id, icono, titulo, descripcion, precioDesde, destacado }, ... ],
  beneficios: [ { icono, titulo, descripcion }, ... ],
  testimonios: [ { id, nombre, cargo, foto, comentario, calificacion }, ... ],
  equipo: [ { id, nombre, cargo, foto, bio }, ... ],
  estadisticas: [ { numero, sufijo, texto }, ... ],
  galeria: [ { id, src, categoria, titulo }, ... ],
  horariosClases: { lunes: [...], martes: [...], ... },
  precios: [ { id, nombre, precioMensual, precioAnual, incluye, ... }, ... ],
  faqs: [ { pregunta, respuesta }, ... ],
  valoresEmpresa: [ { icono, titulo, descripcion }, ... ],
  certificaciones: [ 'ISO 9001...', ... ],
};
```

### Categorías de la galería

```javascript
categorias: ['residencial', 'comercial', 'antes-despues', 'equipo']
```

Para agregar una nueva categoría:
1. Agrega el botón en `galeria.html` → `#filter-buttons`
2. Asigna esa categoría a imágenes en `data.js`

---

## ⚙ JavaScript

### `main.js` — Lógica principal

Funciones que se inicializan automáticamente al cargar cualquier página:

| Función                  | Responsabilidad                                       |
|--------------------------|-------------------------------------------------------|
| `initNavbar()`           | Efecto de scroll en navbar                            |
| `initMobileMenu()`       | Apertura/cierre del menú móvil                        |
| `initScrollReveal()`     | Animaciones on-scroll (IntersectionObserver)          |
| `initScrollToTop()`      | Botón "volver arriba"                                 |
| `initStatsCounter()`     | Contadores animados en estadísticas                   |
| `initTestimonialsCarousel()` | Carrusel automático de testimonios               |
| `initFAQ()`              | Abrir/cerrar preguntas frecuentes                      |
| `initActiveNavLink()`    | Marcar el link activo en el navbar                    |
| `initPricingToggle()`    | Toggle mensual/anual                                  |

> 💡 **`initScrollReveal()`** incluye un `MutationObserver` que detecta tarjetas dinámicas (servicios, testimonios, galería, etc.) y las anima correctamente al aparecer en pantalla.

### `gallery.js` — Galería + Lightbox

- `initGallery()` → render inicial
- Filtros por categoría (botones en `galeria.html`)
- Lightbox con navegación por teclado (←/→/Esc)
- Auto-play en el carrusel de testimonios (pausa con hover)

---

## 🎨 Estilos y paleta

### Paleta de colores

| Token            | HEX       | Uso                                  |
|------------------|-----------|--------------------------------------|
| `primary`        | `#7C9885` | Verde sage — color principal de marca |
| `primary-dark`   | `#5F7A6A` | Verde oscuro — hover, footer         |
| `primary-light`  | `#A8C5A0` | Verde claro — acentos                |
| `secondary`      | `#F5E6D3` | Beige cálido — secciones suaves      |
| `accent`         | `#C9A961` | Dorado — CTAs, estrellas, destacado   |
| `accent-dark`    | `#A88945` | Dorado oscuro — hover de acento       |

### Tipografías

- **Playfair Display** (serif): títulos, hero, secciones destacadas
- **Inter** (sans-serif): cuerpo de texto, párrafos, botones

### Breakpoints (Tailwind)

| Breakpoint | Mínimo | Uso típico                       |
|------------|--------|----------------------------------|
| (base)     | 0px    | Móvil                            |
| `sm`       | 640px  | Móvil grande                     |
| `md`       | 768px  | Tablet                           |
| `lg`       | 1024px | Desktop (menú horizontal visible) |
| `xl`       | 1280px | Desktop grande                   |

---

## 🌐 Despliegue

Este es un sitio **100% estático**, así que puedes desplegarlo en cualquier servicio:

| Servicio              | Cómo                                       |
|-----------------------|--------------------------------------------|
| **Netlify**           | Arrastra la carpeta a [netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel**            | `vercel --prod` desde la carpeta           |
| **GitHub Pages**      | Sube el repo y activa Pages en Settings    |
| **Cloudflare Pages**  | Conecta el repo y despliega                |
| **Hosting tradicional**| Sube todos los archivos vía FTP            |

> ✅ No requiere backend ni base de datos. Solo sube los archivos y listo.

---

## 🐛 Solución de problemas

### Las imágenes no cargan

- Verifica tu conexión a internet (algunas vienen de Unsplash)
- Si quieres imágenes locales, descárgalas y reemplaza las URLs en `data.js`

### El menú móvil no se abre

- Verifica que `assets/js/main.js` se carga correctamente (revisa la consola del navegador con F12)
- Comprueba que `assets/css/styles.css` no esté bloqueado

### Las animaciones no se ven al hacer scroll

- Las animaciones usan `IntersectionObserver`, compatible con todos los navegadores modernos (Chrome 51+, Firefox 55+, Safari 12.1+)
- Si tienes un navegador antiguo, las secciones se mostrarán estáticamente (sin animarse) pero el sitio seguirá funcionando

### El formulario de contacto no envía emails

- Esta plantilla **no incluye backend**. El formulario solo valida datos localmente.
- Para envío real de emails, integra con:
  - [Formspree](https://formspree.io/)
  - [EmailJS](https://www.emailjs.com/)
  - Tu propio backend (PHP, Node.js, etc.)
  - Servicios como [Netlify Forms](https://docs.netlify.com/forms/setup/)

### Problemas con CORS al abrir directamente con `file://`

Algunos navegadores bloquean recursos al abrir archivos locales. **Usa un servidor local** (ver [Instalación y uso](#-instalación-y-uso)).

---

## 📝 Licencia y créditos

### Imágenes

Todas las imágenes de demostración provienen de [**Unsplash**](https://unsplash.com/), una plataforma de imágenes gratuitas bajo la [Licencia Unsplash](https://unsplash.com/license) (uso comercial permitido sin atribución).

### Iconos

- [Font Awesome 6](https://fontawesome.com/) (Free / CC BY 4.0)
- Emojis nativos Unicode para iconos de servicios y beneficios

### Tipografías

- [Inter](https://rsms.me/inter/) (SIL Open Font License)
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (SIL Open Font License)

### Frameworks

- [TailwindCSS](https://tailwindcss.com/) (MIT License)

---

## 📞 Contacto del proyecto

Para dudas o sugerencias sobre esta plantilla:

- 📧 Email: `contacto@lasmunoz.cl`
- 📱 WhatsApp: `+56 9 8765 4321`
- 📍 Santiago, Chile

---

<div align="center">

**Desarrollado con ❤️ para tu tranquilidad**

[⬆ Volver arriba](#-las-muñoz---landing-page)

</div>