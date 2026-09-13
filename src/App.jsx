import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WebProjects from './components/WebProjects'
import IndustrialProjects from './components/IndustrialProjects'
import Contact from './components/Contact'
import Model3D from './components/Model3D'

function App() {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <IndustrialProjects />
      <WebProjects />      
      <Contact />
      <Model3D />
    </main>
  )
}

export default App