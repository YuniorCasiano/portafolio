# Portafolio — Angel Casiano

Portafolio personal construido con React + Vite + TailwindCSS.

## Correr en local

```bash
npm install
npm run dev
```

## Compilar para producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para desplegar.

## Desplegar en Vercel (recomendado, mismo flujo que Modex Plus)

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com), conecta tu cuenta de GitHub e importa el repo.
3. Vercel detecta Vite automáticamente (build command: `npm run build`, output: `dist`).
4. Deploy.

## Estructura

```
src/
  components/   → Nav, Hero, About, Projects, ProjectCard, Skills, Contact, Footer
  data/         → projects.js (contenido de los proyectos, editable sin tocar componentes)
  index.css     → estilos base + Tailwind
  App.jsx       → ensambla todas las secciones
```

## Editar contenido

Todo el texto de los proyectos vive en `src/data/projects.js`. Para agregar o modificar un
proyecto, edita ese archivo — no hace falta tocar los componentes.
