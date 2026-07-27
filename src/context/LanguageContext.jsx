import { createContext, useContext, useState } from 'react'

const dict = {
  es: {
    nav_about: 'Sobre mí',
    nav_projects: 'Proyectos',
    nav_stack: 'Stack',
    nav_cv: 'CV',
    nav_contact: 'Contacto',
    nav_open_to_work: 'OPEN TO WORK',
    hero_eyebrow: 'BACKEND · JAVA · MICROSERVICIOS',
    hero_title: 'Construyo sistemas que se registran, se comunican y no se caen.',
    hero_subtitle:
      'Desarrollador Java — arquitecturas de microservicios con Java/Spring Boot y frontends en React. Estudiante del ITLA en República Dominicana.',
    hero_meta: 'instance: santo-domingo · role: java developer · since: 2024',
    hero_cta_projects: 'Ver proyectos',
    hero_cta_cv: 'Descargar CV',
    hero_cta_contact: 'Contactar',
    about_label: '01 · SOBRE MÍ',
    projects_label: '02 · PROYECTOS',
    modex_note: 'Modex Plus tiene dos versiones — misma tienda, arquitecturas distintas.',
    cv_label: '03 · CV',
    cv_title: 'Currículum de Angel Casiano',
    cv_subtitle: 'PDF · experiencia, proyectos y formación',
    cv_download: 'Descargar CV',
    stack_label: '04 · STACK',
    contact_label: '05 · CONTACTO',
    contact_title: '¿Buscas un desarrollador Java para tu equipo? Hablemos.',
    footer_tagline: 'Construido con cuidado.',
  },
  en: {
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_stack: 'Stack',
    nav_cv: 'Resume',
    nav_contact: 'Contact',
    nav_open_to_work: 'OPEN TO WORK',
    hero_eyebrow: 'BACKEND · JAVA · MICROSERVICES',
    hero_title: 'I build systems that register, talk to each other, and don\u2019t go down.',
    hero_subtitle:
      'Java developer — microservice architectures with Java/Spring Boot and React frontends. Software engineering student at ITLA, Dominican Republic.',
    hero_meta: 'instance: santo-domingo · role: java developer · since: 2024',
    hero_cta_projects: 'View projects',
    hero_cta_cv: 'Download resume',
    hero_cta_contact: 'Get in touch',
    about_label: '01 · ABOUT',
    projects_label: '02 · PROJECTS',
    modex_note: 'Modex Plus has two versions — same store, different architectures.',
    cv_label: '03 · RESUME',
    cv_title: "Angel Casiano's Resume",
    cv_subtitle: 'PDF · experience, projects and education',
    cv_download: 'Download resume',
    stack_label: '04 · STACK',
    contact_label: '05 · CONTACT',
    contact_title: 'Looking for a Java developer for your team? Let\u2019s talk.',
    footer_tagline: 'Built with care.',
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')
  const t = (key) => dict[lang][key] ?? key
  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  return <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
