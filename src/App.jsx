import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IndustrialProjects from './components/IndustrialProjects'
import WebProjects from './components/WebProjects'
import Contact from './components/Contact'

function App() {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <IndustrialProjects />
      <WebProjects />
      <Contact />
    </main>
  )
}

export default App
