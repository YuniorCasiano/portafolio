# Portafolio — Angel Casiano

Portafolio de Angel Casiano, desarrollador Java enfocado en arquitecturas de microservicios (Java/Spring Boot) con frontends en React. 

## Qué incluye la página

- **Inicio** — presentación estilo "servicio registrado" (`● UP · ANGEL-CASIANO-SERVICE`), con badge de estado, rol y stack destacado.
- **Sobre mí** — breve bio con foto de perfil.
- **Proyectos** — carrusel paginado (◀ ▶ + puntos de navegación) con imagen, descripción funcional (qué hace cada app) y stack técnico en chips. Incluye:
  - **Sanovia** — sistema de gestión médica con arquitectura de microservicios.
  - **Modex Plus · Microservicios** — versión original de la tienda, con 6 microservicios y patrón Saga (Kafka).
  - **Modex Plus · Monolito** — la misma tienda migrada a monolito, en producción (Render + Vercel).
- **README por proyecto** — cada proyecto tiene su propia página de detalle (`/readme/:id`) con overview, stack, arquitectura, tablas de servicios/roles y, en el caso de Modex, la tabla de diferencias entre ambas versiones.
- **CV** — sección con botón de descarga del currículum en PDF.
- **Stack** — todas las tecnologías con las que he trabajado, agrupadas por categoría (Backend, Frontend, Datos, DevOps & infraestructura, Mobile, Herramientas).
- **Contacto** — Email, WhatsApp, GitHub y LinkedIn, también repetidos como iconos en el footer.
- **Modo oscuro/claro** con toggle (☀/🌙), oscuro por defecto, con persistencia entre visitas.
- **Selector de idioma ES/EN** para los textos generales de la interfaz (nav, hero, botones, labels de sección). El contenido detallado de los proyectos y los README quedan en español.

## Stack del propio portafolio

- React 18 + Vite
- React Router (rutas para las páginas de README)
- TailwindCSS (modo oscuro vía clase `dark`)
- lucide-react (iconografía)

## Estructura del proyecto

```
src/
  assets/       → imágenes (capturas de proyectos, foto de perfil)
  components/   → Nav, Hero, About, Projects, ProjectCard, CV, Skills, Contact, Footer, StatusBadge
  context/      → ThemeContext (oscuro/claro), LanguageContext (ES/EN)
  data/         → projects.js — todo el contenido de los proyectos, editable sin tocar componentes
  pages/        → Home.jsx (página principal), ReadmePage.jsx (detalle de cada proyecto)
```

