import { useLanguage } from '../context/LanguageContext'
import profilePhoto from '../assets/profile.png'

export default function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="border-b border-line dark:border-line-dark bg-surface dark:bg-surface-dark">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <p className="mb-4 inline-block rounded-full bg-violet-soft dark:bg-violet/15 px-3 py-1 font-mono text-xs text-violet">{t('about_label')}</p>

        <div className="flex flex-col items-start gap-6 sm:flex-row">
          <img
            src={profilePhoto}
            alt="Angel Casiano"
            className="h-20 w-20 shrink-0 rounded-full border border-line dark:border-line-dark object-cover"
          />

          <p className="max-w-2xl text-base leading-relaxed text-ink dark:text-ink-dark">
            Estudio en el Instituto Tecnológico de las Américas (ITLA), donde curso desarrollo de software. Me
            enfoco en construir sistemas reales de punta a punta: desde el diseño de arquitecturas de
            microservicios hasta el frontend que las consume. Actualmente desarrollo distintos sistemas
            novedosos para el mercado laboral, como un sistema de gestión médica con arquitectura completa de
            microservicios, y Modex Plus, una tienda en línea ya desplegada en producción. He trabajado en
            distintos proyectos que alimentan mis ganas de aprender, y sigo a la espera de más retos.
          </p>
        </div>
      </div>
    </section>
  )
}
