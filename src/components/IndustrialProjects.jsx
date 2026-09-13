import ProjectCard from './ProjectCard'

const industrialProjects = [
  {
    title: "Diseño BIM",
    description: "Modelado y coordinación de proyectos industriales usando Revit y Navisworks.",
    tags: ["Revit", "Navisworks", "BIM"],
    link: "#"
  },
]

const IndustrialProjects = () => {
  return (
    <section id="industrial-projects" className="py-20 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Diseño <span className="text-yellow-500 dark:text-yellow-400">Industrial</span>
        </h2>
        <div className="max-w-xl mx-auto text-center">
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
           Algunos de mis Proyectos
        </p>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industrialProjects.map((project) => (
            <ProjectCard key={project.title} {...project} cardBg="bg-gray-100 dark:bg-gray-900" />
          ))}
        </div>
        

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industrialProjects.map((project) => (
            <ProjectCard key={project.title} {...project} cardBg="bg-gray-100 dark:bg-gray-900" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustrialProjects
