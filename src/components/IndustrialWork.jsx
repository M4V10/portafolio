import ExpandingCards from './ExpandingCards'
import { industrialCards } from '../data/industrialCards'

const IndustrialWork = () => {
  return (
    <section id="industrial-projects" className="py-24 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          Diseño <span className="text-yellow-500 dark:text-yellow-400">Industrial</span>
        </h2>

        <ExpandingCards cards={industrialCards} />
      </div>
    </section>
  )
}

export default IndustrialWork
