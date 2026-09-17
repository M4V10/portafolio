import { useTheme } from '../context/useTheme'
import { useSmoothScroll } from '../context/useSmoothScroll'
import TextType from './TextType'

const SunIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)

const MoonIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
)

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-yellow-400 hover:text-yellow-400 transition"
    >
      {isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
    </button>
  )
}

const NAV_LINKS = [
  { href: '#industrial-projects', label: 'Diseño Industrial' },
  { href: '#web-projects', label: 'Proyectos Web' },
  { href: '#contact', label: 'Contacto' },
]

const Navbar = () => {
  const { scrollTo } = useSmoothScroll()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    scrollTo(href)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm z-50 px-6 py-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex flex-col leading-tight">
          <span className="text-yellow-500 dark:text-yellow-400 font-bold text-xl">Pablo Navarro</span>
          <TextType
            text={['Diseñador Industrial', 'Desarrollador Web']}
            as="span"
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={50}
            showCursor
            cursorCharacter="_"
            cursorBlinkDuration={0.5}
            className="hidden sm:inline-block text-xs text-gray-500 dark:text-gray-400 !whitespace-nowrap"
          />
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-gray-600 dark:text-gray-400">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="hover:text-yellow-500 dark:hover:text-yellow-400 transition"
                >
                  {label}
                </a>
              </li>
              
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar