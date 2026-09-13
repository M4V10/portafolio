import ProjectCard from './ProjectCard'

const webProjects = [
  {
    title: "Atlético 27 F.C.",
    description: "Sitio web para club de fútbol con match center, countdown, plantel de jugadores y resultados.",
    tags: ["React", "Vite", "CSS"],
    link: "https://a27-pi.vercel.app/"
  },
]

const WebProjects = () => {
  return (
    <section id="web-projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Proyectos <span className="text-yellow-500 dark:text-yellow-400">Web</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {webProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WebProjects
