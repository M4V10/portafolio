import Model3D from './Model3D'
import ShinyText from './ShinyText'
import { useTheme } from '../context/useTheme'
import { useSmoothScroll } from '../context/useSmoothScroll'

const Hero = () => {
  const { theme } = useTheme()
  const { scrollTo } = useSmoothScroll()
  const isDark = theme === 'dark'

  const handleClick = (e, href) => {
    e.preventDefault()
    scrollTo(href)
  }

  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-yellow-500 dark:text-yellow-400 text-lg mb-4 tracking-widest uppercase">Hola, soy</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-none mb-6">
            Pablo
          </h1>
          <ShinyText
            text="Diseñador Industrial & Desarrollador Web"
            speed={3}
            delay={0}
            color={isDark ? '#b5b5b5' : '#4b5563'}
            shineColor={isDark ? '#ffffff' : '#111827'}
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className="text-2xl md:text-3xl font-light mb-8"
          />
          <p className="text-gray-500 max-w-xl text-lg mb-10">
            Del modelamiento 3D/BIM al desarrollo web
          </p>
          <div className="flex gap-4">
            <a
              href="#industrial-projects"
              onClick={(e) => handleClick(e, '#industrial-projects')}
              className="bg-yellow-500 dark:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 dark:hover:bg-yellow-300 transition"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-8 py-4 rounded-full font-bold text-lg hover:border-yellow-500 dark:hover:border-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition"
            >
              Contacto
            </a>
          </div>
        </div>

        <Model3D />
      </div>
    </section>
  )
}

export default Hero
